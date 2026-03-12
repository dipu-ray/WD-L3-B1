// Navigation Swiper
var swiper = new Swiper(".navigationSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Autoplay Swiper
var swiper = new Swiper(".autoplaySwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    centeredSlides: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

// Pagination Dynamic Swiper
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});