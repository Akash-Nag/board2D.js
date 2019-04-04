/*
 *****************************************************
 *                  board2D.js                   *
 *                  Version 1.0                     *
 *****************************************************
 *   A JavaScript library to develop 2D board games  *
 *****************************************************
 
 This software is protected by Artistic License 2.0, a copy of which is provided below.
 
 
 
				The Artistic License 2.0

	    Copyright (c) 2000-2006, The Perl Foundation.

     Everyone is permitted to copy and distribute verbatim copies
      of this license document, but changing it is not allowed.

Preamble

This license establishes the terms under which a given free software
Package may be copied, modified, distributed, and/or redistributed.
The intent is that the Copyright Holder maintains some artistic
control over the development of that Package while still keeping the
Package available as open source and free software.

You are always permitted to make arrangements wholly outside of this
license directly with the Copyright Holder of a given Package.  If the
terms of this license do not permit the full use that you propose to
make of the Package, you should contact the Copyright Holder and seek
a different licensing arrangement. 

Definitions

    "Copyright Holder" means the individual(s) or organization(s)
    named in the copyright notice for the entire Package.

    "Contributor" means any party that has contributed code or other
    material to the Package, in accordance with the Copyright Holder's
    procedures.

    "You" and "your" means any person who would like to copy,
    distribute, or modify the Package.

    "Package" means the collection of files distributed by the
    Copyright Holder, and derivatives of that collection and/or of
    those files. A given Package may consist of either the Standard
    Version, or a Modified Version.

    "Distribute" means providing a copy of the Package or making it
    accessible to anyone else, or in the case of a company or
    organization, to others outside of your company or organization.

    "Distributor Fee" means any fee that you charge for Distributing
    this Package or providing support for this Package to another
    party.  It does not mean licensing fees.

    "Standard Version" refers to the Package if it has not been
    modified, or has been modified only in ways explicitly requested
    by the Copyright Holder.

    "Modified Version" means the Package, if it has been changed, and
    such changes were not explicitly requested by the Copyright
    Holder. 

    "Original License" means this Artistic License as Distributed with
    the Standard Version of the Package, in its current version or as
    it may be modified by The Perl Foundation in the future.

    "Source" form means the source code, documentation source, and
    configuration files for the Package.

    "Compiled" form means the compiled bytecode, object code, binary,
    or any other form resulting from mechanical transformation or
    translation of the Source form.


Permission for Use and Modification Without Distribution

(1)  You are permitted to use the Standard Version and create and use
Modified Versions for any purpose without restriction, provided that
you do not Distribute the Modified Version.


Permissions for Redistribution of the Standard Version

(2)  You may Distribute verbatim copies of the Source form of the
Standard Version of this Package in any medium without restriction,
either gratis or for a Distributor Fee, provided that you duplicate
all of the original copyright notices and associated disclaimers.  At
your discretion, such verbatim copies may or may not include a
Compiled form of the Package.

(3)  You may apply any bug fixes, portability changes, and other
modifications made available from the Copyright Holder.  The resulting
Package will still be considered the Standard Version, and as such
will be subject to the Original License.


Distribution of Modified Versions of the Package as Source 

(4)  You may Distribute your Modified Version as Source (either gratis
or for a Distributor Fee, and with or without a Compiled form of the
Modified Version) provided that you clearly document how it differs
from the Standard Version, including, but not limited to, documenting
any non-standard features, executables, or modules, and provided that
you do at least ONE of the following:

    (a)  make the Modified Version available to the Copyright Holder
    of the Standard Version, under the Original License, so that the
    Copyright Holder may include your modifications in the Standard
    Version.

    (b)  ensure that installation of your Modified Version does not
    prevent the user installing or running the Standard Version. In
    addition, the Modified Version must bear a name that is different
    from the name of the Standard Version.

    (c)  allow anyone who receives a copy of the Modified Version to
    make the Source form of the Modified Version available to others
    under
		
	(i)  the Original License or

	(ii)  a license that permits the licensee to freely copy,
	modify and redistribute the Modified Version using the same
	licensing terms that apply to the copy that the licensee
	received, and requires that the Source form of the Modified
	Version, and of any works derived from it, be made freely
	available in that license fees are prohibited but Distributor
	Fees are allowed.


Distribution of Compiled Forms of the Standard Version 
or Modified Versions without the Source

(5)  You may Distribute Compiled forms of the Standard Version without
the Source, provided that you include complete instructions on how to
get the Source of the Standard Version.  Such instructions must be
valid at the time of your distribution.  If these instructions, at any
time while you are carrying out such distribution, become invalid, you
must provide new instructions on demand or cease further distribution.
If you provide valid instructions or cease distribution within thirty
days after you become aware that the instructions are invalid, then
you do not forfeit any of your rights under this license.

(6)  You may Distribute a Modified Version in Compiled form without
the Source, provided that you comply with Section 4 with respect to
the Source of the Modified Version.


Aggregating or Linking the Package 

(7)  You may aggregate the Package (either the Standard Version or
Modified Version) with other packages and Distribute the resulting
aggregation provided that you do not charge a licensing fee for the
Package.  Distributor Fees are permitted, and licensing fees for other
components in the aggregation are permitted. The terms of this license
apply to the use and Distribution of the Standard or Modified Versions
as included in the aggregation.

(8) You are permitted to link Modified and Standard Versions with
other works, to embed the Package in a larger work of your own, or to
build stand-alone binary or bytecode versions of applications that
include the Package, and Distribute the result without restriction,
provided the result does not expose a direct interface to the Package.


Items That are Not Considered Part of a Modified Version 

(9) Works (including, but not limited to, modules and scripts) that
merely extend or make use of the Package, do not, by themselves, cause
the Package to be a Modified Version.  In addition, such works are not
considered parts of the Package itself, and are not subject to the
terms of this license.


General Provisions

(10)  Any use, modification, and distribution of the Standard or
Modified Versions is governed by this Artistic License. By using,
modifying or distributing the Package, you accept this license. Do not
use, modify, or distribute the Package, if you do not accept this
license.

(11)  If your Modified Version has been derived from a Modified
Version made by someone other than you, you are nevertheless required
to ensure that your Modified Version complies with the requirements of
this license.

(12)  This license does not grant you the right to use any trademark,
service mark, tradename, or logo of the Copyright Holder.

(13)  This license includes the non-exclusive, worldwide,
free-of-charge patent license to make, have made, use, offer to sell,
sell, import and otherwise transfer the Package with respect to any
patent claims licensable by the Copyright Holder that are necessarily
infringed by the Package. If you institute patent litigation
(including a cross-claim or counterclaim) against any party alleging
that the Package constitutes direct or contributory patent
infringement, then this Artistic License to you shall terminate on the
date that such litigation is filed.

(14)  Disclaimer of Warranty:
THE PACKAGE IS PROVIDED BY THE COPYRIGHT HOLDER AND CONTRIBUTORS "AS
IS' AND WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES. THE IMPLIED
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
NON-INFRINGEMENT ARE DISCLAIMED TO THE EXTENT PERMITTED BY YOUR LOCAL
LAW. UNLESS REQUIRED BY LAW, NO COPYRIGHT HOLDER OR CONTRIBUTOR WILL
BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES ARISING IN ANY WAY OUT OF THE USE OF THE PACKAGE, EVEN IF
ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 
 */

