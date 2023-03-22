
window.addEventListener("scroll",() => {

    if(window.scrollY > 100){
        document.querySelector("header").classList.add("d-none")
    }
    else{
        document.querySelector("header").classList.remove("d-none")
    }
})


jQuery(document).ready(function($) {
    $('.slick.marquee').slick({
      speed: 5000,
      autoplay: true,
      autoplaySpeed: 0,
      centerMode: true,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      infinite: true,
      initialSlide: 1,
      arrows: false,
      buttons: false
    });
  });

  jQuery(document).ready(function($) {
    $('.slick.member').slick({
      speed: 500,
    //   autoplay: false,
    //   autoplaySpeed: 0,
      centerMode: true,
    //   cssEase: 'linear',
      slidesToShow: 4,
      slidesToScroll: 1,
    //   variableWidth: true,
    //   infinite: true,
      initialSlide: 1,
    //   asNavFor: '.slider-for',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      arrows: false,
    //   buttons: false
    });
  });