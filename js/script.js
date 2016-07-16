// adds the list of my repos to the menu async
(function myRepositoriesMenu() {
  var httpRequest;
  makeRequest('https://api.github.com/users/wlwl2/repos');

  function makeRequest(url) {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', url);
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var repoList = document.querySelector(".repository-list");
        var myRepositoriesObject = JSON.parse(httpRequest.responseText);
        for (var i = 0, repoListItems = "";i<myRepositoriesObject.length;i++) {
          var repoListItems = repoListItems +
          '<li><a href="' + myRepositoriesObject[i].html_url + '">' +
            myRepositoriesObject[i].name +
          '</a></li>'
        }
        repoList.innerHTML = repoListItems;
      }
    }
  }
})();

// need to optimize.
// Click to show sub menus.
showSection = function (event) {

};

var menuButtons = document.querySelectorAll(".menu > ul > li > a");
for (var i=0; i<menuButtons.length; i++) {
  if (menuButtons[i].nextElementSibling) {
    menuButtons[i].addEventListener("click", showMenu);
  }
}