"use strict";

// ----------------- GLOBAL FUNCTIONS [start] --------------

// private variables
var __globalClickHandler = null;
var __globalIsGamePaused = true;

var __globalClickHistory = null;
var __globalClickHistoryCapacity = 0;
var __globalMaxClicks = 0;

// private function
function __boardGame2D_ClickHandler(type, object)
{
    if(__globalIsGamePaused) return;
    
    var x=object.getAttribute("data-location-x");
    var y=object.getAttribute("data-location-y");
        
    __globalClickHandler(x,y);
    
    if(__globalMaxClicks == __globalClickHistoryCapacity)
    {
        __removeOldestClickRecord();
    }
    
    __globalClickHistory[__globalMaxClicks++]=new Position(x,y);
}

// private function
function __removeOldestClickRecord()
{
    // this function removes the oldest click history
    for(var i=0; i<__globalClickHistoryCapacity-1; i++) __globalClickHistory[i]=__globalClickHistory[i+1];
    __globalClickHistory[__globalClickHistoryCapacity-1]=null;
    __globalMaxClicks--;
}

// ------------------ GLOBAL FUNCTIONS [end] ---------------






// ------------------ POSITION [start] ------------------------

// constructor
function Position(x,y)
{
    return({ x: x, y: y });
}

// ------------------ POSITION [end] -------------------------


// ----------------- PIECE-TYPE [start] --------------------

// constructor
function PieceType(pieceName, pieceSpecs)
{
    // pieceSpecs : isImage, imageURL, htmlDescription, width, height, offsetX, offsetY
    this.name = pieceName;
    this.isImage = pieceSpecs.isImage;
    
    if(this.isImage)
        this.imageURL = pieceSpecs.imageURL;
    else
        this.innerHTML = pieceSpecs.htmlDescription;
    
    this.width = pieceSpecs.width;
    this.height = pieceSpecs.height;
    this.offsetX = pieceSpecs.offsetX;
    this.offsetY = pieceSpecs.offsetY;
    
    return this;
}

PieceType.prototype.getName = function()
{
    return(this.name);
}

// ----------------- PIECE-TYPE [end] --------------------




// ----------------- PIECE [start] --------------------

// constructor
function Piece(pieceID, pieceType, ownerIndex, bearingOffset)
{
    this.ID = pieceID;
    this.ownerIndex = ownerIndex;
    this.pieceType = pieceType;
    this.moveCount = 0;
    this.bearingOffset = (!bearingOffset ? -1 : bearingOffset);
    
    this.__initCallbacks();
    
    return this;
}

Piece.prototype.getOwnerIndex = function()
{
    return(this.ownerIndex);
}

Piece.prototype.setOwnerIndex = function(index)
{
    this.ownerIndex=index;
}

Piece.prototype.getBearingOffset = function()
{
    return(this.bearingOffset);
}

Piece.prototype.setBearingOffset = function(offset)
{
    // -1 means fixed: no rotation, 0-3 means rotate depending on board
    this.bearingOffset=offset;
}

// private function
Piece.prototype.__initCallbacks = function()
{
    this.callbacks = new Array(3);
    for(var i=0; i<3; i++)
    {
        this.callbacks[i] = {
                                valid: false,
                                callback: undefined
        };
    }
}

Piece.prototype.__performCallback = function(event, x, y)
{
    if(!this.callbacks[event].valid) return;
    this.callbacks[event].callback(this,x,y);
}

Piece.prototype.__performCallbackForMove = function(x1, y1, x2, y2)
{
    if(!this.callbacks[1].valid) return;
    this.callbacks[event].callback(this,x1,y1,x2,y2);
}

// private function
Piece.prototype.__getPieceHTML = function(x, y, squareWidth, squareHeight, boardBearing)
{
    var posX = (squareWidth * x) + this.pieceType.offsetX;
    var posY = (squareHeight * y) + this.pieceType.offsetY;
    
    var cps = "position:absolute; z-Index:3; margin:0px; padding:0px; cursor:pointer; ";
    
    var rotationStyle = "";
    if(this.bearingOffset>-1)
    {
        var absoluteRotation = 90*((boardBearing + this.bearingOffset)%4);
        rotationStyle = "style='";
        rotationStyle += "-webkit-transform:rotate("+absoluteRotation+"deg); ";
        rotationStyle += "-ms-transform:rotate("+absoluteRotation+"deg); ";
        rotationStyle += "-moz-transform:rotate("+absoluteRotation+"deg); ";
        rotationStyle += "-o-transform:rotate("+absoluteRotation+"deg); ";
        rotationStyle += "'";
    }
    
    var imgCSS = "style='height:"+this.pieceType.height+"px; width:"+this.pieceType.width+"px;'";
    
    var s="<div onClick='__boardGame2D_ClickHandler(1,this);' data-piece-name='"+this.pieceType.name+"' data-location-x='"+x+"' data-location-y='"+y+"' style='"+cps+"width:"+this.pieceType.width+"; height:"+this.pieceType.height+"; left:"+posX+"; top:"+posY+";'>";
    if(this.pieceType.isImage)
        s+="<img class='pieceImage' "+rotationStyle+" "+imgCSS+" src='"+this.pieceType.imageURL+"'/>";
    else
        s+=this.pieceType.innerHTML;
    s+="</div>";
    
    return s;
}

Piece.prototype.setCallback = function(callWhen, callback)
{
    // callWhen = 0/1/2 : insertion / moving / removal
    // callback function must have 3 parameters (x,y,piece) if insertion/deletion
    // else (x1,y1,x2,y2,piece) if moving
    
    if(callWhen<0 || callWhen>2) return;
    this.callbacks[callWhen] =  {
                                    valid: true,
                                    callback: callback
                                };
}

Piece.prototype.clearCallback = function(callWhen)
{
    if(callWhen<0 || callWhen>2) return;
    
    if(this.callbacks[callWhen].valid)
    {
        this.callbacks[callWhen] =  {
                                        valid: false,
                                        callback: undefined
                                    };
    }
}

Piece.prototype.clearCallbacks = function()
{
    for(var i=0; i<3; i++) this.clearCallback(i);
}

Piece.prototype.clone = function()
{
    return(new Piece(this.ID, this.pieceType, this.ownerIndex));
}

Piece.prototype.getX = function()
{
    return(this.position.x);   
}

Piece.prototype.getY = function()
{
    return(this.position.y);   
}

Piece.prototype.getPosition = function()
{
    return(this.position);   
}

Piece.prototype.getID = function()
{
    return(this.ID);   
}

Piece.prototype.getMoveCount = function()
{
    return(this.moveCount);
}

// ----------------- PIECE [end] --------------------





// ----------------- GAME [start] --------------------

// constructor
function Game(gameName, ownerDivID, gameSpecs, clickHandler)
{
    __globalIsGamePaused=true;
    this.isPaused=true;
    
    this.rotationBearing = 0;
    this.name = gameName;
    this.ownerDivID = ownerDivID;
    this.playerCount = gameSpecs.playerCount;
    this.currentPlayerIndex = 0;
    this.playerScores = Array(this.playerCount);
    this.board = gameSpecs.board;
    
    this.__initClickHistory(!gameSpecs.clickHistoryCapacity ? 100 : gameSpecs.clickHistoryCapacity);
    this.__initPieceList();    
    __globalClickHandler = clickHandler;       // must have 2 parameters: x, y
    
    return this;
}

