const myname= "Priyanshu"

const MyNumber= "253445453";

console.log(myname + MyNumber);

console.log(`My name is ${myname} and my phone number is ${MyNumber}`);

const gamename= new String('priyanshufc');

//console.log("Priyanshu".charAt(9));

console.log("priyanshu"[8]);

//The const declaration declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator, but if a constant is an object, its properties can be added, updated, or removed.

const a = "priyansffgfggfdhu"
const b = "sonidfgdfgdfg"
if (a < b) {
  console.log(`${a} is less than ${b}`);
} 
else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} 

else {
  console.log(`${a} and ${b} are equal.`);
}
const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));