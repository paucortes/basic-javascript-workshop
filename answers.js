// This is the first comment


// This function takes a string and returns the first letter using .substring

function firstCharacter(anyString) {
    return anyString.substring(0,1);
}
console.log(firstCharacter("My name is Pau"));

// This function takes a string and returns the last letter using .substring

function lastCharacter(anyString) {
    return anyString.substring(anyString.length -1,anyString.length);
}
console.log(lastCharacter("My name is Pau"));
console.log(lastCharacter("Whatever"));
console.log(lastCharacter("33"));
console.log(lastCharacter(""));

