"use strict";
console.log("Welcome to my Practice Assignment of DataTypes");
// Example no.1 "STRING" //
let first_Name = "Fizza";
let last_Name = "Jawed";
console.log("My name is " + first_Name + "\n" + "My father name is " + last_Name);
// Example no.2 "NUMBER" //
let a = 7;
let b = 2;
// using arithmetic operator for equations //
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
// Example no.3 "BOOLEAN" //
let equation_Number = true;
let equation_Answer = false;
console.log(equation_Number);
console.log(equation_Answer);
// Example.4 "NULL" //
// null represents empty variable or values //
// let assigning a variable to Null //
let y = null;
console.log(y);
//another null example //
console.log(`age_One : ${null} \nage_Two : ${22}`);
// Example no.5 "UNDEFINED" //
let value = undefined;
console.log(value);
// another undefined example //
let colour = ["Blue", "Black", "White", "Purple", "Brown"];
console.log(colour[7]);
// Example no.6 "BIGINT" //
let big_Number = 90071992474099274000411n;
console.log(big_Number);
// another BigInt example //
let another_Number = BigInt("9001439809481980062411");
console.log(another_Number);
//another BigInt example //
let sum = big_Number + another_Number;
console.log(sum);
// Example no.7 "Symbol" //
let s_1 = Symbol();
console.log(s_1);
// unique values //
let s_2 = Symbol("Goodby");
let s_3 = Symbol("Goodby");
console.log(s_2 === s_3);
// another symbol example //
let age = Symbol(`age`);
let user = {
    name: "Fizza",
    class: "IT",
    [age]: 22
};
console.log(user);
