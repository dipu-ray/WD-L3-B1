// Slides per view
var swiper = new Swiper(".slidesPerView", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Autoplay
var swiper = new Swiper(".autoplay", {
    slidesPerView: 6,
    spaceBetween: 30,
    centeredSlides: false,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
});

// Space between
var swiper = new Swiper(".spaceBetween", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});