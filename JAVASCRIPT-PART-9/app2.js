let para1 = document.createElement("p");
para1.innerText = "Hii i am red!";
document.querySelector("body").prepend(para1);

para1.classList.add("red");

let head3 = document.createElement("h3");
head3.innerText = "I'm a blue h3!";
document.querySelector("body").prepend(head3);

head3.classList.add("blue");


let divout = document.createElement("div");
let head1 = document.createElement("h1");
let para2 = document.createElement("p");

head1.innerText = "I'm in a div";
para2.innerText = "ME TOO!";

divout.append(head1);
divout.append(para2);
divout.classList.add("box");

document.querySelector("body").prepend(divout);