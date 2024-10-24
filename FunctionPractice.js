//name is the parameter
//("Hello, " + name + "!") is the argument
//return invokes the function making it "happen"
function hello(name) {
    return ("Hello, " + name + "!")
}

//this is a greeting function to say Hello! after a name is input.
console.log (hello("Person"));

//this is a similar program but named hello with a capital H
//here i learned that you cant have 2 same functions with the
//same name in one program
function Hello(name) {
    return console.log("Hello, " + name + "!")
}

Hello("Josh");

//the syntax is critical for the program to run properly
function gm(name) {
    return console.log("Good Morning, " + name + " How are you?")
}

(gm("Bri"));

//everything has to be in the correct place
//this function finds the sum of two numbers
function sum(Number1, Number2) {
    return console.log(Number1 + Number2);
}

sum(1, 2)

//this function finds the difference of two numbers
function dif(Num1, Num2) {
    return console.log(Num1 - Num2);
}

dif(1, 1)

dif(1, 10)

//this function finds the quotient of 2 numbers
function quot(Num1, Num2) {
    return console.log(Num1 / Num2)
}

quot(2, 2)

quot(10, 2)

//this function will find the product of two numbers that are input
function prod(Num1, Num2) {
    return console.log(Num1 * Num2)
}

prod(2, 10)

prod(50, 50)

//this function will return the remainder(mod) of two numbers
function mod(Num1, Num2) {
    return console.log(Num1 % Num2)
}

mod(11, 10)

mod(100, 51)

//this function uses mod to check and strict equality 
//to check if a number is even
function iseven(num) {
    return console.log(num % 2 === 0);
}

iseven(4)

iseven(5)

iseven(1001)

//this function uses modulars and boolean not equal to check if a number
//is odd or not
function isodd(num) {
    return console.log(num % 2 !== 0)
}

isodd(1)

isodd(2)

isodd(1000)

//this function increments a number 1
function plusOne(Num) {
    return console.log(++Num)
}

plusOne(1)

//this function decrements a number by 1
function minusOne(Num) {
    return console.log(--Num)
}

minusOne(1)

minusOne(100)