// private functions start here ------------->

Game.prototype.__updatePieceList = function(pieceList)
{
    this.pieceList = pieceList;
}

Game.prototype.__initClickHistory = function(n)
{
    __globalClickHistoryCapacity = n;
    __globalClickHistory = new Array(n);
    __globalMaxClicks = 0;
}

Game.prototype.__initPieceList = function()
{
    this.pieceList = this.board.__createMatrix(this.board.squareCountY, this.board.squareCountX, null);
}

Game.prototype.__countNullValues = function(posList)
{
    var c=0;
    for(var i=0; i<posList.length; i++)
    {
        if(posList[i]==null || posList[i]==undefined) c++;
    }
    return c;
}

Game.prototype.__getNewList = function(posList, size)
{
    var i,j;
    var newPosList = new Array(size);
    for(i=0, j=-1; i<posList.length; i++)
    {
        if(posList[i]!=null && posList[i]!=undefined) newPosList[++j]=posList[i];
    }
    return newPosList;
}

Game.prototype.__getSubList = function(posList, lastIndex)
{
    if(lastIndex<0) return null;
    
    var newPosList = new Array(lastIndex+1);
    for(var i=0; i<=lastIndex; i++) newPosList[i]=posList[i];
    return newPosList;
}

Game.prototype.__rotateMatrixOnce = function(matrix)
{
    // Clockwise rotation through 90 degrees
    
    var size = this.board.__getMatrixSize(matrix);
    var mod = this.board.__createMatrix(size.cols, size.rows, null);      // reverse rows & cols
    
    for(var y=0; y<size.rows; y++)
    {
        for(var x=0; x<size.cols; x++)
        {
            mod[y][size.rows-x-1]=matrix[x][y];
        }
    }
    
    return mod;
}

Game.prototype.__getRotatedMatrix = function(times, matrix)
{
    var n=times%4;
    if(n==0) return;
    
    var m=matrix;
    for(var i=1; i<=times; i++) m=this.__rotateMatrixOnce(m);
    
    return m;
}

// private functions end here <----------------

Game.prototype.getTrimmedList = function(posList)
{
    var i,j;
    var size=posList.length;
    for(i=0; i<posList.length; i++)
    {
        if(posList[i]==null || posList[i]==undefined) size--;
    }
    
    var newPosList = new Array(size);
    for(i=0, j=-1; i<posList.length; i++)
    {
        if(posList[i]!=null && posList[i]!=undefined) newPosList[++j]=posList[i];
    }
    return newPosList;
}

Game.prototype.playSound = function(mp3FilePath)
{
    var audio = new Audio(mp3FilePath);
    audio.play();
}

Game.prototype.getPlayerTurn = function() 
{ 
    return this.currentPlayerIndex; 
}

Game.prototype.switchTurn = function() 
{ 
    this.currentPlayerIndex = (this.currentPlayerIndex+1)%this.playerCount; 
}

Game.prototype.isGamePaused = function()
{
    return(this.isPaused);
}

Game.prototype.pauseGame = function()
{
    this.isPaused=true;
    __globalIsGamePaused=true;
}

Game.prototype.resumeGame = function()
{
    this.isPaused=false;
    __globalIsGamePaused=false;
}

Game.prototype.endGame = function()
{
    this.pauseGame();
    this.currentPlayerIndex = 0;
    for(var i=0; i<this.playerCount; i++) this.playerScores[i]=0;
    this.__initPieceList();
}

Game.prototype.startGame = function()
{
    this.endGame();
    this.repaint();
    this.resumeGame();
}

Game.prototype.getScore = function()
{
    return(this.playerScores[this.currentPlayerIndex]);
}

Game.prototype.getPlayerScore = function(playerIndex)
{
    return(this.playerScores[playerIndex]);
}

Game.prototype.updateScore = function(increment)
{
    this.playerScores[this.currentPlayerIndex]+=increment;
}

Game.prototype.updatePlayerScore = function(playerIndex, increment)
{
    this.playerScores[playerIndex]+=increment;
}

Game.prototype.repaint = function()
{
    var boardHTML = this.board.__getBoardHTML();
    var pieceHTML = "";
    for(var y=0; y<this.pieceList.length; y++) 
    {
        for(var x=0; x<this.pieceList[y].length; x++)
        {
            if(this.pieceList[y][x]!=null) pieceHTML+=this.pieceList[y][x].__getPieceHTML(x,y,this.board.squareWidth, this.board.squareHeight, this.rotationBearing);
        }
    }
    
    document.getElementById(this.ownerDivID).innerHTML = (boardHTML + pieceHTML);
}

Game.prototype.getPieceList = function()
{
    return this.pieceList;
}

Game.prototype.getOldClickPosition = function(index)
{
    if(index>=0) return null;
    if(__globalMaxClicks+index < 0) return null;
    return(__globalClickHistory[__globalMaxClicks+index]);
}

Game.prototype.clearClickHistory = function()
{
    __globalMaxClicks = 0;
}

Game.prototype.insertPiece = function(x, y, piece)
{
    // this function fails if square isn't empty
    if(!this.isWithinBoard(x,y)) return;
    if(this.pieceList[y][x]!=null) return;
    
    piece.position = new Position(x,y);
    this.pieceList[y][x]=piece;
    piece.__performCallback(0,x,y);
}

Game.prototype.replaceWithPiece = function(x, y, piece)
{
    if(!this.isWithinBoard(x,y)) return;
    piece.position = new Positon(x,y);
    this.pieceList[y][x]=piece;
    piece.__performCallback(2,x,y);
}

Game.prototype.movePiece = function(oldX, oldY, newX, newY)
{
    if(!this.isWithinBoard(oldX,oldY)) return;
    if(!this.isWithinBoard(newX,newY)) return;
    
    var a=this.pieceList[oldY][oldX];
    a.position = new Position(newX,newY);
    a.moveCount++;
    this.pieceList[newY][newX]=a;
    this.pieceList[oldY][oldX]=null;
    a.__performCallbackForMove(oldX,oldY,newX,newY);
}

Game.prototype.getPieceTypeAt = function(x,y)
{
    if(!this.isWithinBoard(x,y)) return null;
    if(this.pieceList[y][x]==null) return null;
    return(this.pieceList[y][x].pieceType);
}

Game.prototype.getPieceAt = function(x,y)
{
    if(!this.isWithinBoard(x,y)) return null;
    return(this.pieceList[y][x]);
}

Game.prototype.doesPieceExistOnBoard = function(pieceID)
{
    return(this.getPiecePositionFromID(pieceID)==null ? false : true);
}

Game.prototype.getPiecePositionFromID = function(pieceID)
{
    for(var y=0; y<this.board.squareCountY; y++)
    {
        for(var x=0; x<this.board.squareCountX; x++)
        {
            var p=this.getPieceAt(x,y);
            if(p!=null && p.ID==pieceID) return(new Position(x,y));   
        }
    }
    return null;   
}

Game.prototype.removePieceFrom = function(x,y)
{
    if(!this.isWithinBoard(x,y)) return;
    
    var p=this.pieceList[y][x];
        
    this.pieceList[y][x]=null;
    p.__performCallback(2,x,y);
    
    if(p!=null)
    {
        p.ID=null;
        p.position=null;
    }
}

