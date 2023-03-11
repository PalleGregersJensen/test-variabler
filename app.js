"use strict"
console.log("Javascript kører!")

const bool = true;
console.log(bool);
const num = 41;
console.log(num);
const str = "Peter";
console.log(str);
const obj = {
    cats: 2,
    cars: 1
};
console.log(obj);
const nothing = null;
console.log(nothing);
let undf; 
console.log(undf);
const symbol = Symbol("symbol");
console.log(symbol);

let fullName = "Alicia Keys";

console.log(`hello ${1}`);
console.log(`hello ${"name"}`);
console.log(`hello ${fullName}`);


// Omdan tekst til tal
let string = "1234";
console.log(Number(string));

// Omdan tal til tekst
let number = 1234;
console.log(String(number));

// Omdan tal til boolean - true
let boolean = 1234;
console.log(Boolean(boolean));

console.log(Number("    123     "));
console.log(Number("123z"));
console.log(Number(true));
console.log(Number(false));