// Get All Element
const btnHistory = document.getElementById("history");
const btnVision = document.getElementById("vision");
const btnGoals = document.getElementById("goals");
const historyInfo = document.getElementById("history-info");
const visionInfo = document.getElementById("vision-info");
const goalsInfo = document.getElementById("goals-info");
const dataCard = document.querySelector(".data");

// Function Taps Slide
function toggel(first, second, third) {
  // Toggel Between Hide And Show
  if (!second.classList.contains("hidden")) second.classList.add("hidden");
  if (!third.classList.contains("hidden")) third.classList.add("hidden");
  first.classList.remove("hidden");
}

btnHistory.addEventListener("click", () => {
  // Call Function Slide taps
  toggel(historyInfo, visionInfo, goalsInfo);
  //   Some Steyle
  dataCard.style.backgroundColor = "#039be569";
  dataCard.children[0].style.color = "#0d47a1";
  dataCard.children[3].style.color = "#0d47a1";
  dataCard.style.transition = "all 2s";
});

btnVision.addEventListener("click", () => {
  toggel(visionInfo, historyInfo, goalsInfo);
  dataCard.style.backgroundColor = "#a8a4a4";
  dataCard.children[0].style.color = "#0d47a1";
  dataCard.children[3].style.color = "#263238";
  dataCard.style.transition = "all 2s";
});

btnGoals.addEventListener("click", () => {
  toggel(goalsInfo, historyInfo, visionInfo);
  dataCard.style.backgroundColor = "#fff";
  dataCard.children[3].style.color = "#263238";
  dataCard.style.transition = "all 2s";
});
