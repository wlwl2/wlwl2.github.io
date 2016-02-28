showMenu = function () {
  if ( this.nextElementSibling.className === "hide-sub-menu") {
    this.nextElementSibling.className = "show-sub-menu";
  } else {
    this.nextElementSibling.className = "hide-sub-menu";
  }
}

for (i=0; i<document.querySelectorAll(".menu > ul > li").length; i++) {
  if (document.querySelectorAll(".menu > ul > li > button")[i].nextElementSibling) {
    document.querySelectorAll(".menu > ul > li > button")[i].addEventListener("click", showMenu);
  }
}
