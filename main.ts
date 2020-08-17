
let decodedLetter =""

//RECEIVER
radio.onReceivedString(function (receivedString) {
    //checking for matches
    //a
    if (receivedString==".-") {
        decodedLetter = "A"
    }
    //b
    else if (receivedString=="-...") {
        decodedLetter = "B"
    }
    //c
     else if (receivedString=="-.-.") {
        decodedLetter = "C"
    }
    //d
     else if (receivedString=="-..") {
        decodedLetter = "D"
    }
    //e
     else if (receivedString==".") {
        decodedLetter = "E"
    }
    //f
     else if (receivedString=="..-.") {
        decodedLetter = "F"
    }
    //g
     else if (receivedString=="--.") {
        decodedLetter = "G"
    }
    //h
     else if (receivedString=="....") {
        decodedLetter = "H"
    }
    //i
     else if (receivedString=="..") {
        decodedLetter = "I"
    }
    //j
     else if (receivedString==".---") {
        decodedLetter = "J"
    }
    //k
     else if (receivedString=="-.-") {
        decodedLetter = "K"
    }
    //l
     else if (receivedString==".-..") {
        decodedLetter = "L"
    }
    //m
     else if (receivedString=="--") {
        decodedLetter = "M"
    }
    //n
     else if (receivedString=="-.") {
        decodedLetter = "N"
    }
    //o
     else if (receivedString=="---") {
        decodedLetter = "O"
    }
    //p
     else if (receivedString==".--.") {
        decodedLetter = "P"
    }
    //q
     else if (receivedString=="--.-") {
        decodedLetter = "Q"
    }
    //r
     else if (receivedString==".-.") {
        decodedLetter = "R"
    }
    //s
     else if (receivedString=="...") {
        decodedLetter = "S"
    }
    //t
     else if (receivedString=="-") {
        decodedLetter = "T"
    }
    //u
     else if (receivedString=="..-") {
        decodedLetter = "U"
    }
    //v
     else if (receivedString=="...-") {
        decodedLetter = "V"
    }
    //w
     else if (receivedString==".--") {
        decodedLetter = "W"
    }
    //x
     else if (receivedString=="-..-") {
        decodedLetter = "X"
    }
    //y
     else if (receivedString=="-.--") {
        decodedLetter = "Y"
    }
    //z
     else if (receivedString=="--..") {
        decodedLetter = "Z"
    }
    //1
     else if (receivedString==".----") {
        decodedLetter = "1"
    }
    //2
     else if (receivedString=="..---") {
        decodedLetter = "2"
    }
    //3
     else if (receivedString=="...--") {
        decodedLetter = "3"
    }
    //4
     else if (receivedString=="....-") {
        decodedLetter = "4"
    }
    //5
     else if (receivedString==".....") {
        decodedLetter = "5"
    }
    //6
     else if (receivedString=="-....") {
        decodedLetter = "6"
    }
    //7
     else if (receivedString=="--...") {
        decodedLetter = "7"
    }
    //8
     else if (receivedString=="---..") {
        decodedLetter = "8"
    }
    //9
     else if (receivedString=="----.") {
        decodedLetter = "9"
    }
    //0
    else if (receivedString=="-----") {
        decodedLetter = "0"
    }
    //anything else
    else {
        decodedLetter = "Invalid"
    }
    //
    basic.showString(decodedLetter);
    radio.sendString(decodedLetter);

})