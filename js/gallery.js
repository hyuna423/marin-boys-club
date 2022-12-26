
"use strict";


/*swiper*/
var swiper = new Swiper(".mySwiper2", {
    autoplay: {
    delay: 0,
    stopOnLastSlide: false,
    disableOnInteraction: false,
},
    speed:3000,
    loop:true,
    slidesPerView: "auto",
    spaceBetween : 40,
    grabCursor: true,
    paginationClickable: true,
});



/*mouseover*/

const slide = document.querySelector('.mySwiper2');


slide.addEventListener('mouseover', () => {
    swiper.autoplay.stop();
});
slide.addEventListener('mouseleave', () => {
    swiper.autoplay.start();
});
