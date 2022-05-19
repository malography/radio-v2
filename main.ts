/* radio-v2 */
/* Made with advanced micro:bit */

let radiov2group = 0;
let radiov2: any[] = []

let message: any = "radiov2 is awesome!"

let alphabetmode = false;
let currentletter = "a"
let capital = false;
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let capitalalphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let ourgroup = 0
function group() {radio.setGroup(ourgroup)};
let connected = 0

radiov2[0] = function (reciept: any)
{   
    let reciepttype = typeof(reciept)
    if (reciepttype == "string")
    {
        radio.sendString(reciept)
    }
    else if (reciepttype == "number")
    {   
        radio.sendNumber(reciept)
    }
    else if (reciepttype == "boolean")
    {
        radio.sendValue("radiov2:boolean", reciept)
    }
}

radiov2[1] = function (reciept: string)
{
    basic.showString(reciept)
}

input.onButtonPressed(Button.B, function(){
    if (alphabetmode)
    {
        capital = !capital;
        let letterposition = 0
        for (let position = 0; position < alphabet.length; position++) {
            if (alphabet[position] == currentletter) {
                letterposition = position
            }
        }
        currentletter = alphabet[letterposition]
        if (capital) {
            currentletter = capitalalphabet[letterposition]
        }
        basic.showString(currentletter)
    }
    else
    {
        
    }
})

input.onButtonPressed(Button.A, function () {
    if (alphabetmode) {
        let letterposition = 0
        for (let position = 0; position < alphabet.length; position++)
        {
            if (alphabet[position] == currentletter)
            {
                letterposition = position
            }
        }
        currentletter = alphabet[letterposition++]
        if (capital)
        {
            currentletter = capitalalphabet[letterposition++]
        }
        basic.showString(currentletter)
    }
    else {

    }
})

input.onButtonPressed(Button.AB, function(){
    alphabetmode = !alphabetmode;
})

input.onShake(function (){
    radiov2[0](message)
})

radio.onReceivedString(radiov2[1])