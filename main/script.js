// Select all the required elements from the document.
const button = document.querySelector(".submit-btn");
const card = document.querySelector(".card-container");
const ratings = document.querySelectorAll(".circle");

// Declaring a variable that will store the user's rating.
let rating = 0;

// Declaring the flipping function
function flipCard() {
  card.classList.toggle("flip");
}

// Declaring a function that will print the rating once card is flipped.
function addScore() {
  rating = this.innerHTML;
}

//Listen for clicks on the ratings buttons
ratings.forEach((rating) =>
rating.addEventListener("click", function(rating) {
    this.style.backgroundColor = "hsl(217, 12%, 63%)";
    this.style.color = "white"
    addScore();
})
);

//Listen for clicks on the ratings buttons
ratings.forEach((rating) =>
  rating.addEventListener("click", addScore));

// Listen for clicks on the submit button
button.addEventListener("click", () => {
  document.querySelector(
    ".rating"
  ).innerHTML = `You selected ${rating} out of 5`;
  flipCard();
});
