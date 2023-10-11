let checkOne = document.getElementById('checkone')
let checkTwo = document.getElementById('checktwo')
let checkThree = document.getElementById('checkthree')
let checkFour = document.getElementById('checkfour')
let checkFive = document.getElementById('checkfive')
let checkSix = document.getElementById('checksix')
const copyPassword = document.querySelector("#copy-btn")
const finalPassword = document.querySelector("#final-password")



//Letters, Numbers, Special Characters

let bankOne = [
    "a", "A", "b", "B", "c", "C", "d", "D", "e", "E",
    "f", "F", "g", "G", "h", "H", "i", "I", "j", "J",
    "k", "K", "l", "L", "m", "M", "n", "N", "o", "O",
    "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T",
    "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y",
    "z", "Z", "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "0", "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "0", "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "0", "1", "2", "3", "4", "5", "6", "7", "8",
    "!", "@", "#", "$", "%", "&", "*", "=", "?", "@",
    "!", "@", "#", "$", "%", "&", "*", "=", "?", "@",
    "!", "@", "#", "$", "%", "&", "*", "=", "?", "@" 

]



//Letters, Numbers 

let bankTwo = [
    "a", "A", "b", "B", "c", "C", "d", "D", "e", "E",
    "f", "F", "g", "G", "h", "H", "i", "I", "j", "J",
    "k", "K", "l", "L", "m", "M", "n", "N", "o", "O",
    "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T",
    "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y",
    "z", "Z", "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "0", "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "0", "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "0", "1", "2", "3", "4", "5", "6", "7", "8"
]



//Letters, Special Characters

let bankThree = [
    "a", "A", "b", "B", "c", "C", "d", "D", "e", "E",
    "f", "F", "g", "G", "h", "H", "i", "I", "j", "J",
    "k", "K", "l", "L", "m", "M", "n", "N", "o", "O",
    "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T",
    "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y",
    "z", "Z", "!", "@", "#", "$", "%", "&", "*", "=", 
    "?", "@", "!", "@", "#", "$", "%", "&", "*", "="
]



//Numbers, Special Characters

let bankFour = [
    "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "0", "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "0", "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "0", "1", "2", "3", "4", "5", "6", "7", "8",
    "!", "@", "#", "$", "%", "&", "*", "=", "?", "@",
    "!", "@", "#", "$", "%", "&", "*", "=", "?", "@"
]



//Letters

let bankFive = [
    "a", "A", "b", "B", "c", "C", "d", "D", "e", "E",
    "f", "F", "g", "G", "h", "H", "i", "I", "j", "J",
    "k", "K", "l", "L", "m", "M", "n", "N", "o", "O",
    "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T",
    "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y",
    "z", "Z"
]



//Numbers

let bankSix = [
    "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "0", "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "0", "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "0", "1", "2", "3", "4", "5", "6", "7", "8"
]



//Special Characters

let bankSeven = [
    "!", "@", "#", "$", "%", "&", "*", "=", "?", "@",
    "!", "@", "#", "$", "%", "&", "*", "=", "?", "@",
    "!", "@", "#", "$", "%", "&", "*", "=", "?", "@",
    "!", "@", "#", "$", "%", "&", "*", "=", "?", "@" 
]


