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

// creating a  function to buy the seats
this.buy = function(seatReserved){
// creating a security method, if you input something that is not a number it fails and ask you again the number of seats
    console.log(seatNumber);
    let allRows = document.getElementsByTagName("td");                    
    let row = Math.floor((seatReserved) / this.colum);                   
    let col = seatNumber % this.colum;
    if (this.seats[row][col] == 1){
        let seatsBooked = seat.indexOf(seatReserved) }
        if (index != -1) {
            allRows[seatReserved].innerHTML = "<img src='../img/seat-green.png' alt='available seat' onclick='Film.buy(" + seatReserved + ")'><p>" + seatReserved + "</p>" //The seat returns to available state
            this.seats[row][col] = 0;   //Now the seat is free
            myPrice -= this.pricePerSeat; //Price updated
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

    
// painting the seats
this.redOrGreen = function(){
    let seatsOfTheTheatre = 0;
    for(let i = 0; i < this.row; i++) {
        document.write("<tr>");
        for(let j = 0; j < this.colum; j++) {
        if (this.seats[i][j] == 0) {
                
                    document.write("<td><img src='../img/seat-green.png' alt='Available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                    seatsOfTheTheatre++;
            }
            else if (this.seats[i][j] == 1) {

                    document.write("<td><img src='../img/seat-red.png' alt='Red not available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                    seatsOfTheTheatre++;
                }
            }
            document.write("</tr></div>");
            document.write("</div>")
        }
    }
}

// declaring the objects
function blackWidow (){ 

    blackWidowFilm = new film("Black Widow", 10, 3, 13)
    blackWidowFilm.createSeats();
    blackWidowFilm.redOrGreen();    
    setTimeout(() => {blackWidowFilm.buy()}, 500);  
    }

function shangChi (){ 

    shangChiFilm = new film("Shang Chi ", 7, 4, 11)
    shangChiFilm.createSeats();
    shangChiFilm.redOrGreen();
    setTimeout(() => {shangChiFilm.buy()}, 500);  
}

function spaceJam (){ 

    spaceJamFilm = new film("Space Jam  ", 12, 3, 9)
    spaceJamFilm.createSeats();
    spaceJamFilm.redOrGreen();

    
   spaceJamFilm.buy();

}

