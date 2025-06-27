const sideSwiper = new Swiper("#side-slider .sideSwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 60,
    centeredSlides: false,
    navigation: {
        prevEl: "#side-slider .swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    },
});