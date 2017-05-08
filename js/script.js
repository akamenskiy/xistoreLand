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
                breakpoints: 1084,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $("#input__phone").keydown(function(e) {
        var oldvalue=$(this).val();
        var field=this;
        setTimeout(function () {
            if(field.value.indexOf('+375') !== 0) {
                $(field).val(oldvalue);
            }
        }, 1);
    });
});
