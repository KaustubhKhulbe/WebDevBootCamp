var roll1 =  Math.floor(Math.random() * 6 + 1);
var roll2 =  Math.floor(Math.random() * 6 + 1);

document.querySelector(".img1").src = "images/dice" + roll1 + ".png";
document.querySelector(".img2").src = "images/dice" + roll2 + ".png";

var h1 = document.querySelector("h1")

if(roll1 > roll2) h1.textContent = "🚩 Player 1 Wins!";
else if(roll2 > roll1) h1.textContent = "Player 2 Wins! 🚩";
else h1.textContent = "Draw"