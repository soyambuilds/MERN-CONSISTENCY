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

let delBtns = document.querySelectorAll(".delete");

for(delBtn of delBtns) {
    delBtn.addEventListener("Click", function() {
        console.log("element deleted");
    })
}