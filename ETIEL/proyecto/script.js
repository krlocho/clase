//The program asks for the number of shops
var shopNumber = prompt ("How many shops are there?");
console.log('The user said there are ' + shopNumber + ' shops');


//For every shop the program asks you for the names and every shop is added to the array shopName
var shopName = []

for (let i = 1; i <= shopNumber; i++){
    var shop = prompt ("Insert the name of the shop " + i);
    shopName.push(shop);}
    console.log('Shop ' + i + ': ' + shop);


//For every shop the program asks you for the number of the door and every shop is added to the array doorNumber
var doorNumber =[]

for (let i = 1; i <= shopNumber; i++){
    var door = prompt("Insert the door number of the shop: " + i + " :" )
    doorNumber.push (door);
    console.log('Shop ' + i + ' has the number: ' + door);}


//For every shop the program asks you for the discount of the shop and every dicount is added to the array shopDiscount
//if you introduce something that is not a number the program asks you again for the discount
var shopDiscount =[]

for (let i = 0; i < shopNumber; i++){
  var securityDiscount = 0  
  while (securityDiscount == 0 ) {
      
    var discount = prompt ("Insert the discount of " + shopName[i])
    if (!isNaN(discount)) {
    shopDiscount.push(discount);
    console.log('Shop ' + i + ' has a discount of: ' + discount);
    securityDiscount++;}
  
    else{
      alert("Please introduce a number!")
    }
  }}



//printing the information about the shops
for(var i = 0; i < shopNumber; i++) {
  document.write("<div id ='name'> <div><h3>" + shopName[i] + '</h3> </div></div>')};

document.write("<br>")

for(var i = 0; i < shopNumber; i++) {
  document.write("<div id ='number'> <h3>" + doorNumber[i] + '</h3> </div>')};

document.write("<br>")

for(var i = 0; i < shopNumber; i++) {
  document.write("<div id ='discount'> <h3>" + shopDiscount[i] + ' % </h3> </div>')};
  
document.write("<br>")  


var securityHour = 0

var hour = prompt('What is the hour?:');
console.log("The hour is: " + hour);

switch (hour){
  case "1":
    document.write("<div class='clock'><img src='images/clock/clock1.png'></img></div>");
    securityHour++;
    break;
  case "2":
    document.write("<div class='clock'><img src='images/clock/clock2.png'></img></div>");
    securityHour++;
    break;
  case "3":
    document.write("<div class='clock'><img src='images/clock/clock3.png'></img></div>");
    securityHour++;
    break;
  case "4":
    document.write("<div class='clock'><img src='images/clock/clock4.png'></img></div>");
    securityHour++;
    break;
  case "5": 
    document.write("<div class='clock'><img src='images/clock/clock5.png'></img></div>");
    securityHour++;
    break;
  case "6":
    document.write("<div class='clock'><img src='images/clock/clock6.png'></img></div>");
    securityHour++;
    break;
  case "7":
    document.write("<div class='clock'><img src='images/clock/clock7.png'></img></div>");
    securityHour++;
    break;
  case "8":
    document.write("<div class='clock'><img src='images/clock/clock8.png'></img></div>");
    securityHour++;
    break;
  case "9":
    document.write("<div class='clock'><img src='images/clock/clock9.png'></img></div>");
    securityHour++;
    break;
  case "10":
    document.write("<div class='clock'><img src='images/clock/clock10.png'></img></div>");
    securityHour++;
    break;
  case "11":
    document.write("<div class='clock'><img src='images/clock/clock11.png'></img></div>");
    securityHour++;
    break;
  case "12":
    document.write("<div class='clock'><img src='images/clock/clock12.png'></img></div>");
    securityHour++;
    break;
}

//the program asks you the color of the traffic light if its different from red, green or orange the program show an alert and asks you again
var securityLight = 0
while (securityLight == 0){

 var trafficLight= prompt ("What colour is the traffic Light? ");
  console.log("The traffic lighs color is: " + trafficLight);
 
 if ( trafficLight == "red"){
  document.write (" <img class ='trafficlight' src='images/red.png' alt=''>") ;
  securityLight++;}

  else if ( trafficLight == "green")
  { document.write (" <img class ='trafficlight' src='images/green.png' alt=''>");
  securityLight++;}

  else if (trafficLight =='orange')
  { document.write (" <img class ='trafficlight' src='images/yellow.png' alt=''>");
  securityLight++;}

  else {
    alert("The trafic light has to be red, green or orange");}
  }



  
var carNumber = prompt ("How many cars are there?");
   while ( carNumber > 0 ){
  
    document.write (" <img id='van' src='images/png-transparent-hippie-coloring-book-drawing-hippie-bus-angle-child-car.png' alt='hippie van'></div>");
    carNumber--;
  
}