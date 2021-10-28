var Theatre= function (play,price,rows,cols){
  this.play= play;
  this.price= price;
  this.rows= rows;
  this.columns= cols;
  matrix = [];
  
  
  this.buy= function(){
    console.log("Buy Cinema tickets for the play "+this.play+" FOR ONLY "+this.price+" €");
  } ;

  this.print= function(){
      document.write("Name: "+this.play+"<br>"+" Precio: "+ "<i id='Totalprice'>"+this.price+"</i>"+"€");
//        document.write(this.totalSpace);
  };

  this.totalSpace= this.rows * this.columns
  

  this.table=function(){
    ticket=0;
    document.write('<table id="myTable" border="1">');
    document.write('<br>');
    
    
    for ( var i = 0; i < rows; i++ ) {
      matrix[i] = [];
      document.write('<tr>');
      
     // document.write('<br>')
    for ( var j = 0; j < cols; j++ ) {
      document.write('<td>');
      var idTd= "td-"+i+j;
      matrix[i][j] = (document.write('<img class="butaca" src="img/verde.png" width="30px"; height:"30px"; alt="" id="'+idTd+'" onclick="changeImage(this.id);">') );
      
  }}

      document.write('</table>');

  };
  
}

ticket=0
function changeImage(clicked_id) {

  var Image_Id = document.getElementById(clicked_id);
              if (Image_Id.src.match("img/roja.png")) {
                Image_Id.src = "img/verde.png";
                console.log('greeen '+clicked_id);
                var italic = document.getElementById('Totalprice');
                currentPrice = italic.innerHTML;
                var after = currentPrice*ticket;
                ticket--;
                console.log('Total restando '+(after-currentPrice));
                uno=after-currentPrice
                const div = document.querySelector(".info"); // <div class="info"></div>

                div.innerHTML = "<p>"+"Ha comprado "+ticket+" asientos"+"</p>"+"<br>"+"<strong>"+"El precio total es de "+uno+" €"+"</strong>";
              }
              else {
                Image_Id.src = "img/roja.png";
                console.log('red '+clicked_id)
                var italic = document.getElementById('Totalprice');
                currentPrice = italic.innerHTML;
                ticket++;
                var after = currentPrice*ticket;

                const div = document.querySelector(".info"); // <div class="info"></div>

                div.innerHTML = "<p>"+"Ha comprado "+ticket+" asientos"+"</p>"+"<br>"+"<strong>"+"El precio total es de "+after+" €"+"</strong>";
                
              }                     
  
  }

function reset() {
    
    var Image_Class=document.getElementsByClassName("butaca");
              if (Image_Class.src.match("img/roja.png")) {
                Image_Class.src = "img/verde.png";
                console.log("red to green")
              }     
    }

var  Pinocho= new Theatre("Pinocho", 12,4,4)
Pinocho.buy();

var  us= new Theatre("us", 16,5,4)
us.buy();

var  Geminis= new Theatre("Geminis", 13,6,5)
Geminis.buy();