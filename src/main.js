const $ = require("jquery");
const Filesaver = require("file-saver");
const Chess = require("chess.js");
const ChessBoard = require("chessboardjs");
const domtoimage = require("dom-to-image");
const uuidv4 = require("uuid/v4");

//var gameName = uuidv4().split("-")[0];
var gameName = uuidv4().split("-")[0];
  var counter = 0;
var init = function() {
  //--- start example JS ---
  var board,
    game = new Chess();

  var makeRandomMove = function() {
    var possibleMoves = game.moves();

    // exit if the game is over
    if (
      game.game_over() === true ||
      game.in_draw() === true ||
      possibleMoves.length === 0
    )
      return;

    var randomIndex = Math.floor(Math.random() * possibleMoves.length);
    game.move(possibleMoves[randomIndex]);
    var fenString = game.fen();
    board.position(fenString);

    getScreenShot(fenString);
    window.setTimeout(makeRandomMove, 1000);
  };


  // New board reset counter
  board = ChessBoard("board", "start");
  counter = 0;

  window.setTimeout(makeRandomMove, 1000);
}; // end init()


function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

var getScreenShot = function(fenString) {
  domtoimage.toBlob(document.getElementById("board")).then(function(blob) {
    Filesaver.saveAs(blob, `chess_${gameName}_${pad(counter, 4)}_${fenString}.png`);
    counter++;
  });
};

$(document).ready(init);
