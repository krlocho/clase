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
        let index = seatsToBuy.indexOf(seatNumber) //this gives youu the index of the seat
        if (index != -1) {
            allRows[seatNumber].innerHTML = "<img src='../img/seat-green.png' alt='available seat' onclick='exampleFilm.buy(" + seatNumber + ")'><p>" + seatNumber + "</p>" //The seat returns to available state
            this.seats[row][col] = 0;   //empty the seat
            totalPrice -= this.price; 
            seatsToBuy.splice(index, 1);   //If the seat number is taken by the same user, that seat now is removed from the array of selected seats
            document.getElementById("totalprice").innerHTML = totalPrice + "€ ";  //total price
            tempfilmSelected = "";
            for (let i = 0; i < seatsToBuy.length; i++) {
                tempfilmSelected += seatsToBuy[i] + ", ";
            }
            document.getElementById("seatsBought").innerHTML = tempfilmSelected;
        }
       

    } 
    
    else if (this.seats[row][col] == 0){
        this.seats[row][col] = 1;
        allRows[seatNumber].innerHTML = "<img src='../img/seat-red.png' alt='not available seat' onclick='exampleFilm.buy(" + seatNumber + ")'><p>" + seatNumber + "</p>";
        totalPrice += this.price;
        document.getElementById("totalprice").innerHTML = totalPrice + "€ ";
        seatsToBuy.push(seatNumber);
        if (seatsToBuy.length != 1) {  //If only for formatting purposes
            document.getElementById("seatsBought").innerHTML += ", " + seatsToBuy[seatsToBuy.length - 1];
        }
        else {
            document.getElementById("seatsBought").innerHTML += seatsToBuy[seatsToBuy.length - 1];                
        }
    }
}
}



// declaring the objects


blackWidowFilm = new film("Black Widow", 10, 3, 13)
  

shangChiFilm = new film("Shang Chi ", 7, 4, 11)


spaceJamFilm = new film("Space Jam  ", 12, 3, 9)
 

exampleFilm = new film('null', 'null', 0, 0, 0) //example film that is going to be replaced by the new one


//this is gonna be updated
var totalPrice = 0;    
var seatsToBuy = [];  


function printMovie(filmSelected){
    let filmSelected1 = filmSelected;
    switch(filmSelected) {
        case "blackwidow":
     
            blackWidowFilm.createSeats();
            
            exampleFilm = blackWidowFilm;
            break;

            case "shangchi":
          
            shangChiFilm.createSeats()
            exampleFilm = shangChiFilm;
            break;

            case "spacejam":
         
            spaceJamFilm.createSeats();
            exampleFilm = spaceJamFilm;
            break;
    
        }
document.write("<div id='price'>Price of the seats: </div>");
document.write("<div id='totalprice'>0€</div>");
document.write("<div id='yourSeats'>Your selected the seats: </div>");
document.write("<div id='seatsBought'></div>");
document.write("<input type='button' onclick='location.reload();' value='Reset' />")
document.write( "<div >");

document.write("<table>");
let seatsOfTheTheatre = 0;
for(let i = 0; i < exampleFilm.row; i++) {
    document.write("<tr>");
    for(let j = 0; j < exampleFilm.colum; j++) {
        if (exampleFilm.seats[i][j] == 0) {
                document.write("<td ><img src='../img/seat-green.png' alt='available seat' onclick='exampleFilm.buy(" + seatsOfTheTheatre + ")'><p>" + seatsOfTheTheatre + "</p></td>");
                seatsOfTheTheatre++;
            }
        
        else if (exampleFilm.seats[i][j] == 1) {
          
                document.write("<td><img src='../img/seat-red.png' alt='not available seat' onclick='exampleFilm.buy(" + seatsOfTheTheatre + ")'><p>" + seatsOfTheTheatre + "</p></td>");
                seatsOfTheTheatre++;
            }
        }
       
    }
    document.write("</tr>");

}