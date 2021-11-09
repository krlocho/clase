
var security = 0
var counter = 0
var timerTime = new Date();
console.log(timerTime);

var miliSeconds = 0;
var seconds = 0;
var minutes = 0;


var myTime = "00:00:00"


function timer() {   
  var milisec, sec, min;
  miliSeconds += 2;

  if (miliSeconds >= 100) {
    seconds++;
    miliSeconds = 0;
  }

  if (seconds > 59) {
    minutes++;
    seconds = 0;
  }


  if (seconds < 10) { sec = "0" + seconds; } else { sec = seconds; }
  if (minutes < 10) { min = "0" + minutes; } else { min = minutes; }
  if (miliSeconds < 10) { milisec = "0" + miliSeconds; } else { milisec = miliSeconds; }

  document.getElementById("timer").innerHTML = min + ":" + sec + ":" + milisec;
}




function movePics(cell1, cell2) {
  var temp = document.getElementById(cell1).className;
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  document.getElementById(cell2).className = temp;
}



function resetValues() {
  counter = 0
  miliSeconds = 0;
  seconds = 0;
  minutes = 0;


  document.getElementById("movements").innerHTML = "Moves: " + counter;

  document.getElementById("extra").innerHTML = " ";

  document.getElementById("button").innerHTML = '<button onClick="shuffle();">Start</button> ';



}

function shuffle() {
  security++
  resetValues()
  timer();
  myTime = setInterval(timer, 20)

 /*  //coment this to start without shuffling 
  //access to each cell of the 3x3 grid
  for (var row = 1; row <= 3; row++) { //For each row of the 3x3 grid
    for (var column = 1; column <= 3; column++) { //For each column in this row

      var row2 = Math.floor(Math.random() * 3 + 1); //Pick a random row from 1 to 3
      var column2 = Math.floor(Math.random() * 3 + 1); //Pick a random column from 1 to 3

      movePics("cell" + row + column, "cell" + row2 + column2); //Swap the look & feel of both cells
    }
  } */
}



function clickTile(row, column) {

  var cell = document.getElementById("cell" + row + column);
  var tile = cell.className;
  var moves = document.getElementById("movements").innerHTML = "Moves: " + counter;

  if (security >= 1) {
    if (tile != "tile9") {
      //Checking if white tile on the right
      if (column < 3) {
        if (document.getElementById("cell" + row + (column + 1)).className == "tile9") {
          movePics("cell" + row + column, "cell" + row + (column + 1));
          counter++;
          solved();
          return;
        }
      }
      //Checking if white tile on the left
      if (column > 1) {
        if (document.getElementById("cell" + row + (column - 1)).className == "tile9") {
          movePics("cell" + row + column, "cell" + row + (column - 1));
          counter++;
          console.log(counter); 
          solved();

          return;
        }
      }
      //Checking if white tile is above
      if (row > 1) {
        if (document.getElementById("cell" + (row - 1) + column).className == "tile9") {
          movePics("cell" + row + column, "cell" + (row - 1) + column);
          counter++;
          console.log(counter);
          solved();

          return;
        }
      }
      //Checking if white tile is below
      if (row < 3) {
        if (document.getElementById("cell" + (row + 1) + column).className == "tile9") {
          movePics("cell" + row + column, "cell" + (row + 1) + column);
          counter++;
          console.log(counter);
          solved();
          return;

        }
      }
    }
  }
}


function solved() { //Checks if all images are in theirs correct positions
  var ok = { cell11: "tile1", cell12: "tile2", cell13: "tile3", cell21: "tile4", cell22: "tile5", cell23: "tile6", cell31: "tile7", cell32: "tile8", cell33: "tile9" }
  var boolean = 0
  for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
      let tile = document.getElementById("cell" + i + j).classList
      let cell = "cell" + i + j;
      if (ok[cell] === tile[0]) {
        boolean = 1;
      }
      else {
        boolean = 0;
        break;
      }
    }
    if (boolean === 0) { break; }
  }
  if (boolean === 1) { finished(); }
}



function finished() {

  security--;

  document.getElementById("movements").innerHTML = "You Won";
  document.getElementById("extra").innerHTML = counter + " movements";
  document.getElementById("button").innerHTML = '<button onClick="shuffle();">Play again</button> ';


  timerTime.setMilliseconds(miliSeconds);
  timerTime.setSeconds(seconds);
  timerTime.setMinutes(minutes);

  clearInterval(myTime);
}
