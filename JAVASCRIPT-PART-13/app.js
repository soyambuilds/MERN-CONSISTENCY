// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//   let fact = await getFacts();
// //   console.log(fact);

//   let p = document.querySelector("#result");
//   p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//   try {
//     let res = await axios.get(url);
//     return res.data.fact;
//   } catch (e) {
//     return "No fact Found";
//   }
// }

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country);
  let collegesArr = await getColleges(country);
  show(collegesArr);
});

function show(collegesArr) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (college of collegesArr) {
    console.log(college.name);

    let li = document.createElement("li");
    li.innerText = college.name;
    list.appendChild(li);
  }
}

async function getColleges(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (e) {
    console.log("error : ", e);
    return [];
  }
}
