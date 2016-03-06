// Click to show sub menus.
showMenu = function () {
  // If the menu is hidden, then show the menu. Color of the cube becomes red.
  if ( this.nextElementSibling.className === "hide-sub-menu") {
    this.nextElementSibling.className = "show-sub-menu";
    cube.material.color.setHex(0xe32121); // there is also setHSV and setRGB
  } else { // If the menu is shown, then hide the menu. Color of the cube becomes green.
    this.nextElementSibling.className = "hide-sub-menu";
    cube.material.color.setHex(0x54e7a0); // there is also setHSV and setRGB
  }
};
var menuButtons = document.querySelectorAll(".menu > ul > li > button");
for (var i=0, menuList = document.querySelectorAll(".menu > ul > li"); i<menuList.length; i++) {
  if (menuButtons[i].nextElementSibling) {
    menuButtons[i].addEventListener("click", showMenu);
  }
}
