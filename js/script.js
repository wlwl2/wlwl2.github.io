// adds the list of my repos to the menu async
(function myRepositoriesMenu () {
  var httpRequest
  makeRequest('https://api.github.com/users/wlwl2/repos?per_page=100')
  function makeRequest (url) {
    // The XMLHttpRequest() constructor initiates a XMLHttpRequest. It must be called before any other method calls.
    httpRequest = new window.XMLHttpRequest()

    // XMLHttpRequest.onreadystatechange = callback;
    // callback is the function to be executed when the readyState changes.
    httpRequest.onreadystatechange = alertContents
    httpRequest.open('GET', url)
    httpRequest.send()
  }

  function alertContents () {
    if (httpRequest.readyState === window.XMLHttpRequest.DONE) {
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
  var items = document.querySelectorAll('.menu ul li a')
  var sections = document.querySelectorAll('.sections section')

  function showSection (index) {
    items[index].addEventListener('click', function (event) {
      hideAllSections()
      for (var i = 0; i < sections.length; i++) {
        if (event.target.getAttribute('data-section-id') ===
        sections[i].getAttribute('data-section-id')) {
          sections[i].setAttribute('data-section-hidden', 'no')
        }
      }
    }, false)
  }

  function hideAllSections () {
    for (var i = 0; i < sections.length; i++) {
      sections[i].setAttribute('data-section-hidden', 'yes')
    }
  }

  for (var i = 0; i < items.length; i++) {
    showSection(i)
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
  var items = document.querySelectorAll('.mobile-menu__container ul li a')
  var sections = document.querySelectorAll('.sections section')

  function showSection (index) {
    items[index].addEventListener('click', function (event) {
      hideAllSections()
      for (var i = 0; i < sections.length; i++) {
        if (event.target.getAttribute('data-section-id') ===
        sections[i].getAttribute('data-section-id')) {
          sections[i].setAttribute('data-section-hidden', 'no')
        }
      }
    }, false)
  }

  function hideAllSections () {
    for (var i = 0; i < sections.length; i++) {
      sections[i].setAttribute('data-section-hidden', 'yes')
    }
  }

  for (var i = 0; i < items.length; i++) {
    showSection(i)
  }
})();

// Repository Search
(function repositorySearch () {
  let searchInput = document.querySelector('.repository-search__input')
  let repositoryList = document.querySelector('.repository-list')
  searchInput.addEventListener('input', function (event) {
    let listItem = repositoryList.children
    for (var i = 0; i < listItem.length; i++) {
      listItem[i].className = 'hidden'
    }
    for (var j = 0; j < listItem.length; j++) {
      if (listItem[j].children[0].textContent.toUpperCase().indexOf(searchInput.value.toUpperCase()) !== -1) {
        listItem[j].className = ''
      }
    }
  }, false)
})();
