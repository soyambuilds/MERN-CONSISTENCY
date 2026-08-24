// function hello () {
//     console.log("hello");
// }

// function demo() {
//     hello();
// }

// demo();

// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a+b); //synchronous nature

// setTimeout(() => {
//   console.log("apnacollege");
// }, 2000);
// //Asynchronous Nature
// setTimeout(() => {
//   console.log("hello world!");
// }, 2000);

// console.log("hello...");

// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("blue", 1000, () => {
//         changeColor("aqua", 1000);
//       });
//     });
//   });
// });

//callback nesting => callback hell

// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "apna college",
//   () => {
//     console.log("success : your data was saved");
//     savetoDb(
//       "hello world",
//       () => {
//         console.log("success2 : data2 saved");
//         savetoDb(
//           "shradha",
//           () => {
//             console.log("success3 : data3 saved");
//           },
//           () => {
//             console.log("failure3: weak connection");
//           },
//         );
//       },
//       () => {
//         console.log("failure2: weak connection");
//       },
//     );
//   },
//   () => {
//     console.log("failure : weak connection. data not saved");
//   },
// );

// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("success: data was saved");
//     } else {
//       reject("failure: weak connection");
//     }
//   });
// }

// let request = savetoDb("apna college"); //req = promise  object
// request
//   .then(() => {
//     console.log("promise was resolved");
//     console.log(request);
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//     console.log(request);
//   });

// savetoDb("apna college")
//   .then(() => {
//     console.log("data1 saved. promise was resolved.");
//     savetoDb("helloworld").then(() => {
//       console.log("data2 saved. promise was resolved");
//     });
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

// savetoDb("apna college")
//   .then(() => {
//     console.log("data1 saved");
//     return savetoDb("helloworld");
//   })
//   .then(() => {
//     console.log("data2 saved");
//     return savetoDb("shradha");
//   })
//   .then(() => {
//     console.log("data3 saved");
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

// savetoDb("apna college")
//   .then((result) => {
//     console.log("data1 saved");
//     console.log("result of promise: ", result);
//     return savetoDb("helloworld");
//   })
//   .then((result) => {
//     console.log("data2 saved");
//     console.log("result of promise: ", result);
//     return savetoDb("shradha");
//   })
//   .then((result) => {
//     console.log("data3 saved");
//     console.log("result of promise: ", result);
//   })
//   .catch((error) => {
//     console.log("promise was rejected");
//     console.log("error of promise: ", error);
//   });

// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("blue", 1000, () => {
//         changeColor("aqua", 1000);
//       });
//     });
//   });
// });

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed!");
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    console.log("red color was completed");
    return changeColor("orange", 1000);
  })
  .then(() => {
    console.log("orange color was completed");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("green color was completed");
    return changeColor("blue", 1000);
  })
  .then(() => {
    console.log("blue color was completed");
    return changeColor("aqua", 1000);
  })
  .then(() => {
    console.log("aqua color was completed");
  });

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("blue", 1000, () => {
//         changeColor("aqua", 1000);
//       });
//     });
//   });
// });
