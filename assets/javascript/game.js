let losses = 0;
let wins = 0;
let score = 0;

let crystalOne = 0;
let crystalTwo = 0;
let crystalThree = 0;
let crystalFour = 0;
let myNumber = 0;
let luckyNumber = 0;

window.onload = function() {
  crystalOne = getCrystalValue();
  crystalTwo = getCrystalValue();
  crystalThree = getCrystalValue();
  crystalFour = getCrystalValue();
  luckyNumber = getLuckyNumber();
  myNumber = 0;
  setup();
};
function setup() {
  $("#luckyNumber").text(luckyNumber);
  $(".crystalOne").click(function() {
    myNumber += crystalOne;
    $("#myNumber").text(myNumber).done()
    handleLoss();
    handleWin();
  });
  $(".crystalTwo").click(function() {
    myNumber += crystalTwo;
    $("#myNumber").text(myNumber);
    handleLoss();
    handleWin();
  });
  $(".crystalThree").click(function() {
    myNumber += crystalThree;
    $("#myNumber").text(myNumber);
    handleLoss();
    handleWin();
  });
  $(".crystalFour").click(function() {
    myNumber += crystalFour;
    $("#myNumber").text(myNumber);
    handleLoss();
    handleWin();
  });
}
function getRandomNumberBeetween(min, max) {
  return Math.floor(Math.random() * Math.floor(max - min) + min);
}
function getLuckyNumber() {
  return getRandomNumberBeetween(19, 120);
}
function getCrystalValue() {
  return getRandomNumberBeetween(1, 12);
}

// function didLose() {
//     return myNumber > luckyNumber;
// }

function handleLoss() {
  if (myNumber > luckyNumber) {
    alert("Game Over!!!");
  }
}   
function handleWin() {
  if (myNumber == luckyNumber) {
    alert("Yay! you matched the winning number");
  }
}
      