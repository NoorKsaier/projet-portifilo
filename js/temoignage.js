$(document).ready(function () {
    $('.testimonial-slider').owlCarousel({
        loop: true, // Enables infinite scrolling
        margin: 20, // Space between items
        nav: true, // Shows navigation arrows
        dots: true, // Shows dots below the carousel
        autoplay: true, // Enables auto-scroll
        autoplayTimeout: 5000, // Adjust scroll speed
        responsive: {
            0: {
                items: 1, // Number of items visible on small screens
            },
            600: {
                items: 2, // Number of items visible on medium screens
            },
            1000: {
                items: 3, // Number of items visible on larger screens
            }
        }
    });
});
