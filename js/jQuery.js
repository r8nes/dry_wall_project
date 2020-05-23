$(document).ready(function () {
  // Слайдер с отзывами 
  $('.feedback-slider').slick({
    prevArrow: '<button class = "feedback-slider-btn feedback-prev-btn"><img src = "../img/feedback/prev_arrow.svg"></button>',
          nextArrow: '<button class = "feedback-slider-btn feedback-next-btn"><img src = "../img/feedback/next_arrow.svg"</button>'
  });
  // Слайдер c преимуществами
  $('.feature-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 5000,
          prevArrow: '<button class = "arrow prev"></button>',
          nextArrow: '<button class = "arrow next"></button>',
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          prevArrow: '<button class = "arrow prev"></button>',
          nextArrow: '<button class = "arrow next"></button>',
        },
      },
    ],
  });
});
