const form = document.querySelector("form");
const input = document.querySelector(".footer__input");
const errorContainer = document.querySelector(".footer__error-message");
let errorFlag = false;

function formValidate(event) {
  event.preventDefault();

  if (emailTest(input)) {
    errorFlag = true;
    errorContainer.innerHTML = "Enter the correct e-mail address";
    input.style.color = "rgb(184, 43, 43)";
  } else {
    errorFlag = false;
    errorContainer.innerHTML = "";
    input.style.color = "";
    alert("Succefully submitted");
    form.reset();
  }
}

function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

function removeError() {
  if (errorFlag == true) {
    input.style.color = "";
    errorContainer.innerHTML = "";
  }
}

form.addEventListener("submit", formValidate);
input.addEventListener("input", removeError);
