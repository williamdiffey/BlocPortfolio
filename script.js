function toggleBurger(a) {
    a.classList.toggle("change");
  let menuState = document.getElementById("links");
  if (menuState.style.display !== "block") {
    menuState.style.display = "block";
  } else {
    menuState.style.display = "none";
  }
}

