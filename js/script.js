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
(function topMenu () {
  for( var i = 0, items = document.querySelectorAll(".menu ul li"); i < items.length; i++ ){
  (function(i){
    items[i].addEventListener('click', function(event) {
      var sections = document.querySelectorAll(".sections section");
      for( var j = 0; j < sections.length; j++ ){
        if (sections[j].className.search(/hidden/) !== -1) {
          sections[j].className = sections[j].className.replace(' hidden','');
        }
      }
      var selectedSection = sections[i].className;
      for( var k = 0, sections; k < sections.length; k++ ){
        sections[k].className += ' hidden'
      }
      sections[i].className = selectedSection;
    }, false);
  })(i);
}
})();
