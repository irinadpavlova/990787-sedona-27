var link = document.querySelector(".button-search");
var popup = document.querySelector(".form-hotels");
var arrival = popup.querySelector("#arrival-date");
var departure = popup.querySelector("#departure-date");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal");
  arrival.focus();
  if (popup.classList.contains("modal")) {
    popup.classList.add("modal-show");
  }
});

popup.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value) {
    evt.preventDefault();
    console.log("Нужно ввести дату заезда и выезда");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popup.classList.remove("modal");
    if (!popup.classList.contains("modal")) {
      popup.classList.add("modal");
    }
  }
});
