//Initial commit
//GLOBAL VARIABLES
var myWritingZone = document.querySelector('.text');
var shiftKeyAct = false;
var bloMaKeyAct = false;
var altGrKeyAct = false;

//END GLOBAL VARIABLES

var Keyboard = function(){
    this.normalKeys = ['º', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '\'', '¡', 
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '`', '+', 
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ', '´', 'ç',
    '<', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-'],
    this.specialKeys = ['Tab', 'Enter', 'Backspace', 'Mayus', 'Enter', 'Shift', 'Ctrl', 'Alt', ' ', 'Alt Gr', 'fn', 'Win', ]
    this.altGrFirstRow = ['\\', '|', '@', '#', '~', '½', '¬', '{', '[', ']', '}', '(', ')'],
    this.shiftFirstRow = ['ª', '!', '"', '·', '$', '%', '&' ,'/', '(', ')', '=', '?', '¿','backspace']
    this.screenKeyboard = document.querySelectorAll('.keys');
    this.tabKey = document.querySelector('.tab');
    this.spaceKey = document.querySelector('.space');
    this.backSpaceKey = document.querySelector('.backspace');
    this.returnKey = document.querySelector('.enter');
    this.bloqMayusKey = document.querySelector('.mayus');
    this.shiftKeys = document.querySelectorAll('.shift');
    this.altGrKey = document.querySelector('.altgr');
    this.changeKeys = function(val) {  
        switch (val) {
            case 0: //Return to normal
                shiftKeyAct = false;
                bloMaKeyAct = false;
                altGrKeyAct = false;
                for (let i = 0; i < this.screenKeyboard.length; i++) {
                    this.screenKeyboard[i].innerHTML = this.normalKeys[i];
                }
                break;
            case 1: //Switches to shift mode
                for (let i = 0; i < 13; i++) {
                    this.screenKeyboard[i].innerHTML = this.shiftFirstRow[i];
                }
                for (let i = 13; i < this.screenKeyboard.length; i++) {
                    this.screenKeyboard[i].innerHTML = this.normalKeys[i].toUpperCase();
                }
                this.screenKeyboard[47].innerHTML = '>';
                this.screenKeyboard[23].innerHTML = '^';
                this.screenKeyboard[24].innerHTML = '*';
                this.screenKeyboard[35].innerHTML = '¨';
                this.screenKeyboard[45].innerHTML = ';';
                this.screenKeyboard[46].innerHTML = ':';
                this.screenKeyboard[47].innerHTML = '_';
                break;
            case 2: //Switches to alt mode
                for (let i = 0; i < 13; i++) {
                    this.screenKeyboard[i].innerHTML = this.altGrFirstRow[i];
                }
                this.screenKeyboard[15].innerHTML = '€';
                this.screenKeyboard[23].innerHTML = '[';
                this.screenKeyboard[24].innerHTML = ']';
                this.screenKeyboard[35].innerHTML = '{';
                this.screenKeyboard[36].innerHTML = '}';
                this.screenKeyboard[37].innerHTML = '|';
                this.screenKeyboard[45].innerHTML = '─';
                this.screenKeyboard[46].innerHTML = '·';
                this.screenKeyboard[47].innerHTML = '/';
        }
        }
}

//Declaration of the keyboard object
let myKeyboard = new Keyboard();

//
//MOUSE EVENT LISTENERS
//

//Simple event listeners

//Adds tabulator inside textarea
myKeyboard.tabKey.addEventListener('click', function() {
    myWritingZone.innerHTML += '\t';
})

//Adds space inside textarea
myKeyboard.spaceKey.addEventListener('click', function() {
    myWritingZone.innerHTML += ' ';
})

//Deletes last character inside textarea
myKeyboard.backSpaceKey.addEventListener('click', function() {
    myWritingZone.innerHTML = myWritingZone.innerHTML.slice(0, -1);
})

//Adds new line inside textarea
myKeyboard.returnKey.addEventListener('click', function() {
    myWritingZone.innerHTML += '\n';
})





//When shift is activated and you click outside the keys, shift gets disactivated
//document.addEventListener('click', function() {
//    if (shiftKeyAct || altGrKeyAct) {
//       myKeyboard.changeKeys(0);
//    }
//}, true)
//End of simple event listeners

//Writes clicked key inside textarea
for (let i = 0; i < myKeyboard.screenKeyboard.length; i++) {
    myKeyboard.screenKeyboard[i].addEventListener('click', function(e) {
        console.log(e.target.innerHTML)
        myWritingZone.innerHTML += e.target.innerHTML;
            if (bloMaKeyAct) {
                shiftKeyAct = false;
                return 0;
            }
            if (shiftKeyAct || altGrKeyAct) {
                myKeyboard.changeKeys(0);
            }
            
        /*else if (altGrKeyAct) {
            altGrKeyAct = false;
            changeKeys(0);
        }*/
    }, true)
}

//Shift only allow to write 1 UpperCase character
for (let i = 0; i < myKeyboard.shiftKeys.length; i++) {
    myKeyboard.shiftKeys[i].addEventListener('click', function() {
        shiftKeyAct = true;
        myKeyboard.changeKeys(1);
    }), true
}

//Blocks everything to upperCase
myKeyboard.bloqMayusKey.addEventListener('click', function() {
    if (bloMaKeyAct) {
        bloMaKeyAct = false;
        myKeyboard.bloqMayusKey.style.backgroundColor = '#30aebe';
        myKeyboard.changeKeys(0);
    }
    else {
        bloMaKeyAct = true;
        myKeyboard.bloqMayusKey.style.backgroundColor = '#16616d';
        myKeyboard.changeKeys(1);
    }
})

myKeyboard.altGrKey.addEventListener('click', function() {
    altGrKeyAct = true;
    myKeyboard.changeKeys(2);
})

//
//END MOUSE EVENT LISTENERS
//

//START KEYBOARD EVENT LISTENERS
// for (let i = 0; i < myKeyboard.screenKeyboard.length; i++) {
//     myKeyboard.screenKeyboard[i].addEventlistener('keydown', function(e) {
//         console.log(e.target);
//     })
// }
document.addEventListener('keydown', function(e) {
    console.log(e.key);
    //if (myKeyboard.normalKeys.includes(e.key.toLowerCase())) {
    //    myWritingZone.innerHTML += e.key;
    //}
    switch (e.key) {
        case 'tab': // Tab key
            e.preventDefault();
            myWritingZone.innerHTML += '\t';
            break;
    
        case 16:    // Any physical shift key
            myKeyboard.changeKeys(1);
            myKeyboard.shiftKeys[0].style.backgroundColor = '#16616d';
            myKeyboard.shiftKeys[1].style.backgroundColor = '#16616d';

            break;        

        case 20:    // Caps Lock key
            if (bloMaKeyAct) {
                bloMaKeyAct = false;
                myKeyboard.bloqMayusKey.style.backgroundColor = '#30aebe';
                myKeyboard.changeKeys(0);
            }
            else {
                bloMaKeyAct = true;
                myKeyboard.bloqMayusKey.style.backgroundColor = '#16616d';
                myKeyboard.changeKeys(1);
            }
            break;

        case 8: // Backspace key
            myWritingZone.innerHTML = myWritingZone.innerHTML.slice(0, -1);
            break;
        
        case 27:    // Esc key
            myKeyboard.changeKeys(0);
            myKeyboard.bloqMayusKey.style.backgroundColor = '#30aebe';
            break;
            
        case 32:    // Space key
            myWritingZone.innerHTML += ' ';
            break;

        case 13:    // Enter key
            myWritingZone.innerHTML += '\n';
            break;
        
        case 225:    // Alt gr key
            myKeyboard.changeKeys(2);
            break;

        case 18:    // Alt key
            break;
            
        default:    // Writes inside
        if (e.key != 'Dead') {
            if (bloMaKeyAct) {
                myWritingZone.innerHTML += e.key.toUpperCase();
            }
            else {
                myWritingZone.innerHTML += e.key.toLowerCase();
            }
        }
        break;

        }
        document.querySelector(`#item${e.key}`).style.backgroundColor = '#16616d';
    console.log(e.key);
})

document.addEventListener('keyup', function(e) {


    switch (e.key) {
        case 16:
            myKeyboard.changeKeys(0);
            myKeyboard.shiftKeys[0].style.backgroundColor = '#30aebe';
            myKeyboard.shiftKeys[1].style.backgroundColor = '#30aebe';
            break;

        case 225:    // Alt gr key
            myKeyboard.changeKeys(0);
            break;
    }

    document.querySelector(`#item${e.key}`).style.backgroundColor = '#30aebe';
})
//END KEYBOARD EVENT LISTENERS 