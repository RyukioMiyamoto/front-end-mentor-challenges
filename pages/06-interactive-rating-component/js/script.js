const ratingForm = document.querySelector(".rating__form");
const formSubmitted = document.querySelector(".rating__form--submitted");
const ratings = document.querySelector(".ratings");
const allRatings = document.querySelectorAll(".ratings__circle");
const submitBtn = document.querySelector(".btn--submit");
const message = document.querySelector(".rating__message");
const finalRating = document.querySelector(".rating__final-rating");
let ratingValue = 0;
let keypressed = false;

const handleChange = function (e) {
  ratingValue = e.target.getAttribute("data-rating");
  if (keypressed) return;
  e.target.blur();
};

const handleKeydown = function (e) {
  keypressed = e.keyCode === 39 || e.keyCode === 37 ? true : false;
  setTimeout(() => {
    keypressed = false;
  }, 100);
};

const handleSubmit = function (e) {
  e.preventDefault();
  if (ratingValue === 0) {
    message.classList.add("show");
    submitBtn.disabled = true;
    setTimeout(() => {
      message.classList.remove("show");
      submitBtn.disabled = false;
    }, 1000);
    return null;
  }
  ratingForm.classList.add("invisible");
  finalRating.innerText = `You selected ${ratingValue} out of 5`;
  setTimeout(() => {
    ratingForm.style.display = "none";
    formSubmitted.classList.add("visible");
  }, 250);
};

ratingForm.addEventListener("change", handleChange);
ratingForm.addEventListener("keydown", handleKeydown);
ratingForm.addEventListener("submit", handleSubmit);
