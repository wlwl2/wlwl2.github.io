// Just copied and pasted lines 5 to 11 need to optimize.
// Click to show sub menus.
showMenu = function (event) {
  event.stopPropagation();
  for (var i=0, menuList = document.querySelectorAll(".menu > ul > li"); i<menuList.length; i++) {
  }
  // If the menu is hidden, then show the menu. Color of the cube becomes red.
  if ( this.nextElementSibling.className === "sub-menu hidden") {
    for (var i=0, menuList = document.querySelectorAll(".menu > ul > li"); i<menuList.length; i++) {
      if (menuList[i].firstChild.nextElementSibling) {
       menuList[i].firstChild.nextElementSibling.className = "sub-menu hidden";
      }
    }
    this.className = "menu-button shown";
    this.nextElementSibling.className = "sub-menu shown";
  } else {
    this.className = "menu-button hide-sub-menu";
    this.nextElementSibling.className = "sub-menu hidden";
  }
};

stopClose = function (event) {
  event.stopPropagation();
};

var menuButtons = document.querySelectorAll(".menu > ul > li > a");
for (var i=0; i<menuButtons.length; i++) {
  if (menuButtons[i].nextElementSibling) {
    menuButtons[i].addEventListener("click", showMenu);
    menuButtons[i].nextElementSibling.addEventListener("click", stopClose);
  }
}

// Click outside the menu to close it. This adds an event listener to the whole page.
document.addEventListener('click', function() {
  for (var i=0, menuList = document.querySelectorAll(".menu > ul > li"); i < menuList.length; i++) {
    if (menuList[i].firstChild.nextElementSibling) {
      menuList[i].firstChild.className = "menu-button hide-sub-menu";
      menuList[i].firstChild.nextElementSibling.className = "sub-menu hidden";
    }
  }
});
