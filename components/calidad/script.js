const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 0,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
});

console.log("Swiper initialized for calidad component.", swiper);