//фиксированный хэдер
var stickyHeader = (function() {
  var header = document.querySelector('#header'),
      headerHeight = header.offsetHeight,
      headerTopBorder = header.offsetTop,
      headerBottomBorder = headerTopBorder + headerHeight,
      scrolled,
      bottomBorder,
      topBorder;

  var slider = document.querySelector('#mainSlider');

  function _setupListeners() {

    document.addEventListener('scroll', function(e) {
      // if(header.getAttribute('data-stickafter')) {
      //   bottomBorder = slider.offsetTop + slider.offsetHeight - headerHeight - 20;
      //   topBorder = bottomBorder;
      // } else {
      //   bottomBorder = headerBottomBorder + 50;
      //   topBorder = headerTopBorder;
      // }
      bottomBorder = headerBottomBorder + 50;
      topBorder = headerTopBorder;
      scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if(scrolled >= bottomBorder) {
        if(!header.classList.contains('header--sticky')) {
          header.classList.add('header--sticky', 'header--slide-down');
        }
      } else if(scrolled <= topBorder) {
        if(header.classList.contains('header--sticky')) {
          header.classList.remove('header--sticky', 'header--slide-down');
        }
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

stickyHeader.init();