function generatePassword() {
    document.getElementById('final-password').value = ""
    document.getElementById('final-password').style.fontFamily = "varela"
    document.getElementById('final-password').style.fontSize = "12px"
    document.getElementById('final-password').style.color = "maroon"
    document.getElementById('final-password').style.fontWeight = "bold"

    //Ensures multiple boxes with the password length preference are not selected at once

    if (checkOne.checked && checkTwo.checked & checkThree.checked) {
        document.getElementById('final-password').value = "Error: You must select only 10, 20, or 30 digits"
    }
    else if (checkOne.checked && checkTwo.checked) {
        document.getElementById('final-password').value = "Error: You must select only 10 or 20 digits"
    }
    else if (checkOne.checked && checkThree.checked) {
        document.getElementById('final-password').value = "Error: You must select only 10 or 30 digits"
    }
    else if (checkTwo.checked && checkThree.checked) {
        document.getElementById('final-password').value = "Error: You must select only 20 or 30 digits"
    }



    //Ensures the user at least checks one box with the password length preference (10 digits, 20 digits, 30 digits)

    else if (checkFour.checked && !checkOne.checked && !checkTwo.checked && !checkThree.checked) {
        document.getElementById('final-password').value = "Error: You must select the number of digits"
    }
    else if (checkFive.checked && !checkOne.checked && !checkTwo.checked && !checkThree.checked) {
        document.getElementById('final-password').value = "Error: You must select the number of digits"
    }
    else if (checkSix.checked && !checkOne.checked && !checkTwo.checked && !checkThree.checked) {
        document.getElementById('final-password').value = "Error: You must select the number of digits"
    }



    //Ensures the user at least checks one box with the password preference (numbers, letters, symbols)

    else if (checkOne.checked && !checkFour.checked && !checkFive.checked && !checkSix.checked) {
        document.getElementById('final-password').value = "Error: You must select a preference"
    }
    else if (checkTwo.checked && !checkFour.checked && !checkFive.checked && !checkSix.checked) {
        document.getElementById('final-password').value = "Error: You must select a preference"
    }
    else if (checkThree.checked && !checkFour.checked && !checkFive.checked && !checkSix.checked) {
        document.getElementById('final-password').value = "Error: You must select a preference"
    }
    else {
        passwordOptions()
    }




    function passwordOptions() {

        document.getElementById('final-password').style.fontSize = "10.5px"
        document.getElementById('final-password').style.color = "black"
        document.getElementById('final-password').style.fontWeight = "lighter"

        //Letters, Numbers, Special Characters

        if (checkOne.checked && checkFour.checked && checkFive.checked && checkSix.checked) {
            i = 0
            for (i < 11; i < 10; i++) {
                random = Math.floor(Math.random() * bankOne.length)
                document.getElementById('final-password').value += bankOne[random]                
            }
            return
        }
        else if (checkTwo.checked && checkFour.checked && checkFive.checked && checkSix.checked) {
            i = 0
            for (i < 21; i < 20; i++) {
                random = Math.floor(Math.random() * bankOne.length)
                document.getElementById('final-password').value += bankOne[random]
            }
            return
        }
        else if (checkThree.checked && checkFour.checked && checkFive.checked && checkSix.checked) {
            i = 0
            for (i < 31; i < 30; i++) {
                random = Math.floor(Math.random() * bankOne.length)
                document.getElementById('final-password').value += bankOne[random]
            }
            return
        }



        //Letters, Numbers 

        else if (checkOne.checked && checkFour.checked && checkFive.checked) {
            i = 0
            for (i < 11; i < 10; i++) {
                random = Math.floor(Math.random() * bankTwo.length)
                document.getElementById('final-password').value += bankTwo[random]
            }
            return
        }
        else if (checkTwo.checked && checkFour.checked && checkFive.checked) {
            i = 0
            for (i < 21; i < 20; i++) {
                random = Math.floor(Math.random() * bankTwo.length)
                document.getElementById('final-password').value += bankTwo[random]
            }
            return
        }
        else if (checkThree.checked && checkFour.checked && checkFive.checked) {
            i = 0
            for (i < 31; i < 30; i++) {
                random = Math.floor(Math.random() * bankTwo.length)
                document.getElementById('final-password').value += bankTwo[random]
            }
            return
        }



        //Letters, Special Characters

        else if (checkOne.checked && checkFour.checked && checkSix.checked) {
            i = 0
            for (i < 11; i < 10; i++) {
                random = Math.floor(Math.random() * bankThree.length)
                document.getElementById('final-password').value += bankThree[random]
            }
            return
        }
        else if (checkTwo.checked && checkFour.checked && checkSix.checked) {
            i = 0
            for (i < 21; i < 20; i++) {
                random = Math.floor(Math.random() * bankThree.length)
                document.getElementById('final-password').value += bankThree[random]
            }
            return
        }
        else if (checkThree.checked && checkFour.checked && checkSix.checked) {
            i = 0
            for (i < 31; i < 30; i++) {
                random = Math.floor(Math.random() * bankThree.length)
                document.getElementById('final-password').value += bankThree[random]
            }
            return
        }



        //Numbers, Special Characters

        if (checkOne.checked && checkFive.checked && checkSix.checked) {
            i = 0
            for (i < 11; i < 10; i++) {
                random = Math.floor(Math.random() * bankFour.length)
                document.getElementById('final-password').value += bankFour[random]
            }
            return
        }
        else if (checkTwo.checked && checkFive.checked && checkSix.checked) {
            i = 0
            for (i < 21; i < 20; i++) {
                random = Math.floor(Math.random() * bankFour.length)
                document.getElementById('final-password').value += bankFour[random]
            }
            return
        }
        else if (checkThree.checked && checkFive.checked && checkSix.checked) {
            i = 0
            for (i < 31; i < 30; i++) {
                random = Math.floor(Math.random() * bankFour.length)
                document.getElementById('final-password').value += bankFour[random]
            }
            return
        }


        
        //Letters

        if (checkOne.checked && checkFour.checked) {
            i = 0
            for (i < 11; i < 10; i++) {
                random = Math.floor(Math.random() * bankFive.length)
                document.getElementById('final-password').value += bankFive[random]
            }
            return
        }
        else if (checkTwo.checked && checkFour.checked) {
            i = 0
            for (i < 21; i < 20; i++) {
                random = Math.floor(Math.random() * bankFive.length)
                document.getElementById('final-password').value += bankFive[random]
            }
            return
        }
        else if (checkThree.checked && checkFour.checked) {
            i = 0
            for (i < 31; i < 30; i++) {
                random = Math.floor(Math.random() * bankFive.length)
                document.getElementById('final-password').value += bankFive[random]
            }
            return
        }



        //Numbers

        if (checkOne.checked && checkFive.checked) {
            i = 0
            for (i < 11; i < 10; i++) {
                random = Math.floor(Math.random() * bankSix.length)
                document.getElementById('final-password').value += bankSix[random]
            }
            return
        }
        else if (checkTwo.checked && checkFive.checked) {
            i = 0
            for (i < 21; i < 20; i++) {
                random = Math.floor(Math.random() * bankSix.length)
                document.getElementById('final-password').value += bankSix[random]
            }
            return
        }
        else if (checkThree.checked && checkFive.checked) {
            i = 0
            for (i < 31; i < 30; i++) {
                random = Math.floor(Math.random() * bankSix.length)
                document.getElementById('final-password').value += bankSix[random]
            }
            return
        }
        


        //Special Characters

        if (checkOne.checked && checkSix.checked) {
            i = 0
            for (i < 11; i < 10; i++) {
                random = Math.floor(Math.random() * bankSeven.length)
                document.getElementById('final-password').value += bankSeven[random]
            }
            return
        }
        else if (checkTwo.checked && checkSix.checked) {
            i = 0
            for (i < 21; i < 20; i++) {
                random = Math.floor(Math.random() * bankSeven.length)
                document.getElementById('final-password').value += bankSeven[random]
            }
            return
        }
        else if (checkThree.checked && checkSix.checked) {
            i = 0
            for (i < 31; i < 30; i++) {
                random = Math.floor(Math.random() * bankSeven.length)
                document.getElementById('final-password').value += bankSeven[random]
            }
            return
        }

        else {
            return
        }
    }



//Copy password to clipboard

    copyPassword.addEventListener('click', async () => {
        await navigator.clipboard.writeText(finalPassword.value)
    })
}