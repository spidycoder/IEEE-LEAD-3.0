var navbar = document.getElementById('navbar');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
        navbar.classList.add("nav-colored");
        navbar.classList.remove("navbar");
    } 
    else {
        navbar.classList.add("navbar");
        navbar.classList.remove("nav-colored");
    }
};
function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
    var y = document.getElementById("navbar");
    if (y.className === "navbar") {
        navbar.classList.add("nav-colored");
    } else {
        navbar.classList.add("navbar");
    }
  };
var typed=new typed("typing",{
strings:["Developer","Coder","Learner"],
typeSpeed:100,
backSpeed:60,
loop:true
});