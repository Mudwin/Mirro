// Обозначения
const modal = document.querySelector(".header__cart-modal");
const openButton = document.querySelector(".header__cart");
const closeButton = document.querySelector(".header__cart-modal-close");
const background = document.querySelector(".modal__root");

// Флаг открытого/закрытого окна
let openFlag = false;

// Открытие/закрытие окна
function showModal() {
  modal.classList.remove("none");
  background.classList.add("visible");
}

function showModalandBlockScroll() {
  showModal();
  document.body.classList.add("scroll-block");
  openFlag = true;
}

function closeModal() {
  modal.classList.add("none");
  background.classList.remove("visible");
}

function closeModalandReturnScroll() {
  closeModal();
  document.body.classList.remove("scroll-block");
  openFlag = false;
}

function closeOnOverlayClick(event) {
  if (background.classList.contains("visible")) {
    closeModalandReturnScroll();
  } else {
    return;
  }
}

function closeOnEsc(event) {
  if (event.key == "Escape" && openFlag == true) {
    closeModalandReturnScroll();
  } else {
    return;
  }
}

// Обработчики
openButton.addEventListener("click", showModalandBlockScroll);
closeButton.addEventListener("click", closeModalandReturnScroll);
background.addEventListener("click", closeOnOverlayClick);
document.addEventListener("keydown", closeOnEsc);
