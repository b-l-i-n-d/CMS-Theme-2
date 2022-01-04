// content slider

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

// testimonial swiper

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

// client swiper

const swiper3 = new Swiper(".client-swiper", {
    // Optional parameters
    loop: true,

    // Autoplay
    autoplay: {
        delay: 1000,
    },

    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 6,
        },
    },
});

// member swiper

const swiper4 = new Swiper(".member-swiper", {
    // Optional parameters
    loop: true,

    // Autoplay
    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

// count section counter up

const counterUp = window.counterUp;

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

// gallery
var iso = new Isotope(".gallery-flex", {
    itemSelector: ".gallery-item",
});

// filters

var filtersElem = document.querySelector(".filter-btns");
filtersElem.addEventListener("click", function (event) {
    // only work with buttons
    if (!matchesSelector(event.target, "button")) {
        return;
    }
    var filterValue = event.target.getAttribute("data-filter");
    iso.arrange({ filter: filterValue });
});

// lightbox

const galleryLightbox = GLightbox({
    selector: ".gallery-lightbox",
});
