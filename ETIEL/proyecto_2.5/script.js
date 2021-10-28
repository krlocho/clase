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
this.redOrGreen = function(){

    let seatsOfTheTheatre = 0;
    for(let i = 0; i < this.row; i++) {
        document.write("<tr>");
        for(let j = 0; j < this.colum; j++) {
        if (this.seats[i][j] == 0) {
                
                   document.write("<td id='[i][j]'><img class=seat src='../img/seat-green.png' onclick='blackWidowFilm.change()'  alt='Available seat'><p>" + seatsOfTheTheatre + "</p></td>");
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
this.change = function(){
    var image = document.getElementsByClassName("seat");
    if (image.src.match("seat-green.png")){
        image.src = "seat-red.png"
    }
}
        
    
}


// declaring the objects
function blackWidow (){ 

    blackWidowFilm = new film("Black Widow", 10, 3, 13)
    blackWidowFilm.createSeats();
    blackWidowFilm.redOrGreen(); 
      

}
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
