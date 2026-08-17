// const student = {
//   name: "shradha",
//   age: 23,
//   eng: 95,
//   math: 93,
//   phy: 97,
//   getAvg() {
//     console.log(this);
//     let avg = (this.eng + this.math + this.phy) / 3;
//     console.log(`${this.name} got avg marks = ${avg}`);
//   }
// };

// function getAvg() {
//     console.log(this);
//   }

// console.log(a);

// console.log("hello");
// console.log("hello");
// console.log("hello");

// // let a = 5;
// try {
//   console.log(a);
// } catch(err) {
//   console.log("error found a is not defined");
//   console.log(err);
// }

// console.log("hello 2");
// console.log("hello 2");
// console.log("hello 2");
// console.log("hello 2");
// console.log("hello 2");

// const sum = (a, b) => {
//   console.log(a + b);
// };

// const cube = (n) => {
//   return n * n * n;
// };

// const power = (a, b) => {
//   return a ** b;
// };

// const hello = () => {
//   console.log("hello soyam");
// }

// const mul = (a, b) => a * b;

// const sum = (a, b) => a + b;

// console.log("Hii there");

// setTimeout( () => {
//   console.log("Apna College");
// }, 4000);

// console.log("Welcome to");
// console.log("Welcome to");
// console.log("Welcome to");
// console.log("Welcome to");
// console.log("Welcome to");

// console.log("Hii there!");

// let id = setInterval( () => {
//   console.log("Apna College")
// }, 2000);

// console.log(id);

// let id2 = setInterval( () => {
//   console.log("Hello World")
// }, 3000);

// console.log(id2);

// const student = {
//   name: "aman",
//   marks: 95,
//   prop: this, //global scope
//   getName: function () {
//     console.log(this);
//     return this.name;
//   },
//   getMarks: () => {
//     console.log(this); //parent's scope -> window
//     return this.marks;
//   },
//   getInfo1: function () {
//     setTimeout( ()=> {
//       console.log(this); //student
//     }, 2000);
//   },
//   getInfo2: function () {
//     setTimeout( function() {
//       console.log(this); //window
//     }, 2000);
//   },
// };

// const a = 5; //global scope

// const square = (n) => n * n;

// console.log(square(5));

let id = setInterval(() => {
  console.log("Hello World");
}, 2000);

setTimeout(() => {
  clearInterval(id);
  console.log("Clear Interval ran");
}, 10000);
