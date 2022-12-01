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

function isEven(input){
    return input % 2 === 0
}

