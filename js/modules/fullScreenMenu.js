var fullScreenMenu = (function() {
  var menuButton = document.querySelector('#menuButton'),
      serviceButton = document.querySelector('#serviceButton'),
      body = document.querySelector('.body'),
      header = document.querySelector('.header'),
      // colseButton = document.querySelector('[data-role="close-fullscreen"]'),
      fullscreenMenu = document.querySelector('#fullscreenMenu');

  function _setupListeners() {
    menuButton.addEventListener('click', function(e) {
      e.preventDefault();
      // header.classList.toggle('header--colorless');
      fullscreenMenu.classList.toggle('js--active');

      window.addEventListener('keydown', function(e) {
        if(fullscreenMenu.classList.contains('js--active') && e.keyCode === 27) {
          fullscreenMenu.classList.remove('js--active');
        }
      });
    });

    serviceButton.addEventListener('click', function(e) {
      e.preventDefault();
      fullscreenServiceMenu.classList.toggle('js--active');

      window.addEventListener('keydown', function(e) {
        if(fullscreenServiceMenu.classList.contains('js--active') && e.keyCode === 27) {
          fullscreenServiceMenu.classList.remove('js--active');
        }
      });
    });

    document.addEventListener('click', function(e) {
      var target = e.target;

      while (target != this) {
        if (target.getAttribute('data-role') === 'close-fullscreen') {
          e.preventDefault();
          var fullscreenMenu = target.parentNode;
          fullscreenMenu.classList.remove('js--active');
          return false;
        }
        target = target.parentNode;
      }
    });
  }

  function init() {
    _setupListeners();
  }

  return {
    init: init
  };
}());

fullScreenMenu.init();
