//  using constructors to create the class film, with the atributes

var film = function(name, price, row, colum ){
this.name = name;
this.price = price;
this.row = row;
this.colum = colum
this.seats = [];


//creating an array of arrays(seats)
this.createSeats = function(){
    for(var i = 0; i < this.row; i++){
        this.seats[i] = []
        
        for(var j = 0; j < this.colum; j++){
            this.seats[i][j] = Math.floor(Math.random()*2 );}
        }
    }

        
// painting the seats
this.buy = function(seatNumber){
    console.log(seatNumber);
    let allRows = document.getElementsByTagName("td");
    var row = Math.floor((seatNumber) / this.colum);
    var col = seatNumber % this.colum;
    if (this.seats[row][col] == 1){
        let index = mySeats.indexOf(seatNumber)
        if (index != -1) {
            allRows[seatNumber].innerHTML = "<img src='../img/seat-green.png' alt='Green available seat' onclick='myFilm.buy(" + seatNumber + ")'><p>" + seatNumber + "</p>" //The seat returns to available state
            this.seats[row][col] = 0;   //Now the seat is free
            myPrice -= this.price; //Price updated
            mySeats.splice(index, 1);   //If the seat number is taken by the same user, that seat now is removed from the array of selected seats
            document.getElementById("result1").innerHTML = myPrice + "€ ";  //Price to the user updated
            tempCad = "";
            for (let i = 0; i < mySeats.length; i++) {
                tempCad += mySeats[i] + ", ";
            }
            document.getElementById("result2").innerHTML = tempCad;
        }
        else {
            alert("The seat " + seatNumber + " is taken!!\nPick another one!");
        }

    } 
    
    else if (this.seats[row][col] == 0){
        this.seats[row][col] = 1;
        allRows[seatNumber].innerHTML = "<img src='../img/seat-red.png' alt='Red not available seat' onclick='myFilm.buy(" + seatNumber + ")'><p>" + seatNumber + "</p>";
        myPrice += this.price;
        document.getElementById("result1").innerHTML = myPrice + "€ ";
        mySeats.push(seatNumber);
        if (mySeats.length != 1) {  //If only for formatting purposes
            document.getElementById("result2").innerHTML += ", " + mySeats[mySeats.length - 1];
        }
        else {
            document.getElementById("result2").innerHTML += mySeats[mySeats.length - 1];                
        }
    }
}
}



// declaring the objects


    blackWidowFilm = new film("Black Widow", 10, 3, 13)
  
      


function shangChi (){ 

    shangChiFilm = new film("Shang Chi ", 7, 4, 11)
    shangChiFilm.createSeats();
    shangChiFilm.redOrGreen(); 
}

function spaceJam (){ 

    spaceJamFilm = new film("Space Jam  ", 12, 3, 9)
    spaceJamFilm.createSeats();
    spaceJamFilm.redOrGreen();

    
}

myFilm = new film('null', 'null', 0, 0, 0); 

var myPrice = 0;    // Total price of the tickets
var mySeats = [];   // Array of the client is buying

function saveValues(cad1) { //The seat array is saved depending on which movie page we are
    console.log(cad1);
    switch(cad1) {
        case "blackwidow":
            blackWidowFilm = myFilm;
            sessionStorage.blackwidowSeatArray = JSON.stringify(blackwidowFilm.seats);
            break;
    }}

function aMovie(cad){
    let cad1 = cad;
    switch(cad) {
        case "blackwidow":
            if (sessionStorage.blackwidowSeatArray != undefined) {
                blackWidowFilm.seats = JSON.parse(sessionStorage.blackwidowSeatArray);
            }
            else if (blackWidowFilm.seats.length == 0){
                blackWidowFilm.createSeats();
            }
            myFilm = blackWidowFilm;
            break;
        
            default:
                alert('The movie name is invalid!!');
        }
document.write("<div id='price'>Total cost: </div>");
document.write("<div id='result1'>0€</div>");
document.write("<div id='yourSeats'>Your seats are: </div>");
document.write("<div id='result2'></div>");
document.write("<button id='buy' onclick='saveValues(" + JSON.stringify(cad) + ")'>Buy</button>");
document.write("<button id='reset' onclick='resetValues()'>Reset</button>")

document.write( "<div class='cont'>");

document.write("<table>");
let seatsOfTheTheatre = 0;
for(let i = 0; i < myFilm.row; i++) {
    document.write("<tr>");
    for(let j = 0; j < myFilm.colum; j++) {
        if (myFilm.seats[i][j] == 0) {
                document.write("<td class='spacer'><img src='../img/seat-green.PNG' alt='Green available seat' onclick='myFilm.buy(" + seatsOfTheTheatre + ")'><p>" + seatsOfTheTheatre + "</p></td>");
                seatsOfTheTheatre++;
            }
        
        else if (myFilm.seats[i][j] == 1) {
          
                document.write("<td><img src='../img/seat-red.PNG' alt='Red not available seat' onclick='myFilm.buy(" + seatsOfTheTheatre + ")'><p>" + seatsOfTheTheatre + "</p></td>");
                seatsOfTheTheatre++;
            }
        }
       
    }
    document.write("</tr>");

}