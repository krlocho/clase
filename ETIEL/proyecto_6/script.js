
var myWritingZone = document.querySelector('.text');
var shiftKeyAct = false;
var bloMaKeyAct = false;
var altGrKeyAct = false;


var Keyboard = function () {
    //defining normal keys
    this.normalKeys = ['º', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '\'', '¡',
        'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '`', '+',
        'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ', '´', 'ç',
        '<', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-'
    ],
    //defining special keys
    this.specialKeys = ['Tab', 'Enter', 'Backspace', 'Mayus', 'Enter', 'Shift', 'Ctrl', 'Alt', ' ', 'Alt Gr', 'fn', 'Win',]
    //defining keys that are changed when you press altgr
    this.altGrFirstRow = ['\\', '|', '@', '#', '~', '½', '¬', '{', '[', ']', '}', '(', ')'],
    //defining keys that are changed when you press shift
    this.shiftFirstRow = ['ª', '!', '"', '·', '$', '%', '&', '/', '(', ')', '=', '?', '¿', 'backspace']
    //queryselectors
    this.screenKeyboard = document.querySelectorAll('.keys');
    this.tabKey = document.querySelector('.tab');
    this.spaceKey = document.querySelector('.space');
    this.backSpaceKey = document.querySelector('.backspace');
    this.returnKey = document.querySelector('.enter');
    this.bloqMayusKey = document.querySelector('.mayus');
    this.shiftKeys = document.querySelectorAll('.shift');
    this.altGrKey = document.querySelector('.altgr');

    //canging the keys
    this.changeKeys = function (val) {
        switch (val) {
            case 'normal': //Normal state of the keyboard
                shiftKeyAct = false;
                bloMaKeyAct = false;
                altGrKeyAct = false;
                for (let i = 0; i < this.screenKeyboard.length; i++) {
                    this.screenKeyboard[i].innerHTML = this.normalKeys[i];
                }
                break;
            case 'shift': //Switches to shift mode
            //changing the first row
                for (let i = 0; i < 13; i++) {
                    this.screenKeyboard[i].innerHTML = this.shiftFirstRow[i];
                }
            //switch to mayus
                for (let i = 13; i < this.screenKeyboard.length; i++) {
                    this.screenKeyboard[i].innerHTML = this.normalKeys[i].toUpperCase();
                }
             //changing the normal keys just counting the keys and changig 
                this.screenKeyboard[37].innerHTML = '>';
                this.screenKeyboard[23].innerHTML = '^';
                this.screenKeyboard[24].innerHTML = '*';
                this.screenKeyboard[35].innerHTML = '¨';
                this.screenKeyboard[45].innerHTML = ';';
                this.screenKeyboard[46].innerHTML = ':';
                this.screenKeyboard[47].innerHTML = '_';
                break;
            case 'alt': //Switches to alt mode
                for (let i = 0; i < 13; i++) {
                    this.screenKeyboard[i].innerHTML = this.altGrFirstRow[i];
                }

                 //changing the normal keys just counting the keys and changig 
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

//creating an object
let myKeyboard = new Keyboard();


//Writting special keys in the textarea
//Adds tab
myKeyboard.tabKey.addEventListener('click', function () {
    myWritingZone.innerHTML += '\t';
})

//Adds space 
myKeyboard.spaceKey.addEventListener('click', function () {
    myWritingZone.innerHTML += ' ';
})

//Deletes last word
myKeyboard.backSpaceKey.addEventListener('click', function () {
    myWritingZone.innerHTML = myWritingZone.innerHTML.slice(0, -1);
})

//Adds new line
myKeyboard.returnKey.addEventListener('click', function () {
    myWritingZone.innerHTML += '\n';
})







//Writes clicked key inside textarea
for (let i = 0; i < myKeyboard.screenKeyboard.length; i++) {
    myKeyboard.screenKeyboard[i].addEventListener('click', function (e) {
        console.log(e.target.innerHTML)
        myWritingZone.innerHTML += e.target.innerHTML;
        if (bloMaKeyAct) {
            shiftKeyAct = false;
            return 0;
        }
        if (shiftKeyAct || altGrKeyAct) {
            myKeyboard.changeKeys('normal');
        }


    })
}

//Shift only allow to write 1 shift character
for (let i = 0; i < myKeyboard.shiftKeys.length; i++) {
    myKeyboard.shiftKeys[i].addEventListener('click', function () {
        shiftKeyAct = true;
        myKeyboard.changeKeys('shift');
    })
}

//Blocks everything to upperCase
myKeyboard.bloqMayusKey.addEventListener('click', function () {
    if (bloMaKeyAct) {
        bloMaKeyAct = false;
        myKeyboard.bloqMayusKey.style.backgroundColor = '#D9BDAD';
        myKeyboard.changeKeys('normal');
    } else {
        bloMaKeyAct = true;
        myKeyboard.bloqMayusKey.style.backgroundColor = '#D95E52';
        myKeyboard.changeKeys('shift');
    }
})

myKeyboard.altGrKey.addEventListener('click', function () {
    altGrKeyAct = true;
    myKeyboard.changeKeys('alt');
})