Game.prototype.removePiecesFrom = function(posList)
{
    for(var i=0; i<posList.length; i++) this.removePieceFrom(posList[i].x, posList[i].y);   
}

Game.prototype.isSquareEmpty = function(x,y)
{
    var p=this.getPieceAt(x,y);
    return(p==null ? true : false);
}

Game.prototype.hasOwnPieceAt = function(x,y)
{
    var p=this.getPieceAt(x,y);
    if(p==null) return false;
    return(p.ownerIndex == this.currentPlayerIndex ? true : false);
}

Game.prototype.isHighlighted = function(x,y)
{
    if(!this.isWithinBoard(x,y)) return false;
    return(this.board.__isHighlighted(x,y));
}

Game.prototype.clearHighlights = function()
{
    this.board.__clearHighlights();   
}

Game.prototype.clearHighlight = function(x,y)
{
    if(!this.isWithinBoard(x,y)) return;
    this.board.__clearHighlight(x,y);   
}

Game.prototype.highlightSquare = function(x,y,colorIndex)
{
    if(!this.isWithinBoard(x,y)) return;
    this.board.__highlightSquare(x,y,colorIndex);   
}

Game.prototype.highlightSquares = function(posList, colorIndex)
{
    if(posList==null) return;
    for(var i=0; i<posList.length; i++) this.highlightSquare(posList[i].x, posList[i].y, colorIndex);   
}

Game.prototype.setSquareTagRect = function(x, y, width, height, tag)
{
    this.board.setSquareTagRect(x,y,width,height,tag);
}

Game.prototype.setSquareBackgroundRect = function(x, y, width, height, isImageURL, value)
{
    this.board.setSquareBackgroundRect(x,y,width,height,isImageURL,value);
}

Game.prototype.clearSquareTagRect = function(x, y, width, height)
{
    this.board.__clearSquareTagRect(x,y,width,height);
}

Game.prototype.clearSquareBackgroundRect = function(x, y, width, height)
{
    this.board.__clearSquareBackgroundRect(x,y,width,height);
}

Game.prototype.setSquareBackground = function(x, y, isImageURL, value)
{
    if(!this.isWithinBoard(x,y)) return;
    this.board.setSquareBackground(x,y,isImageURL,value);
}

Game.prototype.setSquareTag = function(x, y, tag)
{
    if(!this.isWithinBoard(x,y)) return;
    this.board.setSquareTag(x,y,tag);
}

Game.prototype.setSquareBackgrounds = function(posList, isImageURL, value)
{
    for(var i=0; i<posList.length; i++) this.setSquareBackground(posList[i].x, posList[i].y, isImageURL, value);
}

Game.prototype.setSquareTags = function(posList, tag)
{
    for(var i=0; i<posList.length; i++) this.setSquareTag(posList[i].x, posList[i].y, tag);
}

Game.prototype.clearSquareBackgrounds = function()
{
    this.board.__clearSquareBackgrounds();
}

Game.prototype.clearSquareTags = function()
{
    this.board.__clearSquareTags();
}

Game.prototype.getSquareTag = function(x,y)
{
    if(!this.isWithinBoard(x,y)) return false;
    return(this.board.__getSquareTag(x,y));  
}

Game.prototype.hasSquareBackground = function(x,y)
{
    if(!this.isWithinBoard(x,y)) return false;
    return(this.board.__hasSquareBackground(x,y));  
}

Game.prototype.removeSquareBackground = function(x,y)
{
    if(!this.isWithinBoard(x,y)) return;
    this.board.__removeSquareBackground(x,y);
}

Game.prototype.removeSquareTag = function(x,y)
{
    if(!this.isWithinBoard(x,y)) return;
    this.board.__removeSquareTag(x,y);
}

Game.prototype.removeSquareBackgrounds = function(posList)
{
    for(var i=0; i<posList.length; i++) this.removeSquareBackground(posList[i].x, posList[i].y);
}

Game.prototype.removeSquareTags = function(posList)
{
    for(var i=0; i<posList.length; i++) this.removeSquareTag(posList[i].x, posList[i].y);
}

Game.prototype.get2DPosition = function(linearPosition)
{
    // starts at 0 at top-left
    var height=this.board.squareCountY;    
    if(linearPosition<0 || linearPosition>=(height*width)) return null;
    
    var yPos = Math.floor(linearPosition/height);
    var xPos = (linearPosition % height);
    
    return({ x: xPos, y: yPos });
}

Game.prototype.getChessboardDistanceBetween = function(x1, y1, x2, y2)
{
    return(Math.abs(x1-x2) + Math.abs(y1-y2));
}

Game.prototype.getDiagonalDistanceBetween = function(x1, y1, x2, y2)
{
    var p=Math.abs(x1-x2);
    var q=Math.abs(y1-y2);
    
    if(p!=q) return -1;     // diagonal line not possible
    return p;
}

Game.prototype.isPathClear = function(sourceX, sourceY, targetX, targetY, includeTarget, isDiagonal, ignoreOwnPieces)
{
    // Modiy code
    var start, end, step;
    
    if(sourceX == targetX)
    {
        // vertical
        start = (sourceY <= targetY ? sourceY : (includeTarget ? targetY : targetY+1));
        end = (sourceY <= targetY ? (includeTarget ? targetY : targetY-1) : sourceY);
                
        for(i=start; i<=end; i++)
        {
            var p=this.getPieceAt(sourceX,i);
            
            if(p==null) continue;
            if(p.ownerIndex==this.currentPlayerIndex && ignoreOwnPieces) continue;
            return false;
        }
        return true;
    } else if(sourceY == targetY) {
        // horizontal
        start = (sourceX <= targetX ? sourceX : (includeTarget ? targetX : targetX+1));
        end = (sourceX <= targetX ? (includeTarget ? targetX : targetX-1) : sourceX);
                
        for(i=start; i<=end; i++)
        {
            var p=this.getPieceAt(sourceY,i);
            
            if(p==null) continue;
            if(p.ownerIndex==this.currentPlayerIndex && ignoreOwnPieces) continue;
            return false;
        }
        return true;
    } else {
        var diagonalPossible = (Math.abs(sourceX-targetX)==Math.abs(sourceY-targetY) ? true : false);
        if(isDiagonal && !diagonalPossible) isDiagonal=false;       // i.e. ignore value even if set
        
        if(isDiagonal)
        {
            // check diagonally
            var x,y,count=1;
            var stepX = (sourceX <= targetX ? 1 : -1);
            var stepY = (sourceY <= targetY ? 1 : -1);
            var maxCount = Math.abs(sourceX-targetX);
            
            for(x=sourceX, y=sourceY, count=1; count<=maxCount; x+=stepX, y+=stepY)
            {
                if(x==targetX && !includeTarget) return true;
                var p=this.getPieceAt(x,y);
            
                if(p==null) continue;
                if(p.ownerIndex==this.currentPlayerIndex && ignoreOwnPieces) continue;
                return false;
            }
            return true;
        } else {
            // check in chessboard manner, 2 possible paths: return false only if both are blocked
            return false;       // shortcut for now ;)
        }
    }
}

Game.prototype.isWithinBoard = function(x,y)
{
    return(x>=0 && y>=0 && x<this.board.squareCountX && y<this.board.squareCountY ? true : false);
}

