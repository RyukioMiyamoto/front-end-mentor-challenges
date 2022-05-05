const ratingForm = document.querySelector(".rating__form");
const formSubmitted = document.querySelector(".rating__form--submitted");
const ratings = document.querySelector(".ratings");
const submitBtn = document.querySelector(".btn--submit");
const message = document.querySelector(".rating__message");
const finalRating = document.querySelector(".rating__final-rating");
let ratingValue = 0;

const handleChange = ({ target }) => {
  ratingValue = Number(target.getAttribute("data-rating"));
};

const handleSubmit = (e) => {
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
ratingForm.addEventListener("submit", handleSubmit);
