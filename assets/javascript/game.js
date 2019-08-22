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
  setup();
  $("#luckyNumber").text(luckyNumber);
  $(".crystalOne").click(function() {
    onCrystalClicked(crystalOne);
  });
  $(".crystalTwo").click(function() {
    onCrystalClicked(crystalTwo);
  });
  $(".crystalThree").click(function() {
    onCrystalClicked(crystalThree);
  });
  $(".crystalFour").click(function() {
    onCrystalClicked(crystalFour);
  });
  $("#startOver").click(function() {
    setup();
  });
};
function setup() {
  crystalOne = getCrystalValue();
  crystalTwo = getCrystalValue();
  crystalThree = getCrystalValue();
  crystalFour = getCrystalValue();
  luckyNumber = getLuckyNumber();
  myNumber = 0;
  $("#luckyNumber").text(luckyNumber);
  $("#losses").text("Losses: " + losses);
  $("#wins").text("Wins: " + wins);
  $("#myNumber").text(myNumber);
  $("#startOver").prop("disabled", true);
}

function onCrystalClicked(crystalValue) {
  myNumber += crystalValue;
  $("#myNumber").text(myNumber);
  handleLoss();
  handleWin();
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
function handleLoss() {
  if (myNumber > luckyNumber) {
    losses++;
    alert("You lost! Better luck next time!");
    $("#startOver").prop("disabled", false);
  }
}
function handleWin() {
  if (myNumber == luckyNumber) {
    wins++;
    alert("Yay! you matched the winning number!");
    $("#startOver").prop("disabled", false);
  }
}