Game.prototype.isPositionWithinBoard = function(pos)
{
    return(this.isWithinBoard(pos.x,pos.y));
}

Game.prototype.isPieceTypeOnBoard = function(pieceType)
{
    for(var y=0; y<this.board.squareCountY; y++)
    {
        for(var x=0; x<this.board.squareCountX; x++)
        {
            if(this.getPieceTypeAt(x,y)==pieceType) return true;   
        }
    }
    return false;
}

Game.prototype.getPositionsFromRect = function(x1, y1, x2, y2)
{
    // all coordinates inclusive, top-left(x1,y1) --> bottom-right(x2,y2)
    
    var height = y2-y1+1;
    var width = x2-x1+1;
    
    var posList = new Array(height*width);
    var index=-1;
    
    for(var y=y1; y<=y2; y++)
    {
        for(var x=x1; x<=x2; x++)
        {
            posList[++index]=new Position(x,y);
        }
    }
    
    return posList;
}

Game.prototype.getOwnerStrengths = function()
{
    var s = new Array(this.playerCount);
    for(var i=0; i<this.playerCount; i++) s[i]=this.countPiecesByOwner(i);
    return s;
}

Game.prototype.countPiecesByOwner = function(ownerIndex)
{
    var c=0;
    for(var y=0; y<this.board.squareCountY; y++)
    {
        for(var x=0; x<this.board.squareCountX; x++)
        {
            var p=this.getPieceAt(x,y);
            if(p!=null && p.ownerIndex==ownerIndex) c++;
        }
    }
    return c;
}

Game.prototype.countPiecesByOwnerWithinList = function(ownerIndex, posList)
{
    var c=0;
    for(var i=0; i<posList.length; i++)
    {
        var p=this.getPieceAt(posList[i].x, posList[i].y);
        if(p!=null && p.ownerIndex==ownerIndex) c++;
    }
    return c;
}

Game.prototype.countPiecesByName = function(pieceName)
{
    var c=0;
    for(var y=0; y<this.board.squareCountY; y++)
    {
        for(var x=0; x<this.board.squareCountX; x++)
        {
            var p=this.getPieceTypeAt(x,y);
            if(p!=null && p.name==pieceName) c++;
        }
    }
    return c;
}

Game.prototype.countPiecesByNameWithinList = function(pieceName, posList)
{
    var c=0;
    for(var i=0; i<posList.length; i++)
    {
        var p=this.getPieceTypeAt(posList[i].x, posList[i].y);
        if(p!=null && p.name==pieceName) c++;
    }
    return c;
}

Game.prototype.getPositionsByPieceName = function(pieceName)
{
    var posList = new Array(this.board.squareCountX * this.board.squareCountY);
    var index=-1;
    
    for(var y=0; y<this.board.squareCountY; y++)
    {
        for(var x=0; x<this.board.squareCountX; x++)
        {
            var p=this.getPieceTypeAt(x,y);
            if(p!=null && p.name==pieceName) posList[++index]={ x: x, y: y };   
        }
    }
    
    return(this.__getSubList(posList,index));
}

Game.prototype.getPositionsByPieceNameWithinList = function(pieceName, posList)
{
    var newPosList = new Array(posList.length);
    var index=-1;
    
    for(var i=0; i<posList.length; i++)
    {
        var p=this.getPieceTypeAt(posList[i].x, posList[i].y);
        if(p!=null && p.name==pieceName) newPosList[++index]=posList[i];
    }
    
    return(this.__getSubList(newPosList,index));
}

Game.prototype.getPositionsByOwner = function(ownerIndex)
{
    var posList = new Array(this.board.squareCountX * this.board.squareCountY);
    var index=-1;
    
    for(var y=0; y<this.board.squareCountY; y++)
    {
        for(var x=0; x<this.board.squareCountX; x++)
        {
            var p=this.getPieceAt(x,y);
            if(p!=null && p.ownerIndex==ownerIndex) posList[++index]={ x: x, y: y };   
        }
    }
    
    return(this.__getSubList(posList,index));
}

Game.prototype.getPositionsByOwnerWithinList = function(ownerIndex, posList)
{
    var newPosList = new Array(posList.length);
    var index=-1;
    
    for(var i=0; i<posList.length; i++)
    {
        var p=this.getPieceAt(posList[i].x, posList[i].y);
        if(p!=null && p.ownerIndex==ownerIndex) newPosList[++index]=posList[i];
    }
    
    return(this.__getSubList(newPosList,index));
}

Game.prototype.getNeighbourhood = function(x,y)
{
    var boxes = [
                    [ null, null, null ],
                    [ null, null, null ],
                    [ null, null, null ]
                ];
    
    for(var oy=-1; oy<=1; oy++)
    {
        var ny=y+oy;
        for(var ox=-1; ox<=1; ox++)
        {
            var nx=x+ox;
            boxes[1+oy][1+ox]=this.getPieceAt(nx,ny);
        }
    }
    
    return boxes;
}

// short-hand neighbourhood functions
Game.prototype.getPieceOnLeftOf = function(x,y)
{
    var n = this.getNeighbourhood(x,y);
    return(n[1][0]);
}

Game.prototype.getPieceOnRightOf = function(x,y)
{
    var n = this.getNeighbourhood(x,y);
    return(n[1][2]);
}

Game.prototype.getPieceOnTopOf = function(x,y)
{
    var n = this.getNeighbourhood(x,y);
    return(n[0][1]);
}

Game.prototype.getPieceOnBottomOf = function(x,y)
{
    var n = this.getNeighbourhood(x,y);
    return(n[2][1]);
}

Game.prototype.getPieceOnTopLeftOf = function(x,y)
{
    var n = this.getNeighbourhood(x,y);
    return(n[0][0]);
}

Game.prototype.getPieceOnTopRightOf = function(x,y)
{
    var n = this.getNeighbourhood(x,y);
    return(n[0][2]);
}

Game.prototype.getPieceOnBottomLeftOf = function(x,y)
{
    var n = this.getNeighbourhood(x,y);
    return(n[2][0]);
}

Game.prototype.getPieceOnBottomRightOf = function(x,y)
{
    var n = this.getNeighbourhood(x,y);
    return(n[2][2]);
}

Game.prototype.arePositionsEqual = function(x, y, pos)
{
    if(x==pos.x && y==pos.y)
        return true;
    else
        return false;
}

Game.prototype.getPositionFromThisPosition = function(x, y, movementString)
{
    // movementString: comma-separated <direction><unit> values
    // direction = L/T/R/B
    // unit = integer
    // e.g. L2,B3 --> means go 2 squares to the left, and 3 squares to the bottom
    
    var px=x, py=y;
    var s = movementString.toString().trim().toUpperCase().split(",");
    for(var i=0; i<s.length; i++)
    {
        var m = s[i].toString();
        
        var dir = m.charAt(0).toString();
        var unit = parseInt(m.substring(1).toString());
        
        for(var j=1; ((unit>0 && j<=unit) || (unit<0 && this.isWithinBoard(px,py))); j++)
        {
            if(dir=="L") px--;
            if(dir=="R") px++;
            if(dir=="U") py--;
            if(dir=="D") py++;
            
            if(dir=="Q") { px--; py--; }    // top-left
            if(dir=="E") { px++; py--; }    // top-right
            if(dir=="Z") { px--; py++; }    // bottom-left
            if(dir=="X") { px++; py++; }    // bottom-right
            
            if(dir=="I") { px=x; py=y; }    // go back to starting position
        }
    }
    
    return({ x: px, y: py });
}

