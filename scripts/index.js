document.querySelectorAll(".nav__title").forEach((element) => {
  element.addEventListener("click", function () {
    element.parentNode.classList.toggle("_active");
  });
});

document.getElementById("submit-form").addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector(".subscription__info").style.display = "none";
  document.querySelector(".subscription__info--success").style.display = "block";
  document.querySelector(".subscription__form").style.display = "none";
  document.querySelector(".subscription__inner").classList.add("_active");
});
