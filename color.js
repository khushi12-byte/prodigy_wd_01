document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar");

  window.onscroll = function () {
    // Change background color when scrolled
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      navbar.style.backgroundColor = "#555";
    } else {
      navbar.style.backgroundColor = "#333";
    }
  };
});