Game.prototype.getPositionsTillFirstEncounterFrom = function(x, y, movementString, includeEncounterPosition, ignoreOwner, ownerIndex)
{
    var posList = this.getPositionListFromMovement(x, y, true, movementString);
    var stopPos = this.getFirstEncounterPositionFromThisPosition(x, y, movementString, ignoreOwner, ownerIndex);
    
    if(stopPos==null) return(posList);
    
    for(var i=0; i<posList.length; i++)
    {
        if(this.arePositionsEqual(stopPos.x, stopPos.y, posList[i]))
        {
            return this.__getSubList(posList,(includeEncounterPosition ? i : i-1));
        }
    }
    
    return null;    // this will never execute
}

Game.prototype.areOnTheSameDiagonal = function(x1, y1, x2, y2)
{
    return((Math.abs(x1-x2) == Math.abs(y1-y2)) ? true : false);
}

Game.prototype.isOnBoundary = function(x,y)
{
    return((x==0 || y==0 || x==this.board.squareCountX-1 || y==this.board.squareCountY-1) ? true : false);
}

Game.prototype.getMovementString = function(x1, y1, x2, y2)
{
    var xDiff = Math.abs(x1-x2);
    var yDiff = Math.abs(y1-y2);
    var str = "";
    
    if(xDiff==yDiff)        // on the same diagonal
    {
        if(x2<x1 && y2<y1)
            str="Q"+xDiff;
        else if(x2>x1 && y2<y1)
            str="E"+xDiff;
        else if(x2<x1 && y2>y1)
            str="Z"+xDiff;
        else if(x2>x1 && y2>y1)
            str="X"+xDiff;
    } else {
        // go left/right; then go top/bottom
        if(x2<x1)
            str="L"+xDiff;
        else if(x2>x1)
            str="R"+xDiff;
        
        if(x2!=x1) str+=",";
        
        if(y2>y1)
            str+="D"+yDiff;
        else if(y2<y1)
            str+="U"+yDiff;
    }
    
    return str;
}

Game.prototype.canReachThisDestination = function(x, y, movementString, ignoreOwner, ownerIndex)
{
    return(this.getFirstEncounterPositionFromThisPosition(x,y,movementString,ignoreOwner,ownerIndex)==null ? true : false);   
}

Game.prototype.getFirstEncounterPositionFromThisPosition = function(x, y, movementString, ignoreOwner, ownerIndex)
{
    // movementString: comma-separated <direction><unit> values
    // direction = L/T/R/B
    // unit = integer
    // e.g. L2,B3 --> means go 2 squares to the left, and 3 squares to the bottom
    
    var px=x, py=y;
    var s = movementString.toString().trim().toUpperCase().split(",");
    for(var i=0; i<s.length; i++)
    {
        var m = s[i].toString();
        
        var dir = m.charAt(0).toString();
        var unit = parseInt(m.substring(1).toString());
        
        for(var j=1; ((unit>0 && j<=unit) || (unit<0 && this.isWithinBoard(px,py))); j++)
        {
            if(dir=="L") px--;
            if(dir=="R") px++;
            if(dir=="U") py--;
            if(dir=="D") py++;
            
            if(dir=="Q") { px--; py--; }    // top-left
            if(dir=="E") { px++; py--; }    // top-right
            if(dir=="Z") { px--; py++; }    // bottom-left
            if(dir=="X") { px++; py++; }    // bottom-right
            
            if(dir=="I") { px=x; py=y; }    // go back to starting position
            
            if(this.isWithinBoard(px,py))
            {
                var p = this.getPieceAt(px,py);
                if(p==null) continue;
                var poi = p.ownerIndex;
                
                if(ignoreOwner && poi==ownerIndex) continue;
                return({ x: px, y: py });
            }
        }
    }
    
    return(null);
}

Game.prototype.getPositionListFromMovement = function(x, y, includePath, movementString)
{
    // movementString: format same as before
    // use unit=0 to include that position, e.g. L0,L3 includes the starting position too, and also 3 squares to the left
    
    var px=x, py=y, totalUnits=0, i=0, j=0;
    var m, dir, unit, index=0;
    
    var s = movementString.toString().trim().toUpperCase().split(",");
    for(i=0; i<s.length; i++)
    {
        m = s[i].toString();
        
        dir = m.charAt(0).toString();
        unit = parseInt(m.substring(1).toString());
        totalUnits+=(unit > 0 ? (includePath ? unit : 1) : (unit==0 ? 1 : Math.max(this.board.squareCountX, this.board.squareCountY)));
    }
    
    var posList = new Array(totalUnits);
    
    var suppress=false;
    if(s[0].toString().charAt(0)=="#")
    {
        suppress=true;
        s[0]=s[0].toString().substring(1);
    }
    
    for(i=0, index=-1; i<s.length; i++)
    {
        m = s[i].toString();
        dir = m.charAt(0).toString();
        unit = parseInt(m.substring(1).toString());
        
        if(dir=="I")
        {
            px=x;
            py=y;
        } else if(dir!="P") {            
            for(j=1; ((unit>0 && j<=unit) || (unit<0 && this.isWithinBoard(px,py))); j++)
            {
                if(dir=="L") px--;
                if(dir=="R") px++;
                if(dir=="U") py--;
                if(dir=="D") py++;

                if(dir=="Q") { px--; py--; }    // top-left
                if(dir=="E") { px++; py--; }    // top-right
                if(dir=="Z") { px--; py++; }    // bottom-left
                if(dir=="X") { px++; py++; }    // bottom-right

                if(includePath && !suppress) posList[++index] = { x: px, y: py };
            }
        }
        
        if(unit==0 || !includePath) 
        {
            if(!suppress)
                posList[++index] = { x: px, y: py };
            else {
                if(dir=="P") posList[++index] = { x: px, y: py };
            }
        }
    }
    
    return(this.getTrimmedList(posList));
}

Game.prototype.arePositionsValid = function(posList)
{
    for(var i=0; i<posList.length; i++)
    {
        if(posList[i]==null || posList[i]==undefined) return false;
        if(!this.isPositionWithinBoard(posList[i])) return false;
    }
    return true;
}

Game.prototype.hasSamePiecesInPositions = function(posList)
{
    // for this to work, name must be unique
    var pt = this.getPieceTypeAt(posList[0].x, posList[0].y);
    var pn = (pt != null ? pt.name : null);
    
    for(var i=1; i<posList.length; i++)
    {
        var npt = this.getPieceTypeAt(posList[i].x, posList[i].y);
        var npn = (npt != null ? npt.name : null);
    
        if(npn!=pn) return false;
    }
    return true;
}

Game.prototype.removePositionFromList = function(posList, position)
{
    if(posList==null) return null;
    var c=posList.length;
    for(var i=0; i<posList.length; i++)
    {
        if(this.arePositionsEqual(position.x, position.y, posList[i]))
        {
            c--;
            posList[i]=null;
        }
    }
    return(this.__getNewList(posList, c));
}

