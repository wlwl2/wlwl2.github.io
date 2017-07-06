// adds the list of my repos to the menu async
(function myRepositoriesMenu () {
  var httpRequest
  makeRequest('https://api.github.com/users/wlwl2/repos')

  function makeRequest (url) {
    // The XMLHttpRequest() constructor initiates a XMLHttpRequest. It must be called before any other method calls.
    httpRequest = new XMLHttpRequest()

    // XMLHttpRequest.onreadystatechange = callback;
    // callback is the function to be executed when the readyState changes.
    httpRequest.onreadystatechange = alertContents
    httpRequest.open('GET', url)
    httpRequest.send()
  }

  function alertContents () {
    /*
    The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in.
    An XHR client exists in one of the following states:
    Value State	            Description
    0	    UNSENT	          Client has been created. open() not called yet.
    1	    OPENED	          open() has been called.
    2	    HEADERS_RECEIVED	send() has been called, and headers and status are available.
    3	    LOADING	          Downloading; responseText holds partial data.
    4	    DONE	            The operation is complete.
    */
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var repoList = document.querySelector('.repository-list')
        var myRepositoriesObject = JSON.parse(httpRequest.responseText)
        for (var i = 0, repoListItems = ''; i < myRepositoriesObject.length; i++) {
          repoListItems = repoListItems +
          '<li><a href="' + myRepositoriesObject[i].html_url + '" title="' +
            myRepositoriesObject[i].name + '">' +
            myRepositoriesObject[i].name +
          '</a></li>'
        }
        repoList.innerHTML = repoListItems
      }
    }
  }
})();

// Shows sections on button click on desktop menu
(function topMenu () {
  for(var i = 0, items = document.querySelectorAll('.menu ul li'); i < items.length; i++) {
  (function (i) {
    items[i].addEventListener('click', function (event) {
      var sections = document.querySelectorAll('.sections section')
      for(var j = 0; j < sections.length; j++) {
        if (sections[j].className.search(/hidden/) !== -1) {
          sections[j].className = sections[j].className.replace(' hidden', '')
        }
      }
      var selectedSection = sections[i].className
      for(var k = 0; k < sections.length; k++) {
        sections[k].className += ' hidden'
      }
      sections[i].className = selectedSection
    }, false)
  })(i);
}
})();

// Opens and Closes the mobile menu ONLY!
(function mobileMenu () {
  let mobileMenuToggle = document.querySelector('.mobile-menu__open-menu')
  let mobileMenuToggleText = document.querySelector('.mobile-menu__open-menu-text span')
  let mobileMenu = document.querySelector('.mobile-menu ul')

  mobileMenuToggle.addEventListener('click', function (event) {
    if (mobileMenu.className === '') {
      mobileMenu.className = 'hidden'
      mobileMenuToggleText.textContent = 'Menu'
    } else {
      mobileMenu.className = ''
      mobileMenuToggleText.textContent = 'Close Menu'
    }
  }, false)
})();

// Shows sections on button click on mobile menu.
(function mobileSectionsMenu () {
  for(var i = 0, items = document.querySelectorAll('.mobile-menu__container ul li'); i < items.length; i++) {
  (function (i) {
    items[i].addEventListener('click', function (event) {
      var sections = document.querySelectorAll('.sections section')
      for(var j = 0; j < sections.length; j++) {
        if (sections[j].className.search(/hidden/) !== -1) {
          sections[j].className = sections[j].className.replace(' hidden', '')
        }
      }
      var selectedSection = sections[i].className
      for(var k = 0; k < sections.length; k++) {
        sections[k].className += ' hidden'
      }
      sections[i].className = selectedSection
    }, false)
  })(i);
  }
})();

// Search
(function () {
  let searchInput = document.querySelector('.repository-search__input')
  let repositoryList = document.querySelector('.repository-list')
  searchInput.addEventListener('input', function (event) {
    let listItem = repositoryList.children
    for (var i = 0; i < listItem.length; i++) {
        listItem[i].className = 'hidden'
    }
    for (var i = 0; i < listItem.length; i++) {
      if (listItem[i].children[0].textContent.toUpperCase().indexOf(searchInput.value.toUpperCase()) !== -1) {
        listItem[i].className = ''
      }
    }
  }, false)
})();
