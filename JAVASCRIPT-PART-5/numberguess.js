const maxLim = prompt("Enter Your Maximum Limit :");
console.log(`Choose The Number Between 1 to ${maxLim}`);

const num = Math.floor(Math.random() * maxLim) + 1;
let guess = prompt("Number Generated! Now Start Guessing...");

while (guess != num) {
  if (guess == "quit") {
    console.log("You Quit the Game");
    break;
  } else {
    if (guess < num) {
      guess = prompt("You Choose Wrong! Try Higher Number");
    } else {
      guess = prompt("You Choose Wrong! Try Lower Number");
    }
  }
}

if (guess == num) {
  console.log(`Congrats! You got it , Your Number was ${num}`);
}

console.log("Game Closed");
