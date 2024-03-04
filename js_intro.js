// JavaScript variables
// using var, let, const

// variables are containers for storing DataTransfer, we can declared a variable by using 
// let: for declaring block-scoped variables
// const: for declaring constant variables 

// variables names must start with either a letter, an underscore or the dollar sign
let a = 8;
a = String(a) // this will convert a into a string
typeof(a);

// NAN is called not a number
// null matlab kuch toh h but its of no value 
// undefined means that the variable has not been initialized yet

// JavaScript Operators
// assignment, arithmetic, comparison, logical, bitwise, string operators
// === - strict equal to (ekdum same hona chaiye like datatype as well)
// !=== - strict not equal to 

// JavaScript conditional statements
// if, else, else if, nested if else conditions, switch case
// ternary operator
// condition? expression1: expression2
// if the condition is true, expression1 is executed
// if the condition is false, expression2 is executed

// JavaScript loops
// for loop,for each loop,  while loop, do while loop
// continue and break control statements

// JavaScript arrays
let fruits = ["mango", "sweetlime", "orange", "grapes", "apple", "pineapple", "guavava", "promogrante"];
fruits.length();
methods - indexOf, includes, push, shift, unshift, sort, slice 
// the squre bracket is called the array literal

// using for each loops 
fruits.forEach(fruit => {
    console.log(fruit)
});

// JavaScript functions
// this is a normal function in JavaScript
function func1(parameter1, parameter2) {
    // something shit 
    return // more shit 
}

// anonymous functions in JavaScript
let num = function (parameter1, parameter2) {
    // random shit
    // usually used for callback functions
    return // more shit 
}

// eg - 
let square = function(num) {
    return (num*num)
}
console.log(square(5))

// nested functions
function addSquare(a, b) {
    const sq_a = square(a);
    const sq_b = square(b);
    const result = sq_a + sq_b;
    function square(num) {
        return num*num
    }
    return result;
}

// arrow function
// types - 
// 1. () => expression
// 2. (para1, para2) => expression
// 3. () => {statements}
// 4. (para1, para2) => {
//     statements
// }
const arrow_function = () => {
    console.log("sup dumb fuck")
}

// call back function
// one function passed as a parameter to another function
const calculate = (a, b, operation) => {
    return operation(a, b);
}

const addition = (a, b) => a+b
const result = calculate(10, 20, addition)
// addition ke baad parentheses nahi use karna warna voh function call hojayega pass nahi 

// dom manipulation
const para = document.createElement('p');
document.body.appendChild(para)

// event handlers
// onclick, onload, onmouseover, onmouseleave

// event listeners
// yeh sirf JavaScript me kaam kar sakta h

const box1 = document.getElementById('box1');
console.log(box1);
box1.addEventListener('click', () => {
    console.log("sup bois we using event listeners now");
})