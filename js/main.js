$(document).ready(function () {
    $('.menu__item a').click(function (e) {
        e.preventDefault();
        $('.menu__item .link__active').removeClass('link__active');
        $(this).addClass('link__active');
        var tab = $(this).attr('href');
        $('menu__item').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(500);

    });







});
