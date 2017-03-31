var tabs = (function() {
  function init(controllers, container) {
    controllers.addEventListener('click', function(e) {
      var target = e.target;

      while (target != this) {
        if (target.tagName == 'A') {
          e.preventDefault();
          var currentCtr = target.parentNode.hasAttribute('data-tabcontrol') && target.parentNode;

          if(currentCtr.classList.contains('js--active')) return;
          var currentCtrValue = currentCtr.getAttribute('data-tabcontrol'),
              currentElems = container.querySelectorAll('[data-tabcontent="' + currentCtrValue + '"]');

          var prevActiveCtrl = controllers.querySelector('.js--active'),
              prevActiveCtrlValue = prevActiveCtrl.getAttribute('data-tabcontrol'),
              prevActiveElems = container.querySelectorAll('[data-tabcontent="' + prevActiveCtrlValue + '"].js--active');

          currentElems = Array.prototype.slice.call(currentElems);
          prevActiveElems = Array.prototype.slice.call(prevActiveElems);

          prevActiveCtrl.classList.remove('js--active');

          prevActiveElems.forEach(function(item) {
            item.classList.remove('js--active');
          });

          currentCtr.classList.add('js--active');

          currentElems.forEach(function(item) {
            item.classList.add('js--active');
          });

          return;
        }
        target = target.parentNode;
      }
    });
  }

  return {
    init: init
  };
}());

var TABS = {
  "rates": {
    "controllers" : document.querySelector('#ratesSwitcher'),
    "container"   : document.querySelector('#ratesPrev')
  },
  "homeTabs": {
    "controllers" : document.querySelector('#homeTabsControllers'),
    "container"   : document.querySelector('#homeTabs')
  },
  "homeTabsMap": {
    "controllers" : document.querySelector('#homeTabsControllersMap'),
    "container"   : document.querySelector('#homeTabsMap')
  },
  "bussinesTabs": {
    "controllers" : document.querySelector('#bussinesTabsControllers'),
    "container"   : document.querySelector('#bussinesTabs')
  },
  "premiumTabs": {
    "controllers" : document.querySelector('#premiumTabsControllers'),
    "container"   : document.querySelector('#premiumTabs'),
    "corporateTabs" : {
      "controllers": document.querySelector('#corporateTabsControllers'),
      "container": document.querySelector('#corporateTabs'),
    }
  }
};

if(document.querySelector('#ratesSwitcher') && document.querySelector('#ratesPrev')) {
  tabs.init(document.querySelector('#ratesSwitcher'), document.querySelector('#ratesPrev'));
}

if(TABS.homeTabs.controllers && TABS.homeTabs.container) {
  tabs.init(TABS.homeTabs.controllers, TABS.homeTabs.container);
}
if(TABS.homeTabsMap.controllers && TABS.homeTabsMap.container) {
  tabs.init(TABS.homeTabsMap.controllers, TABS.homeTabsMap.container);
}

if(TABS.bussinesTabs.controllers && TABS.bussinesTabs.container) {
  tabs.init(TABS.bussinesTabs.controllers, TABS.bussinesTabs.container);
}

if(TABS.premiumTabs.controllers && TABS.premiumTabs.container) {
  tabs.init(TABS.premiumTabs.controllers, TABS.premiumTabs.container);
}

if(TABS.premiumTabs.corporateTabs.controllers && TABS.premiumTabs.corporateTabs.container) {
  tabs.init(TABS.premiumTabs.corporateTabs.controllers, TABS.premiumTabs.corporateTabs.container);
}

