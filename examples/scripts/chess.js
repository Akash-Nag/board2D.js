var game;
var white=0, black=1;
var selPiecePosition=null;

$(window).on("load", function() { init(); });

function startNewGame()
{
    game.startGame();   
}

function init()
{
    // create board    
    var board = new Board("MyBoard", {
                                width:480,
                                height:480,
                                squareCountX:8,
                                squareCountY:8,
                                squareWidth:60,
                                squareHeight:60,
                                hasSquareBorder: true,
                                borderColor: "#ffffff",
                                highlightColors: ["rgb(255,201,14)","rgb(0,128,255)","rgb(128,255,128)"],
                                squareRadius: 0
    });
    
    board.setCheckerBoard("#eeeeee","#bbbbbb");
    
    var imageNames = [ "pawn", "rook", "knight", "bishop", "queen", "king" ];
    var pieceIndices = [ 0, 1, 2, 3, 4, 5, 3, 2, 1 ];
    
    var blackPieceTypes = new Array(6);
    var whitePieceTypes = new Array(6);
    
    for(var i=0; i<6; i++)
    {
        var imageURLBlack = "./images/chess/b" + imageNames[i] + ".gif";
        var imageURLWhite = "./images/chess/w" + imageNames[i] + ".gif";
        
        var blackName = "black" + imageNames[i];
        var whiteName = "white" + imageNames[i];
        
        var blackSpecs = {
                                isImage: true,
                                imageURL: imageURLBlack,
                                width: 40,
                                height: 40,
                                offsetX: 10,
                                offsetY: 10
        };
        
        var whiteSpecs = {
                                isImage: true,
                                imageURL: imageURLWhite,
                                width: 40,
                                height: 40,
                                offsetX: 10,
                                offsetY: 10
        };
        
        whitePieceTypes[i]=new PieceType(whiteName, whiteSpecs);
        blackPieceTypes[i]=new PieceType(blackName, blackSpecs);
    }
        
    // create game
    game = new Game("Chess", "BoardContainer",  { 
                                                        playerCount: 2, 
                                                        board: board 
                                                    }, 
                                                    gameClicked
                   );
    
    // start the game
    game.startGame();
    
    // insert the pieces in the game    
    var newPiece = null;
    for(var k=0, c=0; k<pieceIndices.length; k++)
    {
        var i=pieceIndices[k];
        if(k==0)
        {
            for(var j=0; j<8; j++)
            {
                newPiece=new Piece(++c, whitePieceTypes[i], white, false);
                game.insertPiece(j,6,newPiece);
                
                newPiece=new Piece(++c, blackPieceTypes[i], black, false);
                game.insertPiece(j,1,newPiece);                
            }
        } else {
            newPiece=new Piece(++c, whitePieceTypes[i], white, false);
            game.insertPiece(k-1,7,newPiece);
                
            newPiece=new Piece(++c, blackPieceTypes[i], black, false);
            game.insertPiece(k-1,0,newPiece);
        }
    }
    
    game.repaint();
}

// game logic
function gameClicked(x, y)
{
    var turn = game.getPlayerTurn();
    
    var tp=game.getPieceAt(x,y);
    if(tp!=null)
    {
        game.clearHighlights();
        if(tp.getOwnerIndex()!=turn) return;        // no capture
        
        selPiecePosition = new Position(x,y);
        game.highlightSquare(x,y,0);
        highlightMoves(tp);
        
        game.repaint();
        return;
    }
    
    if(selPiecePosition==null) return;
    
    if(game.isHighlighted(x,y))
    {
        if(game.arePositionsEqual(x,y,selPiecePosition)) return;
        
        game.movePiece(selPiecePosition.x, selPiecePosition.y, x, y);
        game.clearHighlights();
        selPiecePosition=null;
        game.switchTurnAndRotateBoard(true,2);
        game.repaint();
    }
}

function highlightMoves(piece)
{
    var n=piece.pieceType.getName().toString().toLowerCase().trim();
    var s=getMovementString(n);
    
    var x=selPiecePosition.x;
    var y=selPiecePosition.y;
    
    var posList=null;
    
    if(n=="blackknight" || n=="whiteknight")
        posList=game.getPositionListFromMovement(x, y, true, s[0]);
    else {
        posList=new Array(1);
        posList[0]=new Position(x,y);
        for(var i=0; i<s.length; i++) 
        {
            var g=game.getPositionsTillFirstEncounterFrom(x, y, s[i], false, false, -1);
            posList=game.unionOf(g,posList);
        }
    }
    
    posList = game.removeBlockedPositions(posList,false,-1,false,null);
    posList = game.removeInvalidPositions(posList);
    posList = game.removePositionFromList(posList,selPiecePosition);
    
    game.highlightSquares(posList,2);
}
        
function getMovementString(n)
{
    if(n=="blackpawn" || n=="whitepawn")
    {
        if(selPiecePosition.y==6)
            return(["U2"]);
        else
            return(["U1"]);
    } else if(n=="blackrook" || n=="whiterook") {
        return(["L-1","R-1","U-1","D-1"]);
    } else if(n=="blackbishop" || n=="whitebishop") {
        return(["Q-1","E-1","Z-1","X-1"]);
    } else if(n=="blackking" || n=="whiteking") {
        return(["L1","R1","U1","D1","Q1","E1","Z1","X1"]);
    } else if(n=="blackqueen" || n=="whitequeen") {
        return(["L-1","R-1","U-1","D-1","Q-1","E-1","Z-1","X-1"]);
    } else if(n=="blackknight" || n=="whiteknight") {
        return(["#U2,L1,P0,R2,P0,I0,D2,L1,P0,R2,P0,I0,L2,U1,P0,D2,P0,I0,R2,U1,P0,D2,P0"]);
    }
}
        