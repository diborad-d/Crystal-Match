let randomNumber;
// let a  = crystalOne;
// let b = crystalTwo;
// let c = crystalThree;
// let d = crystalFour;
let losses = 0;
let wins = 0;
let score = 0;

window.onload = function() {
  //   setup();
  setup();
};
function setup() {
  $("#luckyNumber").text(getLuckyNumber());
  $(".crystalOne").click(function() {
      $("#myNumber").text(getCrystalOne());
  });
  
}
function getRandomNumberBeetween(min, max){
    return Math.floor(Math.random() * Math.floor(max - min) + min);
}
function getLuckyNumber() {
  return getRandomNumberBeetween(19, 120);
}
function getCrystalOne(){
    return getRandomNumberBeetween(1, 12);
}


   
 