var nav = $('.navbar');
var navHeight = nav.outerHeight();
$(document).ready(function () {
    $('a[href*="#"]:not([href="#"])').on("click", function () {
        var href = this.hash;
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var hash = $(this.hash);
            var target = hash.length ? hash : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - navHeight + 5)
                }, 850, function () {
                    // window.location.hash = href;
                    $('.navbar-collapse').collapse('hide');
                });
                return false;
            }
        }
    });
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, function () {
            // window.location.hash = href;
        });
        return false;
    });

    
});

