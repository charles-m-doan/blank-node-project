import sum from "./sum";

let a = 5;
let b = 37;
let c = sum(a, b);
console.log("Hello World");
console.log(a + " + " + b + " = " + c + " the meaning of life.");

const body = document.getElementsByTagName("body")[0];
const heading1 = document.createElement("h1");
heading1.textContent = "Hello World";

const heading2 = document.createElement("h2");
heading2.textContent = a + " + " + b + " = " + c + " the meaning of life.";

body.appendChild(heading1);
body.appendChild(heading2);
