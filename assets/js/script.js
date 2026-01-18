function scrollToTop() {
    $('html, body').stop().animate({ scrollTop: 0 }, 300);
}

$(document).ready(function () {

    $("#about_scroll").fadeOut();
    $("#work_scroll").fadeOut();
    $("#contact_scroll").fadeOut();

    $("#about").click(function () {
        scrollToTop();
        $("#index").fadeOut(function () {
            $("#about_scroll").fadeIn();
        });
        $('#about_left').addClass('animated slideInLeft');
        $('#about_right').addClass('animated slideInRight');
    });

    $("#work").click(function () {
        scrollToTop();
        $("#index").fadeOut(function () {
            $("#work_scroll").fadeIn();
        });
        $('#work_left').addClass('animated slideInLeft');
        $('#work_right').addClass('animated slideInRight');
    });

    $("#contact").click(function () {
        scrollToTop();
        $("#index").fadeOut(function () {
            $("#contact_scroll").fadeIn();
        });
        $('#contact_left').addClass('animated slideInLeft');
        $('#contact_right').addClass('animated slideInRight');
    });

    $(".back").click(function () {
        scrollToTop();
        $(".pages").fadeOut(function () {
            $("#index").fadeIn();
        });
        $('#index_left').addClass('animated slideInLeft');
        $('#index_right').addClass('animated slideInRight');
    });

});
