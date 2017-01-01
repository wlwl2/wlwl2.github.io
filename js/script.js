// adds the list of my repos to the menu async
(function myRepositoriesMenu() {
  var httpRequest;
  makeRequest('https://api.github.com/users/wlwl2/repos');

  function makeRequest(url) {

    // The XMLHttpRequest() constructor initiates a XMLHttpRequest. It must be called before any other method calls.
    httpRequest = new XMLHttpRequest();

    // XMLHttpRequest.onreadystatechange = callback;
    // callback is the function to be executed when the readyState changes.
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', url);
    httpRequest.send();
  }

  function alertContents() {

    /*
    The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in.
    An XHR client exists in one of the following states:
    Value	State	            Description
    0	    UNSENT	          Client has been created. open() not called yet.
    1	    OPENED	          open() has been called.
    2	    HEADERS_RECEIVED	send() has been called, and headers and status are available.
    3	    LOADING	          Downloading; responseText holds partial data.
    4	    DONE	            The operation is complete.
    */
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
