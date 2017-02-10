//слайдеры
var slider = (function() {

  function init(slider, options) {
    slider.slick(options);
  }

  return {
    init: init
  };
}());

var SLIDERS = {
  "rates": {
    "sliders" : {
      "xpon": $('#xponSlider'),
      "vip": $('#vipPlusSlider'),
      "corporate": {
        "kssVols": $('#kssVolsSlider'),
        "kssContent": $('#kssContentSlider'),
        "kssNceu": $('#kssNceuSlider')
      }
    },
    "options": {
      infinite: false,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }
  },
  "previews": {
    "sliders": {},
    "options": {
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000
    }
  }
};

slider.init($('#slider'), SLIDERS.previews.options);

slider.init(SLIDERS.rates.sliders.xpon, SLIDERS.rates.options);

slider.init(SLIDERS.rates.sliders.vip, SLIDERS.rates.options);

slider.init(SLIDERS.rates.sliders.corporate.kssVols, SLIDERS.rates.options);

slider.init(SLIDERS.rates.sliders.corporate.kssContent, SLIDERS.rates.options);

slider.init(SLIDERS.rates.sliders.corporate.kssNceu, SLIDERS.rates.options);
