// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 10; i >= 1; i = i-3) {
//     console.log(i);
// }

// console.log(i);

// for(let i = 19; i >= 1; i-=2){
//     console.log(i);
// }

// for (let i = 2; i <= 10; i+=2) {
//     console.log(i);
// }

// for(let i = 1000; i >=2; i-=2) {
//     console.log(i);
// }

// for(let i = 1; i >= 0; i++) {
//     console.log(i);
// }

// for(let i = 6; i <= 60; i+=6) {
//     console.log(i);
// }

// let num = prompt("Enter your number Here :");
// num = parseInt(num);

// for(let i = num; i <= num*10; i = i + num) {
//     console.log(i);
// }

// for(let i = 1; i <= 3; i++) { //outer
//     console.log(`Outer loop ${i}`);
//     for(let j = 1; j <= 3; j++) { //inner
//         console.log(j);
//     }
// }

// let i = 1;
// while(i <= 15) {
//     console.log(i);
//     i++;
// }

// let i = 15;
// while(i >= 1) {
//     console.log(i);
//     i--;
// }

// let i = 1;
// while(i <= 20) {
//     console.log(i);
//     i+=2;
// }

// const favMovie = "Kalki";
// let guess = prompt("Guess The Movie Name :");

// while((guess != favMovie) && (guess != "quit")) {
//     guess = prompt("Wrong ! Enter The Movie Name Again !");
// }

// if(guess == favMovie) {
//     console.log("Congrats! You got it..")
// }
// else {
//     console.log("You Quit");
// }

// let i = 1;
// while(i <= 5) {
//     if(i == 3) {
//         break;
//     }
//     console.log(i);
//     i++;
// }
// console.log("We used break at 3");

// const favMovie = "Kalki";
// let guess = prompt("Guess The Movie Name :");

// while (guess != favMovie) {
//   if (guess == "quit") {
//     console.log("You Quit");
//     break;
//   }
//   guess = prompt("Wrong ! Enter The Movie Name Again !");
// }

// if (guess == favMovie) {
//   console.log("Congrats! You got it..");
// }

// let fruits = ["mango", "apple", "banana", "litchi", "orange", "lemon"];
// fruits.push("pineapple");

// for(let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

// for(let i = fruits.length-1; i >= 0; i--) {
//   console.log(i, fruits[i]);
// }

// let heros = [
//   ["ironman", "spiderman", "thor"],
//   ["superman", "wonder woman", "flash"],
// ];

// for (let i = 0; i < heros.length; i++) {
//   console.log(`List #${i}`);
//   for (let j = 0; j < heros[i].length; j++) {
//     console.log(`j=${j}, ${heros[i][j]}`);
//   }
// }

// let students = [["aman", 90], ["shradha", 95], ["soyam", 99]];

// for(let i = 0; i < students.length; i++) {
//   console.log(`info of student #${i+1}`);
//   for(let j = 0; j < students[i].length; j++) {
//     console.log(students[i][j]);
//   }
// }

// let fruits = ["mango", "apple", "banana", "orange", "pineapple"];

// for(fruit of fruits) {
//   console.log(fruit);
// }

// for(char of "apnacollege") {
//   console.log(char);
// }

// let heros = [
//   ["superman", "batman", "wonder woman"],
//   ["spiderman", "ironman", "thor"],
// ];

// // for(list of heros) {
// //   console.log(list);
// // }

// for(list of heros) {
//   for(hero of list) {
//     console.log(hero);
//   }
// }
