// let arr = [1, 2, 3, 4, 5];

// // let print = function (el) {
// //   console.log(el);
// // };

// // arr.forEach(print);

// arr.forEach(function (el) {
//   console.log(el);
// });

// arr.forEach((el) => {
//   console.log(el);
// });

// let arr = [
//   {
//     name: "aman",
//     mark: 99,
//   },
//   {
//     name: "alu",
//     mark: 96,
//   },
//   {
//     name: "amyansu",
//     mark: 94,
//   },
// ];

// arr.forEach( (student) => {
//     console.log(student.mark);
// });

// let num = [1, 2, 3, 4];

// let double = num.map((el) => {
//   return el * el;
// });

// let students = [
//   {
//     name: "aman",
//     mark: 99,
//   },
//   {
//     name: "alu",
//     mark: 96,
//   },
//   {
//     name: "amyansu",
//     mark: 94,
//   },
// ];

// let gpa = students.map((el) => {
//   return el.mark / 10;
// });

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let ans = nums.filter((el) => {
//   return el < 5 ; //even -> true, odd -> false
// });

// let arr = [12, 4, 45, 34, 9, 35, 9999];

// let max = -1;

// for(let i = 0; i <= arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }

// console.log(max);

// let maxVal = arr.reduce( (max, el) => {
//     if(max < el) {
//         return el;
//     } else {
//         return max;
//     }
// })

// console.log(maxVal);

// let num = [10, 20, 30, 40, 44];

// let ans = num.every((el) => {
//   return el % 10 == 0;
// });

// console.log(ans);

// function getMinimum(num) {
//   let minVal = num.reduce((min, el) => {
//     if (min > el) {
//       return el;
//     } else {
//       return min;
//     }
//   });

//   console.log(minVal);
// }

// let num = [10, 20, 30, 40, 44, 2,1];

// getMinimum(num);

// function sum(a, b = 2) {
//   return a + b;
// }

// function sum(a = 2, b) {
//   return a + b;
// }

// console.log(sum(1, 3));

// console.log(sum(3)); a = 3 and b = undefined .

// let arr = [1, 2, 3, 12, 35];
// let newArr = [...arr];

// let chars = [..."Soyam"];

// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];

// let nums = [...odd, ...even];
// let nums2 = [...even, ...odd];

// const data = {
//   emali: "soyam@gmail.com",
//   password: "abcd",
// };

// const dataCopy = {...data, id: 123, country: "india"};

// let arr = [1, 2, 3, 4, 5]; //val
// let obj1 = {...arr}; // key -> val

// let obj = {..."Soyam"};

// function sum(...args) {
//   for (let i = 0; i < args.length; i++) {
//     console.log("You gave us: ", args[i]);
//   }
// }

// function min(a, b, c, d) {
//   console.log(arguments);
// }

// function min() {
//   console.log(arguments);
//   console.log(arguments.length);
//   arguments.push(1);
// }

// function sum(...args) {
//   return args.reduce((sum, el) => sum + el);
// }

// function min(...args) {
//   return args.reduce((min, el) => {
//     if (min > el) {
//       return el;
//     } else {
//       return min;
//     }
//   });
// }

// let names = ["tony", "spider", "hulk", "shadow", "abc", "xyz", "pyq"];
// // let winner = names[0];
// // let runnerup = names[1];
// // let secondRunnerup = names[2];

// // let [winner, runnerup, secondRunnerup] = names;

// // let [winner, runnerup, others] = names;
// let [winner, runnerup, ...others] = names;

const student = {
  name: "karan",
  age: 14,
  class: 9,
  subjects: ["hindi", "english", "math", "science"],
  username: "karan@123",
  password: "abcd",
//   city: "Pune",
};

// let username = student.username;
// let password = student.password;

let {username: user, password: pass, city: loc = "Mumbai"} = student;