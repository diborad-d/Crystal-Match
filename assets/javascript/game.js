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
  crystalOne = getCrystalOne();
  crystalTwo = getCrystalTwo();
  crystalThree = getCrystalThree();
  crystalFour = getCrystalFour();
   
  myNumber = 0;
};
function setup() {
  $("#luckyNumber").text(getLuckyNumber());
  $(".crystalOne").click(function() {
    myNumber += crystalOne;
    $("#myNumber").text(myNumber);
  });
  $(".crystalTwo").click(function() {
    myNumber += crystalTwo;
    $("#myNumber").text(myNumber);
  });
  $(".crystalThree").click(function() {
    myNumber += crystalThree;
    $("#myNumber").text(myNumber);
  });
  $(".crystalFour").click(function() {
    myNumber += crystalFour;
    $("#myNumber").text(myNumber);
  });
}
function getRandomNumberBeetween(min, max) {
  return Math.floor(Math.random() * Math.floor(max - min) + min);
}
function getLuckyNumber() {
  return getRandomNumberBeetween(19, 120);
}
function getCrystalOne() {
  return getRandomNumberBeetween(1, 12);
}
function getCrystalTwo() {
  return getRandomNumberBeetween(1, 12);
}
function getCrystalThree() {
  return getRandomNumberBeetween(1, 12);
}
function getCrystalFour() {
  return getRandomNumberBeetween(1, 12);
}

