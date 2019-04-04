var crossPiece, ringPiece, game;
var crossPlayer = 0, ringPlayer = 1;

$(window).on("load", function() { init(); });

function startNewGame()
{
    game.startGame();   
}

function init()
{
    // create board    
    var board = new Board("MyBoard", {
                                width:300,
                                height:300,
                                squareCountX:3,
                                squareCountY:3,
                                squareWidth:100,
                                squareHeight:100,
                                hasSquareBorder: true,
                                borderColor: "#ffffff",
                                squareRadius: 0
    });
    
    board.setSingleColorBoard("#dddddd");
        
    // create piece-types
    crossPiece = new PieceType("Cross", {
                                            isImage: true,
                                            imageURL: "./images/tictactoe/cross.gif",
                                            width: 50,
                                            height: 50,
                                            offsetX: 25,
                                            offsetY: 25
                });
        
    ringPiece = new PieceType("Ring", {
                                            isImage: true,
                                            imageURL: "./images/tictactoe/ring.gif",
                                            width: 50,
                                            height: 50,
                                            offsetX: 25,
                                            offsetY: 25
                });
    
    // create game
    game = new Game("TicTacToe", "BoardContainer",  { 
                                                        playerCount: 2, 
                                                        board: board 
                                                    }, 
                                                    gameClicked
                   );
    
    // start the game
    game.startGame();
}

// game logic
function gameClicked(x, y)
{
    if(!game.isSquareEmpty(x,y)) return;
    
    var newPiece=null;
    if(game.getPlayerTurn()==crossPlayer)
    {
        newPiece=new Piece(1, crossPiece, crossPlayer, false);
    } else {
        newPiece=new Piece(1, ringPiece, ringPlayer, false);
    }
    
    game.insertPiece(x,y,newPiece);
    game.repaint();
    
    if(!hasWon()) 
        game.switchTurn();
    else {
        game.pauseGame();
        alert("Congrats! you have won!");        
    }
}

function hasWon()
{
    var row1 = game.getPositionListFromMovement(0,0,true,"R0,R2");
    var row2 = game.getPositionListFromMovement(0,1,true,"R0,R2");
    var row3 = game.getPositionListFromMovement(0,2,true,"R0,R2");
    
    var col1 = game.getPositionListFromMovement(0,0,true,"D0,D2");
    var col2 = game.getPositionListFromMovement(1,0,true,"D0,D2");
    var col3 = game.getPositionListFromMovement(2,0,true,"D0,D2");
    
    var primaryDiag = game.getPositionListFromMovement(0,0,true,"X0,X2");
    var secondaryDiag = game.getPositionListFromMovement(2,0,true,"Z0,Z2");
    
    var list = [ row1, row2, row3, col1, col2, col3, primaryDiag, secondaryDiag ];
    
    for(var i=0; i<list.length; i++)
    {
        var pos = list[i][0];
        var pt = game.getPieceTypeAt(pos.x, pos.y);
        
        if(pt==null) continue;
        if(game.hasSamePiecesInPositions(list[i])) return true;
    }
    
    return false;   
}