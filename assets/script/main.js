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
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
    },
});

const counterUp = window.counterUp.default;

const el = document.querySelectorAll(".counter");

// Start counting, typically you need to call this when the
// element becomes visible, or whenever you like.
el.forEach((element) => {
    new Waypoint({
        element: element,
        handler: function () {
            counterUp(element, {
                duration: 2000,
                delay: 16,
            });
            this.destroy();
        },
        offset: "bottom-in-view",
    });
});
