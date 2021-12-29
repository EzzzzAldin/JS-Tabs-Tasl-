// Get All Element
const btns = document.querySelectorAll("button");
const headerSlide = document.querySelectorAll("h4");
const dataCard = document.querySelector(".data");

// Function Taps Slide
function toggel(first, second, third) {
  // Toggel Between Hide And Show
  if (!second.classList.contains("hidden")) second.classList.add("hidden");
  if (!third.classList.contains("hidden")) third.classList.add("hidden");
  first.classList.remove("hidden");
}

btns[0].addEventListener("click", () => {
  // Call Function Slide taps
  toggel(headerSlide[0], headerSlide[1], headerSlide[2]);
  //   Some Steyle
  dataCard.style.backgroundColor = "#039be569";
});

btns[1].addEventListener("click", () => {
  toggel(headerSlide[1], headerSlide[0], headerSlide[2]);
  dataCard.style.backgroundColor = "#a8a4a4";
  dataCard.children[1].style.color = "#000";
  dataCard.children[3].style.color = "#263238";
});

btns[2].addEventListener("click", () => {
  toggel(headerSlide[2], headerSlide[0], headerSlide[1]);
  dataCard.style.backgroundColor = "#fff";
  dataCard.children[2].style.color = "#a8a4a4";
  dataCard.children[3].style.color = "#263238";
});
