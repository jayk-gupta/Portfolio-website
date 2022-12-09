const navOpen = document.querySelector(".nav-open");
const Mainmenu = document.querySelector(".main-menu");
const navClose = document.querySelector(".nav-close");

navOpen.addEventListener("click", function () {

  navClose.classList.add('show');
  Mainmenu.classList.add("show");
  navOpen.classList.add('hide');

});

navClose.addEventListener("click", function () {

  navClose.classList.remove('show');
  Mainmenu.classList.remove("show");
  navOpen.classList.remove('hide');

});

