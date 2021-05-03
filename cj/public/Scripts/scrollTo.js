jQuery(function ($) {
    $.scrollTo(0);

    $('.link-map').click(function () {
        $.scrollTo($('#map-section'), 600, { offset: -50 });
        $('.link-map').blur();
    });
    $('.link-contact').click(function () {
        $.scrollTo($('#contact'), 600, { offset: -50 });
        $('.link-contact').blur();
    });
    $('.link-gallery').click(function () {
        $.scrollTo($('#gallery-section'), 600, { offset: -50 });
        $('.link-gallery').blur();
    });
    $('.link-sendmail').click(function () {
        $.scrollTo($('#sendmail'), 600, { offset: -50 });
        $('.link-sendmail').blur();
    });
    $('#link-top').click(function () {
        $.scrollTo($('#top'), 600, { offset: -55 });
        $('#link-top').blur();
    });
    $('.scrollup').click(function () { $.scrollTo($('navbar'), 600, { offset: -55 }); });
}
		);

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) $('.scrollup').fadeIn();
    else $('.scrollup').fadeOut();
}
);