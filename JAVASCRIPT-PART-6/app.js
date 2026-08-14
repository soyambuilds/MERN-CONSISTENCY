// function hello() {
//   console.log("hello");
// }

// // hello();
// // hello();
// // hello();
// // hello();
// // hello();
// // hello();

// function printName() {
//   console.log("apna college");
//   console.log("Soyam Suvam");
// }

// // printName();

// function print1to5() {
//   for (let i = 1; i <= 5; i++) {
//     console.log(i);
//   }
// }

// // print1to5();

// // function isAdult() {
// //   let age = 13;
// //   if (age >= 18) {
// //     console.log("Adult");
// //   } else {
// //     console.log("Not Adult");
// //   }
// // }

// // isAdult();

// function poem() {
//   console.log("Twinkle Twinkle");
//   console.log("Little Star");
//   console.log("How i Wonder");
//   console.log("What You are");
// }

// // poem();

// function rollDice() {
//   let diceNum = Math.floor(Math.random() * 6) + 1;
//   console.log(diceNum);
// }

// // rollDice();
// // rollDice();
// // rollDice();
// // rollDice();

// function printInfo(name, age) {
//   console.log(`${name}'s age is ${age}.`);
// }

// // printInfo("soyam", 21);
// // printInfo("soyammmm", 23);
// // printInfo("Karan");

// function printSum(num1, num2) {
//   let sum = num1 + num2;
//   console.log(sum);
// }

// // printSum(4, 5);
// // printSum(19, 15);
// // printSum(41, 15);

// function avgFinder(num1, num2, num3) {
//   console.log((num1 + num2 + num3) / 3);
// }

// // avgFinder(1, 2, 3);
// // avgFinder(100, 200, 300);

// function multiplicationTable(num1) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(num1 * i);
//   }
// }

// // multiplicationTable(22);
// // multiplicationTable(65);

// // function sum(a, b) {
// //   return a + b;
// // }

// // let s = sum(1, 5);
// // console.log(s);

// // console.log(sum(11, 17));

// // console.log(sum(sum(12, 13), 25));

// // function sum(a, b) {
// //   console.log("hello");
// //   console.log("hello");
// //   return a + b;
// //   console.log("hello2");
// //   console.log("hello2");
// // }

// // console.log(sum(1, 5));

// function isAdult(age) {
//   if (age >= 18) {
//     return "adult";
//   } else {
//     return "not adult";
//   }
//   console.log("bye bye");
// }

// // console.log(isAdult(9));

// function sumUptoN(num) {
//   let sum = 0;
//   for (let i = 0; i <= num; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }

// // console.log(sumUptoN(2));

// let arr = ["Soyam", "Builds", "Organization"];

// function stringMaker(arr) {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str = str + arr[i];
//   }
//   return str;
// }

// console.log(stringMaker(arr));

// let sum = 54; //Global Scope

// function calSum(a, b) {
//     let sum = a+b; //Function Scope
//     console.log(sum);
// }

// calSum(1, 2);
// console.log(sum);

// {
//    let a = 25;
// }

// console.log(a);

// for (let i = 1; i <= 5; i++) {
//   console.log(i); //block scope
// }

// console.log(i);

// let a = 25;

// if(a >= 18) {
//     let str = "adult";
//     console.log(str);
// }

// function outerFunc() {
//   let x = 5;
//   let y = 6;
//   function innerFunc() { //function scope
//     console.log(x);
//     console.log(y);
//     let a = 10;
//   }
//   console.log(a);
//   innerFunc();
// }

// outerFunc();

// innerFunc();
//hoisting

// let greet = "hello"; //Global Scope

// function changeGreet() {
//     let greet = "namaste"; //Function Scope
//     console.log(greet);
//     function innerGreet() {
//         console.log(greet); //Lexical Scope
//     }
// }

// console.log(greet);
// changeGreet();

// let name = "soyam";

// let sum = function(a, b) {
//     return a+b;
// }

// console.log(sum(1, 2));

// let hello = function() {
//     console.log("hello");
// }

// hello = function() {
//     console.log("namaste");
// }

// function multipleGreet(func, n) { //higher order function
//     for (let i = 1; i <= n; i++) {
//         func();
//     }
// }

// let greet = function() {
//     console.log("Hello");
// }

// // multipleGreet(greet, 26);
// multipleGreet(function() {console.log("Hariomm")}, 1000);

// function oddEvenFactory(request) {
//   if (request == "odd") {
//     return function (n) {
//       console.log(!(n % 2 == 0));
//     };
//   } else if (request == "even") {
//     return function (n) {
//       console.log(n % 2 == 0);
//     };
//   } else {
//     console.log("Wrong Request");
//   }
// }

// let request = "odd";

// const calculator = {
//   num: 55,
//   add: function (a, b) {
//     return a + b;
//   },
//   sub: function (a, b) {
//     return a - b;
//   },
//   mul: function (a, b) {
//     return a * b;
//   }
// };

const calculator = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  }
};
