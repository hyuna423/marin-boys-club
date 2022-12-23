var swiper = new Swiper(".mySwiper", {
  slidesPerView: '3.6',
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
  pagination: {
    //페이지 기능
    el: '.swiper-pagination',
    //클릭 가능여부
    clickable: true,
  }
});