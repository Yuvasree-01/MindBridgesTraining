
function mathOperation(n1,n2){
    var n1=document.getElementById("n1");
    var n2=document.getElementById("n2");
    var box1=Number(n1.value)
    var box2=Number(n2.value)

    var add=box1+box2;
    sum.textContent=add;

    var sub=box1-box2;
    diff.textContent=sub;

    var mul=box1*box2;
    prod.textContent=mul;

    var divide=box1/box2;
    division.textContent=divide;

}
function logicalOperation(num){
    const a=document.getElementById("num");
    const digit=Number(a.value);

    let result;

    if(digit>10 && digit%2==0){
        result="Yes! "+digit + " is greater than 10 and also divisible by 2";
    }
    else if(digit>10 && digit%2!=0){
        result="No! "+digit+" is  greater than 10  but not divisible by 2"
    }
    else if(digit<=10 && digit%2==0){
        result="No! "+digit+" is  not greater than 10 but divisible by 2"
    }
    else{
        result="No! "+digit+" is   not greater than 10  and  not divisible by 2"

    }
    
    document.getElementById("logical").innerText= `Result: ${result}`;
}

function ternary(val){
    const a=document.getElementById("val");
    const digit=Number(a.value);

    var result=digit>=0 ? true : false;

    if(result){
        result=digit+" is Positive Number"
    }
    else{
        result=digit+" is Negative Number"

    }
    document.getElementById("P/N").innerText= `Result: ${result}`;

}

function EvenOdd(numberInput){
    const a=document.getElementById("numberInput");
    const digit=Number(a.value);
    
    var result=digit%2==0 ? true : false;
    if(result){
        result=digit+" is Even Number"
    }
    else{
        result=digit+" is Odd Number"

    }
    document.getElementById("evenOddResult").innerText= `Result: ${result}`;
}

function Grade(mark){
    const a=document.getElementById("mark");
    const gm=Number(a.value);
    var result;
    
    switch(true){
        case gm>=90 && gm<=100:
            result=gm+" holds Grade A";
            break;
        
        case gm>=80 && gm<90:
            result=gm+" holds Grade B";
            break;

        case gm>=70 && gm<80:
            result=gm+" holds Grade C";
            break;

        case gm>=0 && gm<70:
            result="Oops!,you failed.Better Luck next time..";
            break;
        
        default:
            result="Invalid Marks";

    }
    document.getElementById("ExamResult").innerText= `Result: ${result}`;

}

function printMultiples(Multiply) {
    var num = document.getElementById("Multiply")
    var base = Number(num.value);
    let result="";
    for (let i = 1; i <= 10; i++) {
        let mul=i*base;
        result += `${base} * ${i} = ${mul} <br>`;
    }
    document.getElementById("tables").innerHTML = result;
}

function welcomeAlert() {
    alert("Welcome to my website!");
}

function userConfirmation() {
    const userChoice = confirm("Do you want to continue?");
    let result;
    if (userChoice) {
        result = "You chose to continue!";
    } else {
        result = "You canceled!";
    }
    document.getElementById("confirmationResult").innerText = result;
}

function promptForAge() {
    const age = prompt("Please enter your age:");
    let result;
    if (age >= 18) {
        result = "You are eligible!";
    } else {
        result = "You are not eligible.";
    }
    document.getElementById("ageResult").innerText = result;
}

function reverseString(inputString) {
    var inputElement = document.getElementById("inputString");
    var inputString = inputElement.value;

    let result;
    if (inputString.trim() === "") {
        result = "Please enter a valid string.";
    } else {
        result = inputString.split("").reverse().join("");
    }

    document.getElementById("reversedResult").innerText = `Result: ${result}`;
}

function countVowels(str) {
    var inputElement = document.getElementById("str");
    var inputString = inputElement.value.trim().toLowerCase();

    let result;
    if (inputString === "") {
        result = "Please enter a valid string.";
    } else {
        const vowels = inputString.match(/[aeiou]/g);
        const count = vowels ? vowels.length : 0;
        result = `The number of vowels in "${inputString}" is: ${count}`;
    }

    document.getElementById("vowelResult").innerText = `Result: ${result}`;
}

