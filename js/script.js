"use strict";

const rateNumbers = document.querySelectorAll(".rating-numbers li");
const submitButton = document.querySelector("button");

let selectedRate = 0;

rateNumbers.forEach((number) => {
  number.addEventListener("click", () => {
    selectedRate = number.textContent;

    // Remove style from other numbers
    rateNumbers.forEach((number) => {
      // If the number has the styling, then remove it
      if (number.classList.contains("selected-rate")) {
        number.classList.remove("selected-rate");
      }
    });

    // Add the style to the current selected number
    number.classList.add("selected-rate");

  });
});

// Display the thank-you page if rate was valid
submitButton.addEventListener("click", () => {
  console.log(selectedRate);
});
