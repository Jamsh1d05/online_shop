window.onscroll = function() {myFunction()};
var header = document.getElementById("navbar");
var nav = document.getElementById("navv");
var sticky = header.offsetTop;
function myFunction() {
    
    if (window.scrollY >= 100) {
      header.classList.add("sticky");
      nav.classList.add("nomargin");
    } else {
      header.classList.remove("sticky");
      nav.classList.remove("nomargin");
    }
  }