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
/*for (var i = 0, menuButtons = document.querySelectorAll(".menu > ul > li"); i < menuButtons.length; i++) {
  menuButtons[i].addEventListener("click", function showSection() {
    var menuButtons = document.querySelectorAll(".menu > ul > li");


  });
}*/

/*var g = document.querySelectorAll(".menu > ul > li");
for (var i = 0, len = g.length; i < len; i++)
{

   (function(index){
       g[i].onclick = function(){
             alert(index)  ;
       }
   })(i);

}*/

for( var i = 0, items = document.querySelectorAll(".menu > ul > li"); i < items.length; i++ ){
    (function(i){
        items[i].addEventListener('click', function(event) {
            alert( i );
        }, false);
    })(i);
}
