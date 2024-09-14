// Элементы
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const sliderLine = document.querySelector(".slider-line");
const sliderItems = document.querySelectorAll(".store__packs-item");
const sliderItem = Array.from(sliderItems)[0];

// Метрики
let sliderContainerWidth = document.querySelector(
  ".store__slider-container"
).offsetWidth;
let sliderItemWidth = sliderItem.offsetWidth;
let sliderItemMargin = parseInt(getComputedStyle(sliderItem).marginRight);
let sliderItemFullWidth = sliderItemWidth + sliderItemMargin;
let sliderOffset = 0;

function getSliderLineWidth() {
  let sliderLineWidth = 0;
  for (let node of sliderItems) {
    sliderLineWidth += node.offsetWidth;
    sliderLineWidth += parseInt(getComputedStyle(node).marginRight);
  }

  sliderLineWidth -= sliderItems[0].offsetWidth * 3;
  sliderLineWidth -= 12;

  return sliderLineWidth;
}

let sliderLineWidth = getSliderLineWidth();

// Обработчики
rightArrow.addEventListener("click", () => {
  /*  alert(`${sliderOffset}, ${sliderItemWidth}, ${sliderLineWidth}`); */
  if (sliderOffset + sliderItemWidth > sliderLineWidth) {
    return;
  } else {
    sliderOffset += sliderItemFullWidth;
    checkArrow(leftArrow);
    sliderLine.style.right = `${sliderOffset}px`;
    checkArrow(rightArrow);
  }
});

leftArrow.addEventListener("click", () => {
  if (sliderOffset - sliderItemWidth < 0) {
    return;
  } else {
    sliderOffset -= sliderItemFullWidth;
    checkArrow(rightArrow);
    sliderLine.style.right = `${sliderOffset}px`;
    checkArrow(leftArrow);
  }
});

// Исчезание стрелок
function checkArrow(arrow) {
  if (arrow == rightArrow) {
    if (sliderOffset + sliderItemWidth > sliderLineWidth) {
      arrow.classList.add("hidden");
    } else {
      arrow.classList.remove("hidden");
    }
  } else {
    if (sliderOffset == 0) {
      arrow.classList.add("hidden");
    } else {
      arrow.classList.remove("hidden");
    }
  }
}
