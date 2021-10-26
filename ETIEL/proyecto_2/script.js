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
this.buy = function(){
// creating a security method, if you input something that is not a number it fails and ask you again the number of seats
    let securitySeat = 0
    while (securitySeat == 0){
        let seatsToBuy = prompt("How many seats do you want to buy?");
        if (!isNaN(seatsToBuy ) && seatsToBuy > 0 ){
        console.log(seatsToBuy);
        securitySeat++;
        console.log("You bought" +seatsToBuy + " tickets");
        }
    
        else{
            alert("Please introduce a valid number!");
            console.log(seatsToBuy + " is not a valid number");
        }
    
        let allRows = document.getElementsByTagName("td");
        for(let i = 1; i <= seatsToBuy; i++){
            let securityNumberOfTheSeat = 0
                while (securityNumberOfTheSeat == 0) {
                
                let seatNumber = prompt("Which is the number of the seat " + i);
                if (!isNaN(seatNumber) || seatNumber > (this.row * this.colum) ){
                    securityNumberOfTheSeat++;
                    console.log("seat" + seatNumber + " is bought")
                
                    do {
                        
                        var row = Math.floor((seatNumber) / this.colum);                   
                        var col = seatNumber % this.colum;
                        if (this.seats[row][col] == 1){
                        alert("The seat " + seatNumber + " is taken!!");
                        seatNumber = prompt("Pick another one!");}
                        }

                        
                        while (this.seats[row][col] == 1);
                        

                        if (this.seats[row][col] == 0){
                            this.seats[row][col] = 1;
                            allRows[seatNumber].innerHTML = "<img src='../img/seat-red.png' alt='red not available seat'><p>" + seatNumber + "</p>";
                        }
                
                }
                else{alert("Please introduce a valid number!!")}

            }
          
            } 
            if (!isNaN (seatsToBuy) && seatsToBuy > 0){
                alert("The total price will be: " + seatsToBuy * this.price + " €");
                console.log( "the price is "+ seatsToBuy * this.price + " €" )
        }
       
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

