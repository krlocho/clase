var security = 0
var counter = 0
var timerTime = new Date(); //Date object
console.log(timerTime);

var ms = 0; // milliseconds
var s = 0;  // seconds
var m = 0;  // minutes

var myTime = "00:00:00"


var top5Records = []; // -> [username] || Used to store best 5 times
//                          [minutes]
//                          [seconds]
//                          [miliseconds]
//                          [moves]
localStorage.records; //Stores best 5 times in local memory

if (localStorage.records != undefined) {
  top5Records = JSON.parse(localStorage.records);
}

function timer() {   //This is the timer
  var msAux, sAux, mAux;
  ms += 2;
  if (ms >= 100) {
    s++;
    ms = 0;
  }
  if (s > 59) {
    m++;
    s = 0;
  }

  if (s < 10) { sAux = "0" + s; } else { sAux = s; }
  if (m < 10) { mAux = "0" + m; } else { mAux = m; }
  if (ms < 10) { msAux = "0" + ms; } else { msAux = ms; }

  document.getElementById("timer").innerHTML = mAux + ":" + sAux + ":" + msAux;
}

function swapTiles(cell1, cell2) {
  var temp = document.getElementById(cell1).className;
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  document.getElementById(cell2).className = temp;
}
function resetValues() {
  counter = 0
  
}
function shuffle() {
  security = 1
  resetValues()

  //Use nested loops to access each cell of the 3x3 grid
  for (var row = 1; row <= 3; row++) { //For each row of the 3x3 grid
    for (var column = 1; column <= 3; column++) { //For each column in this row

      var row2 = Math.floor(Math.random() * 3 + 1); //Pick a random row from 1 to 3
      var column2 = Math.floor(Math.random() * 3 + 1); //Pick a random column from 1 to 3

      swapTiles("cell" + row + column, "cell" + row2 + column2); //Swap the look & feel of both cells
    }
  }
}

function clickTile(row, column) {

  var cell = document.getElementById("cell" + row + column);
  var tile = cell.className;
  var moves = document.getElementById("movements").innerHTML = "Moves: " + counter;
 // if (security == 1) {
    if (tile != "tile9") {
      //Checking if white tile on the right
      if (column < 3) {
        if (document.getElementById("cell" + row + (column + 1)).className == "tile9") {
          swapTiles("cell" + row + column, "cell" + row + (column + 1));
          counter++;
          solved();
          return;
        }
      }
      //Checking if white tile on the left
      if (column > 1) {
        if (document.getElementById("cell" + row + (column - 1)).className == "tile9") {
          swapTiles("cell" + row + column, "cell" + row + (column - 1));
          counter++;
          console.log(counter); solved();

          return;
        }
      }
      //Checking if white tile is above
      if (row > 1) {
        if (document.getElementById("cell" + (row - 1) + column).className == "tile9") {
          swapTiles("cell" + row + column, "cell" + (row - 1) + column);
          counter++;
          console.log(counter);
          solved();

          return;
        }
      }
      //Checking if white tile is below
      if (row < 3) {
        if (document.getElementById("cell" + (row + 1) + column).className == "tile9") {
          swapTiles("cell" + row + column, "cell" + (row + 1) + column);
          counter++;
          console.log(counter);
          solved();
          return;

        }
      }
    }
  //}
}

function solved() { //Checks if all images are in theirs correct positions
  var ok = { cell11: "tile1", cell12: "tile2", cell13: "tile3", cell21: "tile4", cell22: "tile5", cell23: "tile6", cell31: "tile7", cell32: "tile8", cell33: "tile9" }
  var bolean = 0
  for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
      let tile = document.getElementById("cell" + i + j).classList
      let cell = "cell" + i + j;
      if (ok[cell] === tile[0]) {
        bolean = 1;
      }
      else {
        bolean = 0;
        break;
      }
    }
    if (bolean === 0) { break; }
  }
  if (bolean === 1) { finished(); }
}

function finished() {
  document.getElementById("results-zone").innerHTML = "You won!!";
  document.getElementById("movements").innerHTML = "You´ve done in: " + counter
}
