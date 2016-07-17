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

// Shows sections on button click on top menu
for (var i = 0, sections = document.querySelector(".sections").children; i < menuButtons.length; i++) {
  var sections = document.querySelector(".sections").children

  menuButtons[i].addEventListener("click", function showSection() {
    var sections = document.querySelector(".sections").children

      sections[i].className = sections[i].className + ' shown';
    }
  });
}


/*var homeSection = document.querySelector('.sections').children[0];
var repoSection = document.querySelector('.sections').children[1];
var projSection = document.querySelector('.sections').children[2];

homeSection.addeventlistener('click', function () {
  repoSection.className = 'respositories hidden';
  projSection.className = 'projects hidden';
  homeSection.className = 'home shown'
},false);

repoSection.addeventlistener('click', function () {
  repoSection.className = 'respositories hidden';
  projSection.className = 'projects hidden';
  homeSection.className = 'home shown'
},false);

projSection.addeventlistener('click', function () {
  repoSection.className = 'respositories hidden';
  projSection.className = 'projects hidden';
  homeSection.className = 'home shown'
},false);
*/
