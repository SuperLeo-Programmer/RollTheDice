var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomImage = "images/dice" + randomNumber1 + ".png"; 
var step1 = document.querySelectorAll("img")[0];
step1.setAttribute("src", randomImage)

var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomImage2 = "images/dice" + randomNumber2 + ".png"; 
var step1 = document.querySelectorAll("img")[1];
step1.setAttribute("src", randomImage2)

var number1 = "images/img1.png";
var number2 = "images/img2.png";
var number3 = "images/img3.png";
var number4 = "images/img4.png";
var number5 = "images/img5.png";
var number6 = "images/img6.png";

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
}

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}