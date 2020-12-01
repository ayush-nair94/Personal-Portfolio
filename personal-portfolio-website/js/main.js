(function($) {

    "use strict";

    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
          $("#mainNav").addClass("navbar-shrink");
        } else {
          $("#mainNav").removeClass("navbar-shrink");
        }
      };
      
    jQuery(document).on("ready", function() {

        /*
         * -----------------------------------------------------------------
         *---------------------------Preloader and Anchor Tag---------------
         * -----------------------------------------------------------------
         */

        var themeWindow = $(window);
        var pagebody = $('html, body');
        themeWindow.on("load", function() {

            var preloader = jQuery('.preloader');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(200).fadeOut('slow');
            themeWindow.scrollTop(0);
        });

        var anchor = $('a[href="#"]');
        anchor.on("click", function() {
            e.preventDefault();
        });


        /*
         * -----------------------------------------------------------------
         *-------------------single-page-nav-plugin------------------------
         * -----------------------------------------------------------------
         */



        // Prevent console.log from generating errors in IE for the purposes of the demo
        if(!window.console) console = {
            log: function() {}
        };

        // The actual plugin
        if($(".welcome-area").is("#welcome-area")) {
            var singleNav = jQuery('.single-page-nav');
            singleNav.singlePageNav({
                offset: singleNav.outerHeight(),
                filter: ':not(.external)',
                updateHash: false
            });




            /*
             * -----------------------------------------------------------------
             *----------------------Contact form ajax---------------------------
             * -----------------------------------------------------------------
             */



            var contactSubmit = $('#contact-submit');

            contactSubmit.on('click', function(e) {
                e.preventDefault();
                var name = $('#form-name').val();
                var email = $('#form-email').val();
                var subject = $('#form-subject').val();
                var message = $('#form-message').val();
                var form = new Array({
                    'name': name,
                    'email': email,
                    'subject': subject,
                    'message': message
                });
                $.ajax({
                    type: 'POST',
                    url: "contact.php",
                    data: ({
                        'action': 'contact',
                        'form': form
                    })
                }).done(function(data) {

                    var conResult = $('#contact .result');
                    conResult.html(data);
                    $(".contact-form-area")[0].reset();

                });

            });


            /*
             * -----------------------------------------------------------------
             *--------------------Owl Carousel For Testimonial------------------
             * -----------------------------------------------------------------
             */



            $(".testimonial .owl-carousel").owlCarousel({
                loop: true,
                margin: 30,
                autoplay: true,
                smartSpeed: 500,
                responsiveClass: true,
                dots: false,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    800: {
                        items: 1,
                    },
                    1000: {
                        items: 2,
                    },
                },
            });




            /*
             * -----------------------------------------------------------------
             *-----------------------------Typed Js-----------------------------
             * -----------------------------------------------------------------
             */

            if($(".welcome-area").is(".animated-text")) {
                var typed = new Typed("#typed", {
                    stringsElement: '#typed-strings',
                    typeSpeed: 60,
                    backSpeed: 30,
                    backDelay: 2000,
                    startDelay: 1000,
                    loop: true

                });
            }

        }
        /*
         * -----------------------------------------------------------------
         *----------------------- Pagepiling.js------------------------------
         * -----------------------------------------------------------------
         */


        var pagepiling = $('#pagepiling');
        pagepiling.pagepiling({
            menu: '#mainNav',
            direction: 'vertical',
            verticalCentered: true,
            sectionsColor: [],
            anchors: ['home', 'about', 'resume', 'portfolio', 'contact'],
            scrollingSpeed: 700,
            easing: 'swing',
            loopBottom: true,
            loopTop: true,
            css3: true,
            navigation: {
                'textColor': '#000',
                'bulletsColor': '#000',
                'position': 'right',
                'tooltips': ['Home', 'About', 'Resume', 'Portfolio', 'Contact']
            },
            normalScrollElements: null,
            normalScrollElementTouchThreshold: 5,
            touchSensitivity: 5,
            keyboardScrolling: true,
            sectionSelector: '.section',
            animateAnchor: true,

            //events
            afterRender: function() {},
            afterLoad: function(anchorLink, index) {}
        });

        /*
         * -----------------------------------------------------------------
         *----------------------- header info bar---------------------------
         * -----------------------------------------------------------------
         */


        // var headerInfo = $("#header-info-btn");

        // headerInfo.animatedModal({
        //     modalTarget: 'header-info-bar',
        //     animatedIn: 'fadeInLeft',
        //     animatedOut: 'fadeOutLeft',
        // });

        /* -----------------------------------
	      	8. Chart Setup
	    ----------------------------------- */
        if ($('.chart').length > 0) {
            $('.chart').easyPieChart({
            trackColor:'#0e0f10',
            scaleColor:false,
            easing: 'easeOutBounce',
            scaleLength: 4,
            lineCap: 'square',
            lineWidth:5,
            size:130,
            animate: {
                        duration: 2500,
                        enabled: true
                }
            });
        }

    });

})(jQuery);