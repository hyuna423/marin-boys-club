
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: '3.6',
  spaceBetween: 0,
  centeredSlides: true,
  preventClicks:true,
  loop:true,
  autoplay: true,  
  on: {
    init: function () {
      $('.mySwiper1 .swiper-slide').addClass('changed');
    },
    slideChangeTransitionStart : function() {
      $('.mySwiper1 .swiper-slide').addClass('changing');
      $('.mySwiper1 .swiper-slide').removeClass('changed');
    },
    slideChangeTransitionEnd : function() {
      $('.mySwiper1 .swiper-slide').removeClass('changing');
      $('.mySwiper1 .swiper-slide').addClass('changed');
    }
  },
  pagination: {
    //페이지 기능
    el: '.swiper-pagination',
    //클릭 가능여부
    clickable: true,
  }
})
