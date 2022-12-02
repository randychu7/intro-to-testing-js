// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
helloWorld();

function sayHello(input) {
    if (input === true) {
        return "Hello, World!"
    } else if (input === undefined) {
        return "Hello, World!";
    } else if (input === false) {
        return "Hello, World!";
    } else {
        return `Hello, ${input}!`;
    }
}
function isFive(input){
if (typeof input === 'boolean'){
    return true;
}else if(input == 5){
    return true;
}else{
    return false;
}
}

function isEven(input) {
    if (input % 2 !== 0||input === '') {
        return false;
    } else {
        return true;
    }
}

// console.log(isEven(''));

// function isVowel(input){
//     // input = input.toLowerCase();
//     // console.log(input);
//     if(input == 'A'||'E'||'I'||'O'||'U'){
//         return true;
//     }else{
//         return false;
//     }
// }
//
// console.log(isVowel('a'));

function isVowel(x) {

    var result;

    result = x == "A" || x == "E" || x == "I" || x == "O" || x == "U" || x == "a"
    return result;
}

// console.log(isVowel("a"));

function add (input1, input2) {
    if (typeof (input1 || input2) == 'string') {
        return NaN;
    } else {
        return parseFloat(input1 + input2);
    }
}
console.log(add(2, 'apple'));

