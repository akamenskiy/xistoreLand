/**
 * Created by sashka on 06.05.17.
 */
$(document).ready(function () {

    $('.contacts_list__about').slick({
        mobileFirst: true,
        arrow: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        respondTo: "min",
        responsive: [
            {
                breakpoint: 731,
                settings: "unslick"
            }
        ]
    });

    $('.gallery_slider').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        accessibility: true,
        responsive: [
            {
                breakpoint: 1259,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 732,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});

