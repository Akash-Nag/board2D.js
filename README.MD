# board2D
**board2D** is a JavaScript library that allows you to quickly develop 2D board games for the web. It is extremely easy to use and contains a very rich API.

## 1. Basic Tasks
To use **board2D**, we need to include the corresponding javascript library file named **board2D.js** (assuming it is in the ‘scripts’ folder) in the script tag in our HTML file, as follows:

```html
<script language=”javascript” src=”./scripts/onboard.js”></script>
```

There are five basic classes present in **board2D**, which are shown in the following table: 

| Class     | Purpose |
| --------- | ------- |
| Position  | Encapsulates a 2D point with X and Y coordinates, representing cell positions |
| PieceType | Represents a type of piece; many pieces of each piece-type may exist on the board |
| Piece     | Represents an individual piece on the board |
| Board     | Represents the entire board with all cells |
| Game      | Encapsulates the various game elements; also responsible for tracking player turn and scores |


We now describe the order in which objects from these classes must be created to design a typical tic-tac-toe game. The HTML code for the game requires a container that will accommodate the game-board, and a button that will start a new game:

```html
<input type="button" value="New Game" onClick="startNewGame();"/>
<div id="BoardContainer" style="overflow:hidden; position:absolute; left:250px; top:150px; width:302px; height:302px; border-style:solid; border-width:2px;"></div>
```

### 1.1 Creating the Board

To create a board, we need to create an object of type Board, and pass it several parameters describing its appearance:

```javascript
var board = new Board("MyBoard", 
{ 
    width: 300, 
    height: 300, 
    squareCountX: 3, 
    squareCountY: 3, 
    squareWidth: 100, 
    squareHeight: 100,
    hasSquareBorder: true, 
    borderColor: "#ffffff", 
    squareRadius: 0 
});    

board.setSingleColorBoard("#dddddd");
```

The above code creates a board named “MyBoard” of size 300x300 pixels having a 3x3 grid, with each square being 100x100 pixels in dimensions. Each cell has a white border, and the cells are square with no rounding of edges. All cells have the same background color of light gray. Alternately, we can create a checkerboard using the `setCheckerBoard()` function to create cells alternating between two colors like that used in the game of chess.

### 1.2 Creating the Piece Types

After the board, we must define the various piece-types present in the game. For a tic-tact-toe game, only two types of pieces are possible: the cross and the ring. To create a piece-type, we need to create an object of type PieceType, as follows:

```javascript
var crossPiece = new PieceType("Cross", 
{ 
    isImage: true, 
    imageURL: "./images/cross.gif",
    width: 50, 
    height: 50, 
    offsetX: 25, 
    offsetY: 25 
});
```

In the above code, we create a piece named ‘Cross’, and set its dimensions to 50x50 pixels, with offset values within a cell to 25 pixels, and set it to have a display image by specifying an image URL.

### 1.3 Creating and Starting the Game

Next, one needs to create an object of type Game, and start the game, as follows:

```javascript
var game = new Game(
    "TicTacToe", 
    "BoardContainer", 
    { 
        playerCount: 2, 
        board: board 
    }, 
    gameClicked
);    

game.startGame();
```

The above code creates a game object, assigns the board to be displayed with a `<div>` tag with ID “BoardContainer”, sets the number of players and the board object, assigns a click handler to a user defined function named “gameClicked”. Whenever any player clicks on any cell, this function will get triggered automatically.

### 1.4 Handling Game Pieces

The event handler for the game, passed as the last parameter to the Game constructor now receives all click events related to the game, as follows:

```javascript
function gameClicked(x,y)
{
    if(!game.isSquareEmpty(x,y)) return;

    ++counter;
    var newPiece=null;
    var crossPlayer=0;
    var ringPlayer=1;
    
    if(game.getPlayerTurn()==crossPlayer) {
        newPiece=new Piece(counter, crossPiece, crossPlayer, -1);
    } else {
        newPiece=new Piece(counter, ringPiece, ringPlayer, -1);
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
```

