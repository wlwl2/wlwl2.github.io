// Just copied and pasted lines 5 to 11 need to optimize.
// Click to show sub menus.
showMenu = function (event) {
  event.stopPropagation();
  for (var i=0, menuList = document.querySelectorAll(".menu > ul > li"); i<menuList.length; i++) {
    if (menuList[i].firstChild.nextElementSibling) {
      menuList[i].firstChild.className = "sub-menu-button hide-sub-menu";
      cube.material.color.setHex(0x54e7a0); // there is also setHSV and setRGB
    }
  }
  // If the menu is hidden, then show the menu. Color of the cube becomes red.
  if ( this.nextElementSibling.className === "sub-menu hide-sub-menu") {
    for (var i=0, menuList = document.querySelectorAll(".menu > ul > li"); i<menuList.length; i++) {
      if (menuList[i].firstChild.nextElementSibling) {
       menuList[i].firstChild.nextElementSibling.className = "sub-menu hide-sub-menu";
      }
    }
    this.className = "sub-menu-button show-sub-menu";
    this.nextElementSibling.className = "sub-menu show-sub-menu";
    cube.material.color.setHex(0xe32121); // there is also setHSV and setRGB
  } else { // If the menu is shown, then hide the menu. Color of the cube becomes green.
    this.className = "sub-menu-button hide-sub-menu";
    this.nextElementSibling.className = "sub-menu hide-sub-menu";
    cube.material.color.setHex(0x54e7a0); // there is also setHSV and setRGB
  }
};

stopClose = function (event) {
  event.stopPropagation();
};

var menuButtons = document.querySelectorAll(".menu > ul > li > button");
for (var i=0; i<menuButtons.length; i++) {
  if (menuButtons[i].nextElementSibling) {
    menuButtons[i].addEventListener("click", showMenu);
    menuButtons[i].nextElementSibling.addEventListener("click", stopClose);
  }
}

// Click outside the menu to close it. This adds an event listener to the whole page.
document.addEventListener('click', function() {
  for (var i=0, menuList = document.querySelectorAll(".menu > ul > li"); i<menuList.length; i++) {
    if (menuList[i].firstChild.nextElementSibling) {
      menuList[i].firstChild.className = "sub-menu-button hide-sub-menu";
      menuList[i].firstChild.nextElementSibling.className = "sub-menu hide-sub-menu";
      cube.material.color.setHex(0x54e7a0); // there is also setHSV and setRGB
    }
  }
});
