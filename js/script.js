/**
 * Created by sashka on 06.05.17.
 */
$(document).ready(function () {
    $('.gallery_slider').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        accessibility: true,
        responsive: [
            {
                breakpoint: 1259,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

