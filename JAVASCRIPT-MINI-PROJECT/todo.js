let button = document.querySelector("button");
let ul = document.querySelector("ul");
let task = document.querySelector("input");

button.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = task.value;

  let delBtn = document.createElement("Button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  task.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }
});

// let delBtns = document.querySelectorAll(".delete");

// for (delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//   });
// }
