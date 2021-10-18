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
            this.seats[i][j] = Math.floor(Math.random() * 2);}
        }
    }


this.buy = function(){
// creating a   
    let securitySeat = 0
    while (securitySeat == 0){
        let seatsToBuy = prompt("How many seats do you want to buy?");
        if (!isNaN(seatsToBuy) && seatsToBuy > 0){
        console.log(seatsToBuy);
        securitySeat++;
        }
    
        else{
            alert("Please introduce a valid number!");
            console.log(seatsToBuy + " is not a valid number");
        }
    
        let allRows = document.getElementsByTagName("td");
        for(let i = 1; i <= seatsToBuy; i++){
           
            let seatNumber = prompt("Which is the number of the seat " + i);
               
               
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
            if (!isNaN (seatsToBuy) && seatsToBuy > 0){
                alert("The total price will be: " + seatsToBuy * this.price + " €");
            } 
         
        }
       
    }
    
}


// declaring an object
function blackWidow (){ 

    blackWidowFilm = new film("Black Widow", 10, 4, 9)
    blackWidowFilm.createSeats();


    document.write("<div class = 'box'>")
    document.write("<div class= 'children'><img  src='../img/blackWidow.jpg' alt='Black Widow film'></div>")
    document.write("<div class = 'children'><table>");
    let seatsOfTheTheatre = 0;
    for(let i = 0; i < blackWidowFilm.row; i++) {
        document.write("<tr>");
        for(let j = 0; j < blackWidowFilm.colum; j++) {
            if (blackWidowFilm.seats[i][j] == 0) {
                if (j == 3 || j == 7) {
                    document.write("<td><img src='../img/seat-green.png' alt='Available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
                else {
                    document.write("<td><img src='../img/seat-green.png' alt='Green available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
            }
            else if (blackWidowFilm.seats[i][j] == 1) {
                if (j == 3 || j == 7) {
                    document.write("<td><img src='../img/seat-red.png' alt='Not available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
                else {
                    document.write("<td><img src='../img/seat-red.png' alt='Red not available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
            }
            seatsOfTheTheatre++;
        }
        document.write("</tr></div>");
        document.write("</div>")
    }
    setTimeout(() => {blackWidowFilm.buy()}, 500);  
}

function shangChi (){ 

    shangChiFilm = new film("Shang Chi ", 7, 5, 13)
    shangChiFilm.createSeats();


    document.write("<div class = 'box'>")
    document.write("<div class= 'children'><img  src='../img/ShangChi.jpeg' alt='Black Widow film'></div>")
    document.write("<div class = 'children'><table>");
    let seatsOfTheTheatre = 0;
    for(let i = 0; i < shangChiFilm.row; i++) {
        document.write("<tr>");
        for(let j = 0; j < shangChiFilm.colum; j++) {
            if (shangChiFilm.seats[i][j] == 0) {
                if (j == 3 || j == 7) {
                    document.write("<td><img src='../img/seat-green.png' alt='Available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
                else {
                    document.write("<td><img src='../img/seat-green.png' alt='Green available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
            }
            else if (shangChiFilm.seats[i][j] == 1) {
                if (j == 3 || j == 7) {
                    document.write("<td><img src='../img/seat-red.png' alt='Not available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
                else {
                    document.write("<td><img src='../img/seat-red.png' alt='Red not available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
            }
            seatsOfTheTheatre++;
        }
        document.write("</tr></div>");
        document.write("</div>")
    }
    setTimeout(() => {shangChiFilm.buy()}, 500);  
}

function spaceJam (){ 

    spaceJamFilm = new film("Space Jam  ", 12, 6, 10)
    spaceJamFilm.createSeats();


    document.write("<div class = 'box'>")
    document.write("<div class= 'children'><img  src='../img/SpaceJam.jpg' alt='Black Widow film'></div>")
    document.write("<div class = 'children'><table>");
    let seatsOfTheTheatre = 0;
    for(let i = 0; i < spaceJamFilm.row; i++) {
        document.write("<tr>");
        for(let j = 0; j < spaceJamFilm.colum; j++) {
            if (spaceJamFilm.seats[i][j] == 0) {
                if (j == 3 || j == 7) {
                    document.write("<td><img src='../img/seat-green.png' alt='Available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
                else {
                    document.write("<td><img src='../img/seat-green.png' alt='Green available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
            }
            else if (spaceJamFilm.seats[i][j] == 1) {
                if (j == 3 || j == 7) {
                    document.write("<td><img src='../img/seat-red.png' alt='Not available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
                else {
                    document.write("<td><img src='../img/seat-red.png' alt='Red not available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
            }
            seatsOfTheTheatre++;
        }
        document.write("</tr></div>");
        document.write("</div>")
    }
    setTimeout(() => {spaceJamFilm.buy()}, 500);  
}


