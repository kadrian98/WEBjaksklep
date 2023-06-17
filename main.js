const menu = document.querySelector(".dropdown");
menu.addEventListener("click", function () {
  const dropdownContent = this.querySelector(".dropdown-content");
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
});
