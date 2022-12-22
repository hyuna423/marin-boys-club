var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  spaceBetween: 0,
  centeredSlides: true,
  preventClicks:true,
  loop:true,  
  on: {
    init: function () {
      $('.swiper-slide').addClass('changed');
    },
    slideChangeTransitionStart : function() {
      $('.swiper-slide').addClass('changing');
      $('.swiper-slide').removeClass('changed');
    },
    slideChangeTransitionEnd : function() {
      $('.swiper-slide').removeClass('changing');
      $('.swiper-slide').addClass('changed');
    }
  },
});