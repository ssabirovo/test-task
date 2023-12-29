let navabar = document.getElementById("navabar");
let searcBtn = document.getElementById("searcBtnMobile");
let xMark = document.getElementById("xMark");
let logo = document.getElementById("logo");
let hamIcon = document.getElementById("hamIcon");
let lawIcon = document.getElementById("lawIcon");

searcBtn.addEventListener("click", () => {
  activeSearchBtn();
});
xMark.addEventListener("click", () => {
  activeSearchBtn();
});

let activeSearchBtn = () => {
  //   logo.classList.toggle("hidden");
  //   hamIcon.classList.toggle("hidden");
  //   lawIcon.classList.toggle("hidden");
  //   navbarMobile.classList.toggle("open");
  navabar.classList.toggle("seaechActive");
};
