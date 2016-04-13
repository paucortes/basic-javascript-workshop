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

// This function takes a number and a string and returns the letter in the position indicated by the number. I added a message for when the number is larger than the length of the string

function charPosition(number, something) {
    if (number > something.length-1){
        console.log("The number is larger than the length of the string!");
    }
    return something.substring(number,number+1);
}
// console.log(charPosition(0,"Something something"));
// console.log(charPosition(7,"Something something"));
// console.log(charPosition(15,"Something something"));
// console.log(charPosition(9,"Something something"));
// console.log(charPosition(56,"Something something"));
// console.log(charPosition(0,""));

// This function takes 2 numbers and returns the result of adding them
// If I pass a string and a number, it converts the number to a string
// If I pass a number and a boolean, it converts the boolean into a number

function add(number1, number2) {
    return number1 + number2;
}

// console.log(add(3,6));
// console.log(add(3,0));
// console.log(add("6",3));
// console.log(add("Pau",3));
// console.log(add(3, true));

// This function takes 2 numbers and returns the result of multiplying them
// If I pass a number string and a number, it converts the number string to a number
// If I pass a string and a number, it returs not a number
// If I pass a number and a boolean, it converts the boolean into a number

function multiply(number1, number2) {
    return number1 * number2;
}

// console.log(multiply(3,6));
// console.log(multiply(3,0));
// console.log(multiply("7",3));
// console.log(multiply("Pau",3));
// console.log(multiply(3, true));

// This function takes two numbers and a string
// If the string is ‘add’, it returns the sum of the numbers
// If the string is ‘subtract’, it returns the difference
// If the string is ‘mult’, it returns the product
// If the string is ‘div’, it returns the ratio
// Otherwise it returns 0

function multiOperator(string, number1, number2) {
    if (string === "add") {
        return number1 + number2;
    }
    if (string === "substract") {
        return number1 - number2;
    }
    if (string === "mult") {
        return number1 * number2;
    }
    if (string === "div") {
        return number1 / number2;
    }
    else {
        return 0;
    }
}

// console.log(multiOperator("add", 5, 7));
// console.log(multiOperator("substract", 5, 7));
// console.log(multiOperator("mult", 5, 7));
// console.log(multiOperator("div", 5, 7));
// console.log(multiOperator("something else", 5, 7));

// This function takes a string and a number, and returns the string repeated that many number of times

function stringRepeater(number, text) {
    var i = 0;
    while (i<number) {
        i++;
        console.log(text);
    }
}

// stringRepeater(5,"It's working");
// stringRepeater(2,"Two more times");
// stringRepeater(4,"And four more");

// This function takes a string and returns the reverse of that string

function reverseString(text) {
    return text.split("").reverse().join("");
}

// console.log(reverseString("See if this works"));
// console.log(reverseString("Something else"));
// console.log(reverseString(""));

// This function takes a number and returns its factorial. Negative numbers return an error

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// console.log(factorial(6));
// console.log(factorial(3));
// console.log(factorial(25));

// This function takes a phrase, and returns the longest word in that phrase
// If the phrase contains more than one such word, it returns the first occurrence

function longestWord(phrase) {
    var separatedWords = phrase.split(" ");
    var longest = 0;
    var word;
    for (var i = 0; i<separatedWords.length; i++) {
        if (longest < separatedWords[i].length) {
            longest = separatedWords[i].length;
            word = separatedWords[i];
        }
    }
    console.log(word);
}

longestWord("Otherwise it does not work it seems");
longestWord("Well, it seems to be working finally");