import { Console, log } from "console";
import { eventNames } from "process";

console.log("Welcome to my Practice Assignment of DataTypes");

// Example no.1 "STRING" //

let first_Name : string = "Fizza";
let last_Name : string = "Jawed";
console.log("My name is " + first_Name + "\n" + "My father name is " + last_Name);

// Example no.2 "NUMBER" //

let a : number = 7;
let b : number = 2;
// using arithmetic operator for equations //
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);

// Example no.3 "BOOLEAN" //

let equation_Number : boolean = true;
let equation_Answer : boolean = false;
console.log(equation_Number);
console.log(equation_Answer);

// Example.4 "NULL" //
// null represents empty variable or values //

// let assigning a variable to Null //
let y: null = null;
console.log(y);

//another null example //
console.log(`age_One : ${null} \nage_Two : ${22}`);

// Example no.5 "UNDEFINED" //

let value : undefined = undefined;
console.log(value);

// another undefined example //
let colour : string[] =["Blue", "Black", "White", "Purple", "Brown" ];
console.log(colour[7]);

// Example no.6 "BIGINT" //

let big_Number : bigint = 90071992474099274000411n;
console.log(big_Number);

// another BigInt example //

let another_Number = BigInt("9001439809481980062411");
console.log(another_Number);

//another BigInt example //

let sum : bigint = big_Number + another_Number;
console.log(sum);

// Example no.7 "Symbol" //

let s_1 : symbol = Symbol();
console.log(s_1);

// unique values //
let s_2 : symbol = Symbol("Goodby"); 
let s_3 : symbol = Symbol("Goodby");
console.log(s_2 === s_3);

// another symbol example //

let age : symbol = Symbol(`age`);
let user ={
    name : "Fizza" ,
    class : "IT" ,
    [age] : 22
}

console.log(user);














 

