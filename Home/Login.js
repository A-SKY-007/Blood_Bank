const openPopupButton = document.getElementById("navbuttonlogin");
const closePopupButton = document.getElementById("closePopup");
const popupOverlay = document.getElementById("popupOverlay");

openPopupButton.addEventListener("click", () => {
  popupOverlay.style.display = "block";
});

closePopupButton.addEventListener("click", () => {
  popupOverlay.style.display = "none";
});