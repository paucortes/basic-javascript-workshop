// This is the first comment


// This function takes a string and returns the first letter using .substring

function firstCharacter(anyString) {
    return anyString.substring(0,1);
}
// console.log(firstCharacter("My name is Pau"));

// This function takes a string and returns the last letter using .substring

function lastCharacter(anyString) {
    return anyString.substring(anyString.length -1,anyString.length);
}
// console.log(lastCharacter("My name is Pau"));
// console.log(lastCharacter("Whatever"));
// console.log(lastCharacter("33"));
// console.log(lastCharacter(""));

// Write a function that takes a string and a number, and returns the character at the position represented by the number. The indexing of number should start at 0. Test your function on a few inputs, including the empty string
function charPosition(number, something) {
    if (number > something.length-1){
        console.log("The number is larger than the length of the string!");
    }
    return something.substring(number,number+1);
}
console.log(charPosition(0,"Something something"));
console.log(charPosition(7,"Something something"));
console.log(charPosition(15,"Something something"));
console.log(charPosition(9,"Something something"));
console.log(charPosition(56,"Something something"));
console.log(charPosition(0,""));
