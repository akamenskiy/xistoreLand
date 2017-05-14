/**
 * Created by sashka on 06.05.17.
 */

$(document).ready(function () {

    /******     burger    ******/

    $(".burger").click(function () {
        $(".nav_list__mobile").toggleClass("active");
    });


    /******     scrollTo     ******/


    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top - $('.nav').height()
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
        $(".nav_list__mobile").removeClass("active");
    });


    /********     slider      *********/


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