Game.prototype.removeInvalidPositions = function(posList)
{
    if(posList==null) return null;
    var c=posList.length;
    var i, j;
    
    for(i=0; i<posList.length; i++)
    {
        if(posList[i]==null || posList[i]==undefined)
        {
            c--;
        } else if(!this.isPositionWithinBoard(posList[i])) {
            c--;
            posList[i]=null;
        }
    }
    
    return(this.__getNewList(posList, c));    
}

Game.prototype.removeBlockedPositions = function(posList, ignoreOwner, ownerIndex, ignorePieceType, pieceTypeName)
{
    if(posList==null) return null;
    var c=posList.length;
    var i, j;
    
    for(i=0; i<posList.length; i++)
    {
        var x=posList[i].x;
        var y=posList[i].y;
        
        if(!this.isPositionWithinBoard(posList[i])) continue;
        
        var p=this.getPieceAt(x,y);
        var pt=this.getPieceTypeAt(x,y);
        
        if(p==null) continue;
        
        var poi = p.ownerIndex;
        var ptn = pt.name;
        
        if(ignoreOwner && ownerIndex==poi) continue;
        if(ignorePieceType && pieceTypeName==ptn) continue;
        
        c--;
        posList[i]=null;
    }
    
    return(this.__getNewList(posList, c));    
}

Game.prototype.getIndexOf = function(x, y, posList)
{
    for(var i=0; i<posList.length; i++)
    {
        if(posList[i].x == x && posList[i].y == y) return i;
    }
    return -1;
}

Game.prototype.unionOf = function(posList1, posList2)
{
    if(posList1==null) return(posList2);
    if(posList2==null) return(posList1);
    
    var mergedList = new Array(posList1.length+posList2.length);
    var i, j;
    
    for(i=0; i<posList1.length; i++) mergedList[i]=posList1[i];
    for(i=0, j=posList1.length-1; i<posList2.length; i++)
    {
        if(this.getIndexOf(posList2[i].x, posList2[i].y, posList1)==-1)
        {
            mergedList[++j]=posList2[i];
        }
    }
    
    return(this.__getSubList(mergedList, j));
}

Game.prototype.intersectionOf = function(posList1, posList2)
{
    var mergedList = new Array(Math.min(posList1.length,posList2.length));
    var i, j;
    
    for(i=0, j=-1; i<posList1.length; i++)
    {
        if(this.getIndexOf(posList1[i].x, posList1[i].y, posList2)>-1)
        {
            mergedList[++j]=posList1[i];
        }
    }
    
    return(this.__getSubList(mergedList, j));   
}

Game.prototype.differenceBetween = function(posList1, posList2)
{
    var mergedList = new Array(posList1.length);
    var i, j;
    
    for(i=0, j=-1; i<posList1.length; i++)
    {
        if(this.getIndexOf(posList1[i].x, posList1[i].y, posList2)==-1)
        {
            mergedList[++j]=posList1[i];
        }
    }
    
    return(this.__getSubList(mergedList, j));   
}

Game.prototype.getIndexOfPositionInList = function(x, y, posList)
{
    for(var i=0; i<posList.length; i++)
    {
        if(posList[i]==null) continue;
        if(x==posList[i].x && y==posList[i].y) return i;
    }
    return -1;
}

Game.prototype.isPositionInList = function(x, y, posList)
{
    return(this.getIndexOfPositionInList(x,y,posList)==-1 ? false : true);   
}

Game.prototype.getComplementOfPositions = function(posList)
{
    var newPosList = new Array(this.board.squareCountX * this.board.squareCountY);
    var index=-1;
    
    for(var y=0; y<this.board.squareCountY; y++)
    {
        for(var x=0; x<this.board.squareCountX; x++)
        {
            if(!this.isPositionInList(x,y,posList)) newPostList[++index]=new Position(x,y);
        }
    }
    
    return(this.__getSubList(posList,index));
}

Game.prototype.getReflectedPosition = function(x, y, reflectHorizontally)
{
    if(reflectHorizontally)
    {
        return(new Position(-x+(this.board.squareCountX-1),y));
    } else {
        return(new Position(x,-y+(this.board.squareCountY-1)));
    }
}

Game.prototype.throwDice = function(start, end)
{
    // both inclusive
    return(Math.floor((Math.random() * end) + start));
}

Game.prototype.getBoardBearing = function()
{
    return(this.rotationBearing);
}

Game.prototype.rotateBoardClockwise = function(times)
{
    if(times<0) {
        this.rotateBoardCounterClockwise(Math.abs(times));
        return;
    }
    
    var n=times%4;
    if(n==0) return;
    
    // Rotate the following 5 matrices:
    // GAME: pieceList
    // BOARD: highlightMatrix, squareBackgroundTypes, squareBackgrounds, squareTags
    
    this.pieceList = this.__getRotatedMatrix(times, this.pieceList);
    this.board.highlightMatrix = this.__getRotatedMatrix(times, this.board.highlightMatrix);
    this.board.squareBackgrounds = this.__getRotatedMatrix(times, this.board.squareBackgrounds);
    this.board.squareBackgroundTypes = this.__getRotatedMatrix(times, this.board.squareBackgroundTypes);
    this.board.squareTags = this.__getRotatedMatrix(times, this.board.squareTags);

    this.board.__swapAxes();
    
    this.rotationBearing = (this.rotationBearing+times)%4;
}

Game.prototype.rotateBoardCounterClockwise = function(times)
{
    this.rotateBoardClockwise(4-(times%4));
}

Game.prototype.switchTurnAndRotateBoard = function(clockwise, times)
{
    this.switchTurn();
    if(clockwise)
        this.rotateBoardClockwise(times);
    else
        this.rotateBoardCounterClockwise(times);
}

Game.prototype.getRows = function()
{
    return this.board.getRows();
}

Game.prototype.getCols = function()
{
    return this.board.getCols();
}

Game.prototype.areAdjacent = function(position1, position2)
{
    var xDiff = Math.abs(position1.x - position2.x);
    var yDiff = Math.abs(position1.y - position2.y);
    
    return((xDiff<=1 && yDiff<=1) ? true : false);
}

Game.prototype.isPositionWithinRect = function(position, rectTopLeft, rectBottomRight)
{
    return((position.x >= rectTopLeft.x && position.y >= rectTopLeft.y && position.x <= rectBottomRight.x && position.y <= rectBottomRight.y) ? true : false);   
}

Game.prototype.isWithinRange = function(value, min, max)
{
    return((value>=min && value<=max) ? true : false);   
}

// --------------- GAME [end] ------------------------




// --------------- BOARD [start] ---------------------

// constructor
function Board(boardName, boardSpecs)
{
    // boardSpecs : width, height, squareCountX, squareCountY, 
    //              squareWidth, squareHeight, hasSquareBorder, borderColor
    //              highlightColors[], squareRadius
    
    this.name=boardName;
    this.width = boardSpecs.width;
    this.height = boardSpecs.height;
    this.squareCountX = boardSpecs.squareCountX;
    this.squareCountY = boardSpecs.squareCountY;
    this.squareWidth = boardSpecs.squareWidth;
    this.squareHeight = boardSpecs.squareHeight;
    this.hasSquareBorder = boardSpecs.hasSquareBorder;
    this.borderColor = boardSpecs.borderColor;
    this.squareRadius = boardSpecs.squareRadius;
    
    this.highlightColors = boardSpecs.highlightColors;  // must be array
    this.__initHighlightMatrix();
    this.__initSpecialSquaresMatrix();
    
    this.squareColorFunction = function(x,y) { return("#ffffff"); };
    
    return this;
}

