
"use strict";


/*swiper*/

var swiper = new Swiper(".swiper-container", {
    autoplay: {
    delay: 0,
    stopOnLastSlide: false,
    disableOnInteraction: false,
},
    speed:3000,
    loop:true,
    slidesPerView: "auto",
    loopedSlides: 6,
    observer:true, 
    observeParents:true,
    spaceBetween : 30,
    grabCursor: true,
    loopAdditionalSlides : 1,
});



/*mouseover*/

const slide = document.querySelector('.swiper-container');


slide.addEventListener('mouseover', () => {
    swiper.autoplay.stop();
});
slide.addEventListener('mouseleave', () => {
    swiper.autoplay.start();
});


