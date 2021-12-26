const swiper = new Swiper(".content-swiper", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        type: "bullets",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Autoplay
    autoplay: {
        delay: 1000,
    },
});

const swiper2 = new Swiper(".testimonial-swiper", {
    // Optional parameters
    loop: true,
    slidesPerView: 2,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination-testimonial",
        type: "progressbar",
        type: "bullets",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".testimonial-next",
        prevEl: ".testimonial-prev",
    },

    // Autoplay
    autoplay: {
        delay: 2000,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
        },
    },
});
