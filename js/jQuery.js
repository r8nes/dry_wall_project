$(document).ready(function () {
  // Слайдер
  $(".feature-slider").slick({
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

  // Модальное окно

  $(".popup-btn").on("click", function (event) {
    event.preventDefault();
    $(".popup").fadeIn();
  });
  $(".popup-close").on("click", function (event) {
    event.preventDefault();
    $(".popup").fadeOut();
  });
});
