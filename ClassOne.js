const name = "Adisa Malik";
console.log(name);
const number = 23;
console.log(number);
console.log(name + " is a male who loves the number " + number);

const myName = "John"
const age = 30
const country = "Nigeria"
const maritalStatus = "Single"
const occupation = "Developer"

console.log("My name is " + myName + ", I am " + age + " years old" + ", I am from " + country + ", I think i am " + maritalStatus + " and i am a " + occupation);

function greet() {
    console.log("Hello there, wagwan");
}
greet();

function aoc() {
    const pie = 3.142;
    let r = 3;
    const AOC = pie * (r * r);
    console.log("The Area of the circle is " + AOC);
}
aoc();

// console.log(global);

const myInterval = setInterval(() => {
    console.log("I love to code");
}, 2000)

setTimeout(() => {
    console.log("I don't love to code");
    clearInterval(myInterval);
}, 5000);


//Assignment
// Create three functions, AOC, Area of a triangle, Area of a parallelogram
// Setinterval - no time and setTimeout (20000) and clear the interval 