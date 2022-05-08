const allRatings = document.querySelectorAll(".rating__radio");
const ratingForm = document.querySelector(".rating__form");
const formSubmitted = document.querySelector(".rating__form--submitted");
const submitBtn = document.querySelector(".btn--submit");
const message = document.querySelector(".rating__message");
const finalRating = document.querySelector(".rating__final-rating");
let ratingValue;
let keypressed = false;

const handleChange = function (e) {
  // Changes the rating value on change, either by keyboard or mouse
  ratingValue = e.target.getAttribute("data-rating");
  // If the rating was selected through keyboard applies focused state styling (primary color) instead of selected state styling (neutral color)
  return keypressed ? null : e.target.blur();
};

const handleFocus = function (e) {
  // Checks if there's a rating value on focus. If there isn't, sets it to the focused element value and checks the input
  if (!ratingValue) {
    ratingValue = document.activeElement.getAttribute("data-rating");
    // Only applies focused styling if rating was selected through keyboard ( left arrow, right arrow or tab)
    e.target.checked = keypressed ? true : false;
  } else {
    ratingValue = ratingValue;
  }
};

const handleKeydown = function (e) {
  // Prevents use of up and down arrow
  if (e.keyCode === 38 || e.keyCode === 40) e.preventDefault();
  // Submits the form by pressing the space bar
  else if (e.keyCode === 32) handleSubmit(e);
  else {
    // Checks for keyboard navigation ( left arrow, right arrow or tab)
    keypressed =
      e.keyCode === 39 || e.keyCode === 37 || e.keyCode === 9 ? true : false;
    setTimeout(() => {
      keypressed = false;
    }, 100);
  }
};

const handleSubmit = function (e) {
  e.preventDefault();
  if (!ratingValue) {
    message.classList.add("show");
    submitBtn.disabled = true;
    setTimeout(() => {
      message.classList.remove("show");
      submitBtn.disabled = false;
    }, 1000);
    return null;
  }

  finalRating.innerText = `You selected ${ratingValue} out of 5`;
  ratingForm.classList.add("invisible");
  formSubmitted.classList.add("visible");
};

// Resets selected rating on Firefox
allRatings.forEach((rating) => (rating.checked = false));
ratingForm.addEventListener("change", handleChange);
ratingForm.addEventListener("focusin", handleFocus);
document.addEventListener("keydown", handleKeydown);
ratingForm.addEventListener("submit", handleSubmit);