Board.prototype.setSquareFunction = function(func) 
{ 
    // 'func' must take 2 parameters: x, y
    this.squareColorFunction=func; 
}

Board.prototype.setSingleColorBoard = function(color)
{
    this.squareColorFunction = function(x,y) 
                                { 
                                    return(color); 
                                };   
}

Board.prototype.setCheckerBoard = function(color1, color2)
{
    this.squareColorFunction = function(x,y) 
                                { 
                                    return((x+y)%2==0 ? color1 : color2); 
                                };   
}

Board.prototype.setSquareBackground = function(x, y, isImageURL, value)
{
    this.squareBackgroundTypes[y][x]=(isImageURL ? 2 : 1);
    this.squareBackgrounds[y][x]=value;
}

Board.prototype.setSquareTag = function(x, y, tag)
{
    this.squareTags[y][x]=tag;
}

Board.prototype.setSquareTagRect = function(x, y, width, height, tag)
{
    var endY=y+height;
    var endX=x+width;
    
    for(var py=y; py<endY; py++)
    {
        for(var px=x; px<endX; px++)
        {
            this.setSquareTag(px,py,tag);    
        }
    }
}

Board.prototype.setSquareBackgroundRect = function(x, y, width, height, isImageURL, value)
{
    var endY=y+height;
    var endX=x+width;
    
    for(var py=y; py<endY; py++)
    {
        for(var px=x; px<endX; px++)
        {
            this.setSquareBackground(px,py,isImageURL,value);    
        }
    }
}

Board.prototype.getRows = function()
{
    return this.squareCountY;
}

Board.prototype.getCols = function()
{
    return this.squareCountX;
}

// private functions start here -------------------->

Board.prototype.__getMatrixSize = function(matrix)
{
    var h = matrix.length;
    var w = matrix[0].length;
    
    return({ cols: w, rows: h });
}

Board.prototype.__clearSquareBackgroundRect = function(x, y, width, height)
{
    var endY=y+height;
    var endX=x+width;
    
    for(var py=y; py<endY; py++)
    {
        for(var px=x; px<endX; px++)
        {
            this.__removeSquareBackground(px,py);    
        }
    }
}

Board.prototype.__clearSquareBackgrounds = function()
{
    for(var y=0; y<this.squareCountY; y++)
    {
        for(var x=0; x<this.squareCountX; x++)
        {
            this.__removeSquareBackground(x,y);    
        }
    }
}

Board.prototype.__clearSquareTags = function()
{
    for(var y=0; y<this.squareCountY; y++)
    {
        for(var x=0; x<this.squareCountX; x++)
        {
            this.__removeSquareTag(x,y);    
        }
    }
}

Board.prototype.__hasSquareBackground = function(x,y)
{
    return(this.squareBackgroundTypes[y][x]==0 ? false : true);   
}

Board.prototype.__getSquareTag = function(x,y)
{
    return(this.squareTags[y][x]);   
}

Board.prototype.__removeSquareTag = function(x,y)
{
    this.squareTags[y][x]=null;
}

Board.prototype.__removeSquareBackground = function(x,y)
{
    this.squareBackgroundTypes[y][x]=0;
    this.squareBackgrounds[y][x]=null;
}

Board.prototype.__isHighlighted = function(x,y)
{
    return(this.highlightMatrix[y][x]==-1 ? false : true);
}

Board.prototype.__clearHighlights = function()
{
    var rows = this.squareCountY;
    var cols = this.squareCountX;
    
    this.__setMatrixValue(rows,cols,this.highlightMatrix,-1);
}

Board.prototype.__clearHighlight = function(x,y)
{
    this.highlightMatrix[y][x]=-1;   
}

Board.prototype.__highlightSquare = function(x,y,colorIndex)
{
    this.highlightMatrix[y][x]=colorIndex;   
}

Board.prototype.__initHighlightMatrix = function()
{
    var rows = this.squareCountY;
    var cols = this.squareCountX;
    
    this.highlightMatrix=this.__createMatrix(rows,cols,-1);
}

Board.prototype.__initSpecialSquaresMatrix = function()
{
    var rows = this.squareCountY;
    var cols = this.squareCountX;
    
    this.squareBackgroundTypes=this.__createMatrix(rows,cols,0);
    this.squareBackgrounds=this.__createMatrix(rows,cols,null);
    this.squareTags=this.__createMatrix(rows,cols,null);
}

Board.prototype.__getBoardHTML = function()
{
    var sqs = "position:absolute; z-Index:2; margin:0px; padding:0px; ";
    var bs="position:absolute; z-Index:1; left:0px; top:0px; margin:0px; padding:0px; ";
    bs+="width:"+this.width+"; height:"+this.height+";";
    var s = "<div id='"+this.name+"' style='"+bs+"'>";
    
    for(var y=0; y<this.squareCountY; y++)
    {
        var yOffset=(y*this.squareHeight);
        for(var x=0; x<this.squareCountX; x++)
        {
            var xOffset=(x*this.squareWidth);
            
            var squareColor = null;
            if(this.__isHighlighted(x,y))
                squareColor = "background-color: "+this.highlightColors[this.highlightMatrix[y][x]];
            else {
                if(this.__hasSquareBackground(x,y)) {
                    if(this.squareBackgroundTypes[y][x]==1)
                        squareColor = "background-color: "+this.squareBackgrounds[y][x];
                    else
                        squareColor = "background-image: url("+this.squareBackgrounds[y][x]+")";
                } else
                    squareColor="background-color: "+this.squareColorFunction(x,y);
            }
            
            var width = this.squareWidth;
            var height = this.squareHeight;
            var borderStyle=(this.hasSquareBorder ? "border-style: solid; border-width: 1px; border-color: "+this.borderColor+";" : "");
            
            var hasTag = (this.squareTags[y][x]==null ? false : true);
            var tagHTML = " ";
            if(hasTag) tagHTML = " data-tag='"+this.squareTags[y][x]+"' ";
            
            var p="<div "+tagHTML+" onClick='__boardGame2D_ClickHandler(0,this);' data-location-x='"+x+"' data-location-y='"+y+"' style='"+sqs+"width:"+width+"; height:"+height+"; "+squareColor+"; left:"+xOffset+"; top:"+yOffset+"; "+borderStyle+"; border-radius: 0"+this.squareRadius+"px;'></div>";
            s+=p;
        }
    }
    s+="</div>";
    return s;
}

Board.prototype.__createMatrix = function(rows, cols, initValue)
{
    var m = new Array(rows);
    
    for(var i=0; i<rows; i++) 
    {
        m[i]=new Array(cols);
        for(var j=0; j<cols; j++) m[i][j]=initValue;
    }
    
    return m;
}

Board.prototype.__setMatrixValue = function(rows, cols, matrix, value)
{
    for(var i=0; i<rows; i++) 
    {
        for(var j=0; j<cols; j++) matrix[i][j]=value;
    }
}

Board.prototype.__swapAxes = function()
{
    var temp = this.squareCountX;
    this.squareCountX = this.squareCountY;
    this.squareCountY = temp;
    
    temp = this.width;
    this.width = this.height;
    this.height = temp;
}

// private functions end here <----------------------------

// -------------------- BOARD [end] -----------------------
