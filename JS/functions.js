function greet() {
    console.log("Hello, welcome to functions.")
}

greet();

//Function Declarations

function declaration() {
    console.log("Hello, I am a function declaration.")
}

declaration();

//Function Expressions
const expression = function () {
    console.log("Hello, I am a function expression.");
}

expression();

//Function Hoisting.  programming terms: Declaration - creating function or variable Invocation - calling or executing a function or method

//Function Parameters

function greetings(name) {
    console.log(`Hello ${name}!`)
}

greetings("Ron")
greetings("Regel")

//with return value
function sum(a, b) {
    return a+b
}

console.log(sum(5, 6))

let result = sum(7,8)
console.log(result)

//global and local scope
let globalVar = "I am a global variable."

function localScope() {
    let localVar = "I am a local variable"
    console.log(globalVar)
    console.log(localVar)
}

localScope()

console.log(globalVar);

function newSum(a,b) {
    let c = a+b;
    return c;
}

console.log(newSum(2,3))

//Higher-order function
function calculation(operation, num1, num2) {
    return operation(num1, num2)
}

function addition(a,b) {
    return a+b;
}

function substraction(a,b) {
    return a -b;
}

let Sum = calculation(addition, 6, 5)
let Diff = calculation(substraction, 9, 3)

console.log(`The answer to addition is ${Sum}`);
console.log(`The answer to subtraction is ${Diff}`);