function checkPalindrome(String) {
    var inputElement = document.getElementById("String");
    var inputString = inputElement.value.trim();

    var result,reversedString;
    if (inputString === "") {
        result = "Please enter a valid string.";
    } 
    else {
        reversedString = inputString.split("").reverse().join("");
        if (inputString === reversedString) {
            result = inputString + " is a palindrome.";
        } else {
            result = inputString +" is not a palindrome.";
        }
    }
    document.getElementById("palindromeResult").innerText = `Result: ${result}`;
}


function DigitCount(count) {
    const inputElement = document.getElementById("count");
    let number = Number(inputElement.value);

    let result;
    if (isNaN(number) || inputElement.value.trim() === "") {
        result = "Please enter a valid number.";
    } else {
        number = Math.abs(number);
        let count = 0;

        
        while (number >= 1) {
            number = Math.floor(number / 10); 
            count++;
        }

        if (count === 0) count = 1; 

        result = `The number of digits is: ${count}`;
    }

    document.getElementById("digitCountResult").innerText = `Result: ${result}`;
}

function extractInitials() {
    const inputElement = document.getElementById("fullName");
    const fullName = inputElement.value.trim();

    let result;
    if (fullName === "") {
        result = "Please enter a valid name.";
    } else {
        const nameParts = fullName.split(" "); 
        const initials = nameParts
            .map(part => part.charAt(0).toUpperCase()) 
            .join(".");
        result = `Initials: ${initials}`;
    }

    document.getElementById("initialsResult").innerText = result;
}

function replaceWord() {
    const sentenceElement = document.getElementById("sentenceInput");
    const wordToReplaceElement = document.getElementById("wordToReplace");
    const newWordElement = document.getElementById("newWord");

    const sentence = sentenceElement.value.trim();
    const wordToReplace = wordToReplaceElement.value.trim();
    const newWord = newWordElement.value.trim();

    let result;

    if (sentence === "" || wordToReplace === "" || newWord === "") {
        result = "Please fill in all fields.";
    } else if (!sentence.includes(wordToReplace)) {
        result = `The word "${wordToReplace}" was not found in the sentence.`;
    } else {
        const updatedSentence = sentence.replace(wordToReplace, newWord);
        result = `Updated Sentence: ${updatedSentence}`;
    }

    document.getElementById("replaceResult").innerText = `Result: ${result}`;
}

function splitSentence(split) {
    const inputElement = document.getElementById("split");
    const sentence = inputElement.value.trim();

    let result;
    if (sentence === "") {
        result = "Please enter a valid sentence.";
    } else {
        const wordsArray = sentence.split(" ");
        result = `Words Array: ${JSON.stringify(wordsArray)}`;
    }

    document.getElementById("splitResult").innerText = result;
}

function removeSpaces() {
    const inputElement = document.getElementById("stringInput");
    const inputString = inputElement.value;

    let result;
    if (inputString.trim() === "") {
        result = "Please enter a valid string.";
    } else {
        const stringWithoutSpaces = inputString.replace(/\s+/g, ""); 
        result = `String without spaces: ${stringWithoutSpaces}`;
    }

    document.getElementById("removeSpacesResult").innerText = result;
}

function findCharacterFrequency(inputStr,inputChar) {
    const inputElement = document.getElementById("inputStr");
    const charElement = document.getElementById("inputChar");

    const inputString = inputElement.value.trim();
    const charToFind = charElement.value.trim();

    let result;
    if (inputString === "" || charToFind === "" || charToFind.length > 1) {
        result = "Please enter a valid string and a single character.";
    } else {
        let count = 0;

        for (let char of inputString) {
            if (char === charToFind) {
                count++;
            }
        }

        result = `The character "${charToFind}" appears ${count} times in the string.`;
    }

    document.getElementById("frequencyResult").innerText = result;
}

function calculateBMI() {
    const weight = prompt("Please enter your weight (in kg):");
    const height = prompt("Please enter your height (in meters):");

    const bmi = weight / (height * height);
    
    alert(`Your BMI is: ${bmi.toFixed(2)}`);
}


