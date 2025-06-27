const centeredSwiper = new Swiper("#centered-slider .centeredSwiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: "#centered-slider .swiper-button-next",
        prevEl: "#centered-slider .swiper-button-prev",
    },
    autoplay: {
        delay: 10000000,
        disableOnInteraction: false,
    },
    speed: 500,
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 1,
        },
    },
});