Whenever any player clicks on a cell, the above function gets triggered and the coordinates of the cell are passed as parameters. The `isSquareEmpty()` function returns whether a particular cell is empty or whether it contains any piece. To create a piece, we need to create an object of type Piece and pass its constructor four parameters: a unique ID, the piece-type, the piece-owner, and its rotation (-1 for fixed, 0-3 for rotation with respect to the board). Since a tic-tac-toe game has 2 players, we pass 0 and 1 as the owners of the cross and ring pieces respectively. Creating a piece object does not place it on the board. We need to specifically call the `insertPiece()` function for that, which takes a cell coordinate as parameter to insert the piece at that position. The `removePieceFrom()` and the `movePiece()` functions delete and move a piece respectively. After any changes made to the board, the `repaint()` function must be called for the changes to take effect. The `pauseGame()` function pauses a game preventing game events to be fired, while the `switchTurn()` function changes the turn of the player. The `getPlayerTurn()` function returns the index of the player whose turn it is presently.

**Rotation Codes:**
| Code | Angle   |
| ---- | ------- |
| 0    | 90 deg  |
| 1    | 0 deg   |
| 2    | 270 deg |
| 3    | 180 deg |

**Direction Codes:**
|   |   |   |
| - | - | - |
| Q | U | E |
| L | I | R |
| Z | D | X |

### 1.5 Implementing Game Logic

The user-defined function `hasWon()` contains the logic behind the tic-tac-toe game. Basically, a series of 3 adjacent crosses or rings (either in the same row, or same column or same diagonal) results in a win. It is implemented as follows:

```javascript
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
```

In the above code, we use movement-strings (See Section 2.1) to get the coordinates of all squares in a particular row or a particular column. Without this feature, we would have to enumerate these coordinates manually, which is quite tedious. We then iterate over each such set of coordinates, and call the `hasSamePiecesInPositions()` function to check whether each of the 3 positions (in a row or column or diagonal) contains the same piece (i.e. all crosses or all rings) and it is not empty. If it does occur, the game has been won by the current player.

## 2. Feature Highlights

**board2D** provides many novel features that makes developing board games a breeze. Before we begin this section, we need to familiarize ourselves with the 1-letter direction codes used by the library – where U represents Up, D represents Down, etc. Rotation indices vary from 0 to 3, where 0 represents the direction of the positive Y-axis, 1 represents that of the positive X-axis, while 2 and 3 represent the directions of the negative Y and X axes respectively.

### 2.1	Movement Strings

Calculating moves for a piece is very easy with **board2D**. Let us take the analogy of a Knight in the game of chess. Computing the positions of all valid moves of the Knight is a tedious process of enumerating all the indices, and in libraries like JSBoard, we have to do just that. But **board2D** takes a different approach – an approach that is more in tune with how we play chess rather than thinking in terms of coordinates. While enumerating the rules of chess, we say that a knight may move up 2 squares and then turn left or right. This is represented in **board2D** as a path (called the movement-string) “U2,L1” or “U2,R1”, where “U2” represents move up two squares and L1 or R1 represents Left and Right respectively for 1 square. Additional direction codes like # are used to suppress the path, P is used for considering the current position, and I is used to return to the initial position. So, to enumerate the knight’s moves (the top two squares in the first row), we just need to form a movement-string like “#U2,L1,P0,R2,P0” where # suppresses output for the whole path, and P prints the output at that point. The 0 with the P is ignored. So, if the current position is (2,2), the path traversed by the movement string is (2,1), (2,0), **(1,0)**,\*, (2,0), **(3,0)**, \*; but only the coordinates preceding the * (shown in bold) are printed, where * represents the position of the “P” command.

### 2.2	Other Features

**board2D** comes with inbuilt support for many other features, some of which are listed below:
* Rotating boards, and pieces with respect to it
* Computing paths between points, deciding reachability
* Manipulation of position lists, such as removing invalid positions, computing unions, intersections and differences
* Highlighting specific squares depending on situations; assigning tags to squares and setting specific backgrounds to cells
* Piece searching, filtered by owner or piece-type – within the board or within specific regions or positions
* Math functions like: throwing dice, checking ranges, computing distances
* Storing click history of square positions clicked by players, tracking player scores, playing sounds, etc.
* Calling user functions on certain events like piece insertion, moving and deletion
* Counting pieces, setting custom square backgrounds for complex board designs (e.g. word-scramblers, etc.)

### 2.3 Examples
The examples folder contains complete source code for 2 simple example games: Tic-Tac-Toe, and Chess. The AI for the games have not been implemented.

## 3. License
**board2D** is licensed under the [Artistic License 2.0](https://opensource.org/licenses/Artistic-2.0)