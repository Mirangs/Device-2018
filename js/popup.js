var catalogOpen = document.querySelector(".catalog__open");
var catalog = document.querySelector(".catalog__list");

catalogOpen.addEventListener("click", function(e) {
  e.preventDefault();
  catalog.classList.toggle("catalog__list--closed");
})

var searchButton = document.querySelector(".user-items__search-btn");
var searchField = document.querySelector(".user-items__search-field");

searchField.addEventListener("focus", function(e) {
  document.querySelector(".user-items__search-btn").classList.remove("user-items__search-btn--disabled");
})
searchField.addEventListener("blur", function(e) {
  document.querySelector(".user-items__search-btn").classList.add("user-items__search-btn--disabled");
})

var writeUs = document.querySelector(".write-us-btn");
var writeUsPopup = document.querySelector(".write-us-popup");
var writeUsClose = writeUsPopup.querySelector(".modal-close")

writeUs.addEventListener("click", function(e) {
  var name = writeUsPopup.querySelector("[name=name]")
  e.preventDefault();
  writeUsPopup.classList.remove("write-us-popup--closed");
  name.focus()
  var form = writeUsPopup.querySelector("form");
  var email = writeUsPopup.querySelector("[name=email]");
  var letter = writeUsPopup.querySelector("[name=letter]")
  form.addEventListener("submit", function(e) {
    if (!name.value || !email.value || !letter.value) {
      e.preventDefault();
      writeUsPopup.classList.add("modal-error");
    }
  });
})
writeUsClose.addEventListener("click", function(e) {
  e.preventDefault();
  writeUsPopup.classList.add("write-us-popup--closed");
  writeUsPopup.classList.remove("modal-error");
})
window.addEventListener("keydown", function(e) {
  if (e.keyCode === 27) {
    if (!writeUsPopup.classList.contains("write-us-popup--closed")) {
      e.preventDefault();
      writeUsPopup.classList.add("write-us-popup--closed");
      writeUsPopup.classList.remove("modal-error");
    }
  }
});

var mapPopupButton = document.querySelector(".map");
var mapPopup = document.querySelector(".map-popup");
var mapPopupClose = mapPopup.querySelector(".modal-close");
var mapNoJs = mapPopup.querySelector(".no-js");

mapNoJs.classList.add("visually-hidden");

mapPopupButton.addEventListener("click", function(e) {
  e.preventDefault();
  mapPopup.classList.remove("map-popup--closed");
});

mapPopupClose.addEventListener("click", function(e) {
  e.preventDefault();
  mapPopup.classList.add("map-popup--closed");
});

window.addEventListener("keydown", function(e) {
  if (e.keyCode === 27) {
    if (!mapPopup.classList.contains("map-popup--closed")) {
      e.preventDefault();
      mapPopup.classList.add("write-us-popup--closed");
    }
  }
});
