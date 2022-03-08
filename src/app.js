/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const suits = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

const getRandom = (min, max) => {
  const randomNumber = Math.random();
  const integer = randomNumber * (min - max) + min;
  return Math.floor(integer);
};

let suitsIndex = getRandom(0, suits.length - 1);
let numberIndex = getRandom(0, numbers.length - 1);


const body = document.querySelector("body")
const suitTop = body.queryselector(".suit.top")
const numberContainer = body.document.querySelector(".number")
const suitBottom = body.querySelector(".suit.bottom")

numberContainer.innerHtml = numberIndex;
suitTop.innerHtml = suitsIndex ;
suitBottom.innerHtml = suitsIndex;