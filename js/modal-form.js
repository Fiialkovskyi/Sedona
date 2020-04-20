var searchButton = document.querySelector(".main-search-button");
var modalForm = document.querySelector(".modal-form");



searchButton.addEventListener("click", function (evt) {
   evt.preventDefault();
   modalForm.classList.toggle("modal-show");
});