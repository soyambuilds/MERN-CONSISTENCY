// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//   alert("button was clicked");
// };

// function sayHello() {
//   alert("Hello");
// }

// btn.onclick = sayHello;

// let btns = document.querySelectorAll("button");

// // for (btn of btns) {
// //   btn.onclick = sayHello;
// //   btn.onclick = sayName;
// //   btn.onmouseenter = function () {
// //     console.log("You entered a button");
// //   };
// //   console.dir(btn);
// // }

// for (btn of btns) {
// //   btn.addEventListener("click", sayHello);
// //   btn.addEventListener("click", sayName);
// //   btn.addEventListener("dblclick", function () {
// //     console.log("You double clicked the button");
// //   });
//   btn.addEventListener("mouseenter", function () {
//     console.log("You double clicked the button");
//   });
// }

// function sayHello() {
//   alert("Hello");
// }

// function sayName() {
//   alert("apnacollege");
// }

// let p = document.querySelector("p");

// p.addEventListener("click", function () {
//   console.log("paragraph was clicked !");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function () {
//   console.log("Mouse Inside Box");
// });

// let btn = document.querySelector("button");
// let para = document.querySelector("p");
// let head1 = document.querySelector("h1");
// let head3 = document.querySelector("h3");

// function changeColor() {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", changeColor);
// para.addEventListener("click", changeColor);
// head1.addEventListener("click", changeColor);
// head3.addEventListener("click", changeColor);

// let btn = document.querySelector("button");

// btn.addEventListener("click", function (e) {
//   console.log(e);
//   console.log("Button Clicked");
// });

// btn.addEventListener("dblclick", function (e) {
//   console.log(e);
//   console.log("Button Clicked");
// });

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function (event) {
//   //   console.log("Key = ", event.key);
//   console.log("Code = ", event.code); //ArrowUp, ArrowDown, ArrowLeft, ArrowRight
//   if (event.code == "KeyU") {
//     console.log("Character moves forward");
//   } else if (event.code == "KeyD") {
//     console.log("Character moves backward");
//   } else if (event.code == "KeyR") {
//     console.log("Character moves Right");
//   } else if (event.code == "KeyL") {
//     console.log("Character moves left");
//   }
// });

//   console.log("Keyboard is pressed");
// inp.addEventListener("keyup", function () {
//     console.log("Keyboard is released");
// })

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   alert("Form Submitted");
// });

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   let user = this.elements[0]; //form.elements[0]
//   let pass = this.elements[1]; //form.elements[1]

//   console.dir(user);
//   console.dir(user.value);
//   console.dir(pass);
//   console.dir(pass.value);

//   alert(`Hi ${user.value}, your password is set to ${pass.value}`);

//   // console.dir(form);
// });

let form = document.querySelector("form");
let user = document.querySelector("#user");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

user.addEventListener("change", function () {
  console.log("change event");
  console.log("final value = ", this.value);
});

user.addEventListener("input", function () {
  console.log("input event");
  console.log("final value = ", this.value);
});
