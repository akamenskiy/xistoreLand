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
            'scrollTop':  $target.offset().top - $('.cntBlock_nav').height()
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

    $(".gallery_img__desktop").fancybox({
        openEffect: 'fade',
        closeEffect: 'fade'
    });

    $(".gallery_img__tablet").fancybox({
        openEffect: 'fade',
        closeEffect: 'fade'
    });

    $(".button__google-table").fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        type: 'iframe'

    })

});

/*****      map    *******/

function myMap() {
    var map = new ymaps.Map('map', {
        center: [53.9277167, 27.599676],
        zoom: 17
    });
    var marker = new ymaps.Placemark([53.9277167, 27.599676], {}, {
        iconImageHref: 'img/geo2.svg'
    });
    map.geoObjects.add(marker);
}
