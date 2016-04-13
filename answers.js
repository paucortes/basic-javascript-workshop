// This is the first comment


// This function takes a string and returns the first letter using .substring

function firstCharacter(anyString) {
    return anyString.substring(0,1);
};
// console.log(firstCharacter("My name is Pau"));

// This function takes a string and returns the last letter using .substring

function lastCharacter(anyString) {
    return anyString.substring(anyString.length -1,anyString.length);
};
// console.log(lastCharacter("My name is Pau"));
// console.log(lastCharacter("Whatever"));
// console.log(lastCharacter("33"));
// console.log(lastCharacter(""));

// This function takes a number and a string and returns the letter in the position indicated by the number. I added a message for when the number is larger than the length of the string

function charPosition(number, something) {
    if (number > something.length-1){
        console.log("The number is larger than the length of the string!");
    }
    return something.substring(number,number+1);
};
// console.log(charPosition(0,"Something something"));
// console.log(charPosition(7,"Something something"));
// console.log(charPosition(15,"Something something"));
// console.log(charPosition(9,"Something something"));
// console.log(charPosition(56,"Something something"));
// console.log(charPosition(0,""));

// This function takes 2 numbers and returns the result of adding them both
// If I pass a string and a number, it converts the number to a string
// If I pass a number and a boolean, it converts the boolean into a number

function add(number1, number2) {
    return number1 + number2;
};

console.log(add(3,6));
console.log(add(3,0));
console.log(add("6",3));
console.log(add("Pau",3));
console.log(add(3, true));