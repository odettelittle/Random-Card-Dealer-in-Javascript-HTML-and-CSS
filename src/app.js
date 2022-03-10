/* eslint-disable */
import "bootstrap";
import "./styles.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

const getRandom = (min, max) => {
  const randomNumber = Math.random();
  const integer = randomNumber * (max - min) + min;
  return Math.floor(integer);
};

let suitsIndex = getRandom(0, suits.length - 1);
let numbersIndex = getRandom(0, numbers.length - 1);

const suitsValue = "&spades;";
const numberValue = 3;

// const body = document.querySelector("body");
const suitTop = document.querySelector(".suit.top");
const numberContainer = document.querySelector(".numbers");
const suitBottom = document.querySelector(".suit.bottom");
const suitsToChange = ["&hearts;", "&diams"];
const colorShouldBeRed = suitsToChange.includes(suitsValue);

numberContainer.innerHTML = numberValue;
suitTop.innerHTML = suitsValue;
suitBottom.innerHTML = suitsValue;

if (colorShouldBeRed) {
  suitTop.classList.add("red");
  suitBottom.classList.add("red");
}

window.onload = function() {
  numberContainer.innerHTML = numbers[numbersIndex];
  suitTop.innerHTML = suits[suitsIndex];
  suitBottom.innerHTML = suits[suitsIndex];
};
