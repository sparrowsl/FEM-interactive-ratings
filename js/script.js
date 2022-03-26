"use strict";

const rateNumbers = document.querySelectorAll(".rating-numbers li");
const submitButton = document.querySelector(".form-submit");
const thanksModal = document.querySelector(".thanks-modal");
let rateDisplayMessage = document.querySelector(".rating-display");
let selectedRate = 0;

rateNumbers.forEach((number) => {
  number.addEventListener("click", () => {
    // Convert the string to number
    selectedRate = Number(number.textContent);

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
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  // Show modal if a number was choosen
  if (selectedRate) {
    rateDisplayMessage.textContent = `You selected ${selectedRate} out of 5`;
    thanksModal.classList.add("modal-open");
  }
});
