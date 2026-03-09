"use strict";

const getImageElem = document.getElementById("imagePlaceholder");
const changeImgBtn = document.getElementById("changeImage");

changeImgBtn.addEventListener("click", () => {

  if (changeImgBtn.innerHTML == "After") {
    changeImgBtn.innerHTML = "Before";
    getImageElem.src = "img/after.png";
    
  } else {
    changeImgBtn.innerHTML = "After";
    getImageElem.src = "img/before.png";
  }
});
