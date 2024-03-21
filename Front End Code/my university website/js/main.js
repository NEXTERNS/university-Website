// DOM Selection
const menuShowBtn = document.getElementById("show"),
    menuCloseBtn = document.getElementById("hide"),
    mobileNav = document.querySelector(".mobile-navbar");

const navlinks = document.querySelectorAll(".mobile-navbar header ul a");

// Click Events
// Showing Mobile Nav
menuShowBtn.addEventListener("click", () => {
    mobileNav.style.left = "0";
});

const closeNav = () => {
    mobileNav.style.left = "-100%";
};
// Hiding Mobile Nav
menuCloseBtn.addEventListener("click", closeNav);

navlinks.forEach((navlink) => {
    navlink.addEventListener("click", closeNav);
});




/*images slider section*/
$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        mouseDrag: false,
        loop: true,
        margin: 2,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });

    $('.owl-prev').click(function () {
        $active = $('.owl-item .item.show');
        $('.owl-item .item.show').removeClass('show');
        $('.owl-item .item').removeClass('next');
        $('.owl-item .item').removeClass('prev');
        $active.addClass('next');
        if ($active.is('.first')) {
            $('.owl-item .last').addClass('show');
            $('.first').addClass('next');
            $('.owl-item .last').parent().prev().children('.item').addClass('prev');
        }
        else {
            $active.parent().prev().children('.item').addClass('show');
            if ($active.parent().prev().children('.item').is('.first')) {
                $('.owl-item .last').addClass('prev');
            }
            else {
                $('.owl-item .show').parent().prev().children('.item').addClass('prev');
            }
        }
    });

    $('.owl-next').click(function () {
        $active = $('.owl-item .item.show');
        $('.owl-item .item.show').removeClass('show');
        $('.owl-item .item').removeClass('next');
        $('.owl-item .item').removeClass('prev');
        $active.addClass('prev');
        if ($active.is('.last')) {
            $('.owl-item .first').addClass('show');
            $('.owl-item .first').parent().next().children('.item').addClass('prev');
        }
        else {
            $active.parent().next().children('.item').addClass('show');
            if ($active.parent().next().children('.item').is('.last')) {
                $('.owl-item .first').addClass('next');
            }
            else {
                $('.owl-item .show').parent().next().children('.item').addClass('next');
            }
        }
    });

});
//Image slider function end//

//Preloader function starts//
(function ($) {

    "use strict";
 //Hide Loading Box (Preloader)
 function handlePreloader() {
    if($('.loader-wrap').length){
        $('.loader-wrap').delay(1000).fadeOut(500);
    }
}

if ($(".preloader-close").length) {
    $(".preloader-close").on("click", function(){
        $('.loader-wrap').delay(200).fadeOut(500);
    })
}

if ($(".switch_btn_one").length) {
    $(".search__toggler").on("click", function(){
        $(".search-field .switch_btn_one").addClass("active");
    })     
    $(".switch_btn_one .close-btn").on("click", function(){
        $(".search-field .switch_btn_one").removeClass("active");
    }) 
}



/* ==========================================================================
When document is loaded, do
========================================================================== */

$(window).on('load', function() {
    handlePreloader();
    enableMasonry();
});
})(window.jQuery);
//preloader function end//