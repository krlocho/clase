//The program asks for the number of shops, you have to introduce a number, if you dont do that the program asks you again
var securityNumber = 0
while (securityNumber == 0) {
  
  var shopNumber = prompt ("How many shops are there?");
    if (!isNaN(shopNumber)){
    console.log('The user said there are ' + shopNumber + ' shops');
    securityNumber++;}

    else{
    alert("Please introduce a number!");
    console.log(shopNumber + " is not a valid number");
  }
}


//For every shop the program asks you for the names and every shop is added to the array shopName
var shopName = []

for (let i = 1; i <= shopNumber; i++){
    var shop = prompt ("Insert the name of the shop " + i);
    shopName.push(shop);
    console.log('Shop ' + i + ': ' + shop);}
    


//For every shop the program asks you for the number of the door and every shop is added to the array doorNumber, the number can contain letters
var doorNumber =[]
for (let i = 1; i <= shopNumber; i++){

    var door = prompt("Insert the door number of the shop " + i + " :" )
      doorNumber.push (door);
      console.log('Shop ' + i + ' has the number: ' + door);
      
    }
      
      


//For every shop the program asks you for the discount of the shop and every dicount is added to the array shopDiscount
//if you introduce something that is not a number the program asks you again for the discount
var shopDiscount =[]

for (let i = 0; i < shopNumber; i++){
  var securityDiscount = 0  
  while (securityDiscount == 0 ) {
      
    var discount = prompt ("Insert the discount of " + shopName[i] + " :")
    if (!isNaN(discount)) {
    shopDiscount.push(discount);
    console.log('Shop ' + i + ' has a discount of: ' + discount);
    securityDiscount++;}
  
    else{
      alert("Please introduce a number!");
      console.log(discount + " is not a valid number");
    }
  }
}



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
console.log("Printing shop name, shop number and shop discount")

//the program asks you the hour, if its not valid (from 1 to 12) the program asks you again
var securityHour = 0
while (securityHour == 0) {
  
  var hour = prompt('What is the hour?:');
  
  switch (hour){
    case "1":
      document.write("<div ><img class='clock' src='images/clock/clock1.png'></img></div>");
      console.log("The hour is: " + hour);
      securityHour++;
      break;
    case "2":
      document.write("<div ><img class='clock' src='images/clock/clock2.png'></img></div>");
      console.log("The hour is: " + hour);
      securityHour++;
      break;
    case "3":
      document.write("<div ><img class='clock' src='images/clock/clock3.png'></img></div>");
      console.log("The hour is: " + hour);
      securityHour++;
      break;
    case "4":
      document.write("<div ><img class='clock' src='images/clock/clock4.png'></img></div>");
      console.log("The hour is: " + hour);
      securityHour++;
      break;
    case "5": 
      document.write("<div ><img class='clock' src='images/clock/clock5.png'></img></div>");
      console.log("The hour is: " + hour);
      securityHour++;
      break;
    case "6":
      document.write("<div ><img class='clock' src='images/clock/clock6.png'></img></div>");
      console.log("The hour is: " + hour);
      securityHour++;
      break;
    case "7":
      document.write("<div ><img class='clock' src='images/clock/clock7.png'></img></div>");
      console.log("The hour is: " + hour);
      securityHour++;
      break;
    case "8":
      document.write("<div ><img class='clock' src='images/clock/clock8.png'></img></div>");
      console.log("The hour is: " + hour);
      securityHour++;
      break;
    case "9":
      document.write("<div ><img class='clock' src='images/clock/clock9.png'></img></div>");
      console.log("The hour is: " + hour);
      securityHour++;
      break;
    case "10":
      document.write("<div ><img class='clock' src='images/clock/clock10.png'></img></div>");
      console.log("The hour is: " + hour);
      securityHour++;
      break;
    case "11":
      document.write("<div ><img class='clock' src='images/clock/clock11.png'></img></div>");
      console.log("The hour is: " + hour);
      securityHour++;
      break;
    case "12":
      document.write("<div ><img class='clock' src='images/clock/clock12.png'></img></div>");
      console.log("The hour is: " + hour);
      securityHour++;
      break;
    default:
      alert("Please introduce a number between 1 and 12");
      console.log(hour + " is not a valid hour");
  }}

//the program asks you the color of the traffic light if its different from red, green or orange the program show an alert and asks you again untill you put a valid valor
var securityLight = 0
while (securityLight == 0){

 var trafficLight= prompt ("What colour is the traffic Light? ");
  
 
 if ( trafficLight == "red"){
  document.write (" <img class ='trafficlight' src='images/red.png' alt=''>") ;
  console.log("The traffic ligth color is: " + trafficLight);
  securityLight++;}

  else if ( trafficLight == "green")
  { document.write (" <img class ='trafficlight' src='images/green.png' alt=''>");
  console.log("The traffic ligth color is: " + trafficLight);
  securityLight++;}

  else if (trafficLight =='orange')
  { document.write (" <img class ='trafficlight' src='images/yellow.png' alt=''>");
  console.log("The traffic ligth color is: " + trafficLight);
  securityLight++;}

  else {
    alert("The trafic light has to be red, green or orange");
    console.log(trafficLight + " is not a valid color");}
  }

//the program asks you the number of cars and print the cars, if its not a number it ask you again
var securityCar = 0
while (securityCar == 0) {
   
  var carNumber = prompt ("How many cars are there?");
  if (securityCar >=0){
    console.log("There are " + carNumber + " cars")
    while ( carNumber > 0 ){
      securityCar++
      document.write (" <img id='van' src='images/png-transparent-hippie-coloring-book-drawing-hippie-bus-angle-child-car.png' alt='hippie van'></div>");
      carNumber--;
    }
  }

  else{
    alert("Please introduce a number");
    console.log(carNumber + " is not a valid number");
  }
}