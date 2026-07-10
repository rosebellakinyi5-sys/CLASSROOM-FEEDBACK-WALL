"use strict";

/*
  BEGINNER DOM TESTING PROMPTS
  ----------------------------
  Open the project in the browser, complete script.js, then use the console.
  You can copy and adapt the examples below.
*/

// TEST 1: Does the form exist?
// console.assert(document.querySelector("#feedback-form"), "The feedback form should exist.");

// TEST 2: Are all three required buttons present?
// console.assert(document.querySelectorAll("button").length >= 3, "There should be at least three buttons.");

// TEST 3: After submitting valid data, is a feedback card created?
// console.assert(document.querySelectorAll(".feedback-card").length === 1, "One feedback card should be displayed.");

// TEST 4: Does anonymous feedback display Anonymous?
// console.assert(document.querySelector(".feedback-card h3").textContent === "Anonymous", "Anonymous feedback should hide the entered name.");

// TEST 5: Does a positive post have the correct class?
// console.assert(document.querySelector(".feedback-card--positive"), "Positive feedback should use the positive class.");

// TEST 6: After clicking Clear Feedback, are there zero cards?
// console.assert(document.querySelectorAll(".feedback-card").length === 0, "All feedback cards should be removed.");
