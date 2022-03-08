/* eslint-disable */
import "bootstrap";
import "./style.css";

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

// const body = document.querySelector("body");
const suitTop = document.querySelector(".suit.top");
const numberContainer = document.querySelector(".numbers");
const suitBottom = document.querySelector(".suit.bottom");

debugger;
window.onload = function() {
  numberContainer.innerHTML = numbers[numbersIndex];
  suitTop.innerHTML = suits[suitsIndex];
  suitBottom.innerHTML = suits[suitsIndex];
};
