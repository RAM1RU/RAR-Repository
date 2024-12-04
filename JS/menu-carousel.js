$(document).ready(function () {
    // Menu Slider
    $('.menu-items').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button class="slider-prev" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); z-index: 2; background-color: rgba(0, 0, 0, 0.5); color: #fff; border: none; padding: 1rem; cursor: pointer;">&#8249;</button>',
        nextArrow: '<button class="slider-next" style="position: absolute; right: 30px; top: 50%; transform: translateY(-50%); z-index: 2; background-color: rgba(0, 0, 0, 0.5); color: #fff; border: none; padding: 1rem; cursor: pointer;">&#8250;</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});
