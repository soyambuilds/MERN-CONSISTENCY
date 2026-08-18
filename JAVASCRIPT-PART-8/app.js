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