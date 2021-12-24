// Get All Element
const dataCard = document.querySelector(".data");
let i = 0;

setInterval(() => {
  dataCard.children[i].classList.add("hidden");
  i++;
  if (i === 3) {
    dataCard.style.backgroundColor = "#039be569";
    dataCard.children[0].style.color = "#0d47a1";
    dataCard.children[3].style.color = "#0d47a1";
  }
  if (i === 1) {
    dataCard.style.backgroundColor = "#a8a4a4";
    dataCard.children[0].style.color = "#000";
    dataCard.children[3].style.color = "#263238";
  }
  if (i === 2) {
    dataCard.style.backgroundColor = "#fff";
    dataCard.children[3].style.color = "#263238";
  }
  if (i >= dataCard.children.length - 1) {
    i = 0;
  }
  dataCard.children[i].classList.remove("hidden");
}, 6000);
