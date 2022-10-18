$(function(){
  $(".nav-link").click(function () {
    $('.navbar-collapse').removeClass('show');
  });
  
  $('.countries-slider').slick({
      prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/arrow-prev.svg" alt="" /></button>',
      nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/arrow-next.svg" alt="" /></button>',
      dots: true,
      infinite:true,
     // variableWidth:true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    });

  $('.route-slider').slick({
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/arrow-prev.svg" alt="" /></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/arrow-next.svg" alt="" /></button>',
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false        }
      },
    ]
  });
  $('.about-slider').slick({
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/arrow-prev.svg" alt="" /></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/arrow-next.svg" alt="" /></button>',
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,    
  });  
  $('.reviews-slider').slick({
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/arrow-prev.svg" alt="" /></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/arrow-next.svg" alt="" /></button>',
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  $('.photo-slider').slick({
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/arrow-prev.svg" alt="" /></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/arrow-next.svg" alt="" /></button>',
    dots: true,
    infinite: true,
    speed: 300,
    centerMode: true,
    centerPadding: '12px',
    slidesToShow: 3,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      },
    ]
  });
  $(window).on('load', function () {

    new WOW().init();
  });  

  $(".lazy").Lazy({
    scrollDirection: 'vertical',
    effect: 'fadeIn',
    visibleOnly: true
  });
})