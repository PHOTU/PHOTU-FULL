/*==

Copyright (c) Kopa Theme Premium Wordpress Theme

==*/


/**
 *  1.  top Menu
    2.  Main Menu
    3.  Search box
    4.  Accordion
    5.  Toggle
    6.  Owl Carousel
    7.  Validate Form
    8.  Google Map
    9.  Breadking News
    10. Scroll to top
    11. Masonry
    12. Bootstrap Slider
    13. Accordion Slider
    14. Enquire
    15. Fix css ie8
    16. Match height

 *-----------------------------------------------------------------
 **/
 

"use strict";


$(document).ready(function(){

var kopa_variable = {
    "contact": {
        "address": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "marker": "/url image"
    },
    "i18n": {
        "VIEW": "View",
        "VIEWS": "Views",
        "validate": {
            "form": {
                "SUBMIT": "Submit",
                "SENDING": "Sending..."
            },
            "name": {
                "REQUIRED": "Please enter your name",
                "MINLENGTH": "At least {0} characters required"
            },
            "email": {
                "REQUIRED": "Please enter your email",
                "EMAIL": "Please enter a valid email"
            },
            "url": {
                "REQUIRED": "Please enter your url",
                "URL": "Please enter a valid url"
            },
            "message": {
                "REQUIRED": "Please enter a message",
                "MINLENGTH": "At least {0} characters required"
            }
        },
        "tweets": {
            "failed": "Sorry, twitter is currently unavailable for this user.",
            "loading": "Loading tweets..."
        }
    },
    "url": {
        "template_directory_uri":""
    }
};

var map;



/* =========================================================
1. top Menu
============================================================ */

Modernizr.load([
  {
    load: kopa_variable.url.template_directory_uri + '/js/superfish.min.js',
    complete: function () {

        //Main menu
        $('.top-menu').superfish({
        });
    }
  }
]);


/* =========================================================
2. Main Menu
============================================================ */

Modernizr.load([
  {
    load: kopa_variable.url.template_directory_uri + '/js/superfish.min.js',
    complete: function () {
        
        var r_ul = $('.kopa-main-nav .sf-menu');
        r_ul.superfish({
            speed: "fast",
            delay: "100"
        });

        

    }
  }
]);


/* ============================================
3. Mobile-menu
=============================================== */

    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + '/js/jquery.navgoco.min.js'],
        complete: function () {

            $(".top-menu-mobile").navgoco({
                accordion: true
            });
            $(".top-nav-mobile > .pull").click(function () {
                $(this).closest(".top-nav-mobile").find(".top-menu-mobile").slideToggle("slow");
            });
            
            
            
            $(".main-nav-mobile > .pull").click(function () {
                $(this).closest(".main-nav-mobile").find(".main-menu-mobile").slideToggle("slow");
            });
            $(".main-menu-mobile").navgoco({
                accordion: true
            });

            $(".main-menu-mobile").find(".sf-mega").removeClass("sf-mega").addClass("sf-mega-mobile");
            $(".main-menu-mobile").find(".sf-mega-section").removeClass("sf-mega-section").addClass("sf-mega-section-mobile");
            $(".caret").removeClass("caret");

            $(".bottom-nav-mobile > .pull").click(function () {
                $(this).closest(".bottom-nav-mobile").find(".main-menu-mobile").slideToggle("slow");
            });

        }
    }]);




/* =========================================================
4. Accordion
============================================================ */

    var panel_titles = $('.kopa-accordion .panel-title a');
    panel_titles.addClass("collapsed");
    $('.panel-heading.active').find(panel_titles).removeClass("collapsed");
    panel_titles.click(function(){
        $(this).closest('.kopa-accordion').find('.panel-heading').removeClass('active');
        var pn_heading = $(this).parents('.panel-heading');
        if ($(this).hasClass('collapsed')) {
            pn_heading.addClass('active');
        } else {
            pn_heading.removeClass('active');
        }
    });



 /* =========================================================
5. Toggle
============================================================ */
 
    $('.kopa-toggle .panel-group .collapse').collapse({
        toggle: false
    });  
    var panel_titles_2 = $('.kopa-toggle .panel-title a');
    panel_titles_2.click(function(){
        var parent = $(this).closest('.panel-heading');
        if (parent.hasClass('active')) {
            parent.removeClass('active');
        } else {
            parent.addClass('active');
        }
    });

 /* =========================================================
6. Owl Carousel
============================================================ */

    Modernizr.load([{
        load: [ kopa_variable.url.template_directory_uri + '/js/owl.carousel.min.js'],
        complete: function () {

            var owl1 = $(".owl-carousel-1");
            owl1.owlCarousel({
                items: 4,
                pagination: true,
                slideSpeed: 600,
                navigationText: false,
                navigation: false,
                beforeInit: function(){
                    owl1.find(".item:even").addClass("bgb");
                }
            });

            var owl2 = $(".owl-carousel-2");
            owl2.owlCarousel({
                items: 3,
                itemsDesktop: [1160,3],
                itemsDesktopSmall : [979,2],
                itemsTabletSmall: [639,1],
                pagination: false,
                slideSpeed: 600,
                navigationText: false,
                navigation: true
            });
            owl2.find(".owl-controls").addClass("style1");

            var owl3 = $(".owl-carousel-3");
            owl3.owlCarousel({
                items: 2,
                itemsDesktop: [1160,2],
                pagination: false,
                slideSpeed: 600,
                navigationText: false,
                navigation: true
            });
            owl3.find(".owl-controls").addClass("style1");

            var owl4 = $(".owl-carousel-4");
            owl4.owlCarousel({
                items: 4,
                pagination: false,
                slideSpeed: 600,
                navigationText: false,
                navigation: true
            });
            owl4.find(".owl-controls").addClass("style1");

            var owl5 = $(".owl-carousel-5");
            owl5.owlCarousel({
                items: 3,
                itemsDesktop: [1160,3],
                itemsDesktopSmall : [979,2],
                itemsTabletSmall: [639,1],
                pagination: false,
                slideSpeed: 600,
                navigationText: false,
                navigation: true
            });
            owl5.find(".owl-controls").addClass("style2");

            var owl6 = $(".owl-carousel-6");
            owl6.owlCarousel({
                items: 3,
                itemsDesktop: [1160,3],
                itemsTablet: [799,3],
                itemsTabletSmall: [639,2],
                pagination: false,
                slideSpeed: 600,
                autoPlay: true,
                stopOnHover: true,
                navigationText: false,
                navigation: true
            });

            var owl7 = $(".owl-carousel-7");
            owl7.owlCarousel({
                singleItem: true,
                pagination: true,
                slideSpeed: 600,
                navigationText: false,
                navigation: true
            });
            owl7.find(".owl-controls").addClass("style3");


        }   
    }]);


/* =========================================================
7. Validate Form
============================================================ */

    if ($('.contact-form').length > 0) {
        Modernizr.load([
          {
            load:[ kopa_variable.url.template_directory_uri + '/js/jquery.form.min.js', kopa_variable.url.template_directory_uri + '/js/jquery.validate.min.js'],
            complete: function () {
                $('.contact-form').validate({
                    // Add requirements to each of the fields
                    rules: {
                        name: {
                            required: true,
                            minlength: 8
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        web: {
                            required: true,
                            minlength: 10
                        },
                        message: {
                            required: true,
                            minlength: 10
                        }
                    },
                    // Specify what error messages to display
                    // when the user does something horrid
                    messages: {
                        name: {
                            required: "Please enter your name.",
                            minlength: $.format("At least {0} characters required.")
                        },
                        email: {
                            required: "Please enter your email.",
                            email: "Please enter a valid email."
                        },
                        web: {
                            required: "Please enter your website.",
                            minlength: "Please enter a valid website url."
                        },
                        message: {
                            required: "Please enter a message.",
                            minlength: $.format("At least {0} characters required.")
                        }
                    },
                    // Use Ajax to send everything to processForm.php
                    submitHandler: function(form) {
                        $("#input-submit").attr("value", "Sending...");
                        $(form).ajaxSubmit({
                            success: function(responseText, statusText, xhr, $form) {
                                $("#response").html(responseText).hide().slideDown("fast");
                                $("#input-submit").attr("value", "Submit");
                            }
                        });
                        return false;
                    }
                });
            }
          }
        ]);
    };

    /*-- comment form --*/

    if ($('#comments-form').length > 0) {
        Modernizr.load([
          {
            load:[ kopa_variable.url.template_directory_uri + '/js/jquery.form.min.js', kopa_variable.url.template_directory_uri + '/js/jquery.validate.min.js'],
            complete: function () {
                $('#comments-form').validate({
                    // Add requirements to each of the fields
                    rules: {
                        name: {
                            required: true,
                            minlength: 8
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        phone: {
                            required: true,
                            phone: true
                        },
                        message: {
                            required: true,
                            minlength: 15
                        }
                    },
                    // Specify what error messages to display
                    // when the user does something horrid
                    messages: {
                        name: {
                            required: "Please enter your name.",
                            minlength: $.format("At least {0} characters required.")
                        },
                        email: {
                            required: "Please enter your email.",
                            email: "Please enter a valid email."
                        },
                        phone: {
                            required: "Please enter your phone.",
                            url: "Please enter a valid phone."
                        },
                        message: {
                            required: "Please enter a message.",
                            minlength: $.format("At least {0} characters required.")
                        }
                    },
                    // Use Ajax to send everything to processForm.php
                    submitHandler: function(form) {
                        $("#input-submit").attr("value", "Sending...");
                        $(form).ajaxSubmit({
                            success: function(responseText, statusText, xhr, $form) {
                                $("#response").html(responseText).hide().slideDown("fast");
                                $("#input-submit").attr("value", "Submit");
                            }
                        });
                        return false;
                    }
                });
            }
          }
        ]);
    };
   

/* =========================================================
8. Google Map
============================================================ */

var map;

if ($('.kopa-map').length > 0) {
    Modernizr.load([{
        load: [ kopa_variable.url.template_directory_uri + '/js/gmaps.js'],
            complete: function () {
          var id_map = $('.kopa-map').attr('id');
          var lat = parseFloat($('.kopa-map').attr('data-latitude'));
          var lng = parseFloat($('.kopa-map').attr('data-longitude'));
          var place = $('.kopa-map').attr('data-place');

      map = new GMaps({
          el: '#'+id_map,
          lat: lat,
          lng: lng,
          zoomControl : true,
          zoomControlOpt: {
              style : 'SMALL',
              position: 'TOP_LEFT'
          },
          panControl : false,
          streetViewControl : false,
          mapTypeControl: false,
          overviewMapControl: false
        });
        map.addMarker({
          lat: lat,
            lng: lng,
          title: place
        });
        }
    }]);
};



/* =========================================================
9. Breadking News
============================================================ */

Modernizr.load([
  {
    load: [kopa_variable.url.template_directory_uri + '/js/jquery.ticker.js',kopa_variable.url.template_directory_uri + '/js/site.js'],
    complete: function () {

        jQuery('#js-news').ticker({
            titleText: 'Breaking' 
        });
    }
  }
]);

  /* =========================================================
10. Scroll to top
============================================================ */

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

 /* =========================================================
11. Masonry
============================================================ */

    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + '/js/masonry.pkgd.min.js',   kopa_variable.url.template_directory_uri + '/js/imagesloaded.js'],
        complete: function () {

            var jQuerymasonry1 = $('.kopa-masonry-widget').find('.kopa-masonry-wrap');
            imagesLoaded(jQuerymasonry1, function () {
                jQuerymasonry1.masonry({
                    columnWidth: 1,
                    itemSelector: '.ms-item1'
                });
                jQuerymasonry1.masonry('bindResize')
            });

            var jQuerymasonry2 = $('.kopa-masonry-2-widget').find('.kopa-masonry-wrap');
            imagesLoaded(jQuerymasonry2, function () {
                jQuerymasonry2.masonry({
                    columnWidth: 1,
                    itemSelector: '.ms-item2'
                });
                jQuerymasonry2.masonry('bindResize')
            });

            var jQuerymasonry3 = $('.kopa-masonry-3-widget').find('.kopa-masonry-wrap');
            imagesLoaded(jQuerymasonry3, function () {
                jQuerymasonry3.masonry({
                    columnWidth: 1,
                    itemSelector: '.ms-item3'
                });
                jQuerymasonry3.masonry('bindResize')
            });

            var jQuerymasonry4 = $('.kopa-masonry-4-widget').find('.kopa-masonry-wrap');
            imagesLoaded(jQuerymasonry4, function () {
                jQuerymasonry4.masonry({
                    columnWidth: 1,
                    itemSelector: '.ms-item4'
                });
                jQuerymasonry4.masonry('bindResize')
            });

            var jQuerymasonry5 = $('.kopa-masonry-5-widget').find('.kopa-masonry-wrap');
            imagesLoaded(jQuerymasonry5, function () {
                jQuerymasonry5.masonry({
                    columnWidth: 1,
                    itemSelector: '.ms-item5'
                });
                jQuerymasonry5.masonry('bindResize')
            });

            var jQuerymasonry6 = $('.kopa-masonry-6-widget').find('.kopa-masonry-wrap');
            imagesLoaded(jQuerymasonry6, function () {
                jQuerymasonry6.masonry({
                    columnWidth: 1,
                    itemSelector: '.ms-item6'
                });
                jQuerymasonry6.masonry('bindResize')
            });

            var jQuerymasonry7 = $('.kopa-masonry-7-widget').find('.kopa-masonry-wrap');
            imagesLoaded(jQuerymasonry7, function () {
                jQuerymasonry7.masonry({
                    columnWidth: 1,
                    itemSelector: '.ms-item7'
                });
                jQuerymasonry7.masonry('bindResize')
            });

            var jQuerymasonry8 = $('.kopa-masonry-8-widget').find('.kopa-masonry-wrap');
            imagesLoaded(jQuerymasonry8, function () {
                jQuerymasonry8.masonry({
                    columnWidth: 1,
                    itemSelector: '.ms-item8'
                });
                jQuerymasonry8.masonry('bindResize')
            });
        }   
    }]);



/* ============================================
12. Bootstrap Slider
=============================================== */

if (jQuery('.kopa-slider-ip').length > 0) {

    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + '/js/bootstrap-slider.min.js'],
        complete: function () {
            jQuery('.kopa-slider-ip').slider({
                tooltip: "show"
            });
        }
    }]);
};

 /* =========================================================
13. Accordion Slider
============================================================ */

    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + '/js/jquery.zaccordion.min.js', kopa_variable.url.template_directory_uri + '/js/matchMedia.js',   
            kopa_variable.url.template_directory_uri + '/js/matchMedia.addListener.js',
            kopa_variable.url.template_directory_uri + '/js/enquire.min.js'],
        complete: function () {

            var as_width = $('.kopa-accordion-slider-widget').width();
            var ai_width = (as_width - 200)/as_width;
            var example = $('.acc-slider'),
            defaults = {
                slideClass: 'aslider',
                pause: true,
                timeout: 2500,
                speed: 800,
                startingSlide: 2,
                animationStart: function () {
                    example.children('li.aslider-previous').find('.entry-content').css('opacity', '0');
                    example.children('li.aslider-previous').find('.entry-view').css('opacity', '0');
                    example.children('li.aslider-open').find('.h5-content').css({
                        'opacity': '0'
                    });
                },
                animationComplete: function () {
                    example.children('li.aslider-open').find('.entry-content').css({
                        'opacity': '1'
                    });
                    example.children('li.aslider-open').find('.h5-content').css({
                        'opacity': '1'
                    });

                    example.children('li.aslider-open').find('.entry-view').css({
                        'opacity': '1'
                    });
                },
                buildComplete: function () {
                    example.css('visibility', 'visible');
                    example.children('li.aslider-closed').find('.entry-view').css('opacity', '0');
                    example.children('li.aslider-open').find('.entry-content').css('opacity', '1');
                    example.children('li.aslider-open').find('.h5-content').css({
                        'opacity': '1'
                    });
                }
            };

            function build(x) {
                var opts, current;
                if (!$.isEmptyObject(example.data())) { /* If an zAccordion is found, rebuild it with new settings. */
                    example.css('visibility', 'hidden');
                    current = example.data('current');
                    opts = $.extend({
                        startingSlide: current
                    }, defaults, x);
                    example.zAccordion('destroy', {
                        removeStyleAttr: true,
                        removeClasses: true,
                        destroyComplete: {
                            afterDestroy: function() {
                                try {
                                    console.log('zAccordion destroyed! Attempting to rebuild...');
                                } catch (e) {}
                            },
                            rebuild: opts
                        }
                    });
                } else { /* If no zAccordion is found, build one from scratch. */
                    example.css('visibility', 'hidden');
                    opts = $.extend(defaults, x);
                    example.zAccordion(opts);
                }
            }


/* ============================================
14. Enquire
=============================================== */

            /* A unique Media Query is registered for each screen size. */
            enquire.register('screen and (min-width: 1160px)', { /* Standard screen sizes and a default build for browsers that are unsupported. */
                match : function () {
                    build({
                        width: as_width,
                        slideWidth: 778,
                        height: 394
                    });
                } /* The *true* value below means this media query will fire by default. */
            }, true).register('screen  and (min-width: 1024px) and (max-width: 1159px)', {
                match : function () {
                    build({
                        width: 980,
                        slideWidth: 880,
                        height: 446
                    });
                }
            }).register('screen and (min-width: 980px) and (max-width: 1023px)', {
                match : function () {
                    build({
                        width: 940,
                        slideWidth: 840,
                        height: 426
                    });
                }
            }).register('screen and (min-width: 800px) and (max-width: 979px)', {
                match : function () {
                    build({
                        width: 760,
                        slideWidth: 660,
                        height: 336
                    });
                }
            }).register('screen and (min-width: 768px) and (max-width: 799px)', {
                match : function () {
                    build({
                        width: 728,
                        slideWidth: 628,
                        height: 320
                    });
                }
            }).register('screen and (min-width: 720px) and (max-width: 767px)', {
                match : function () {
                    build({
                        width: 680,
                        slideWidth: 580,
                        height: 294
                    });
                }
            }).register('screen and (min-width: 640px) and (max-width: 719px)', {
                match : function () {
                    build({
                        width: 600,
                        slideWidth: 550,
                        height: 280
                    });
                }
            }).register('screen and (min-width: 480px) and (max-width: 639px)', {
                match : function () {
                    build({
                        width: 440,
                        slideWidth: 400,
                        height: 202
                    });
                }
            }).register('screen and (min-width: 360px) and (max-width: 479px)', {
                match : function () {
                    build({
                        width: 320,
                        slideWidth: 300,
                        height: 150
                    });
                }
            }).register('screen and (min-width: 320px) and (max-width: 359px)', {
                match : function () {
                    build({
                        width: 300,
                        slideWidth: 280,
                        height: 140
                    });
                }
            });
        }   

    }]);

/* =========================================================
15. Fix css ie8
============================================================ */
    $(".e-heading p:last-child").css("margin-bottom", "0");
    $(".sf-mega.style1 .sf-mega-section:last-child").css("border-right", "none");
    $(".sf-mega.style2 .sf-mega-section:last-child").css("border-right", "none");
    $(".sf-mega-mobile .sf-mega-section-mobile .sub-menu li:last-child a").css("padding-bottom", "0");
    $(".widget-area-16 .widget:last-child").css("margin-bottom", "0");
    $(".widget-area-17 .widget:last-child").css("margin-bottom", "0");


/* ============================================
16. Match height
=============================================== */

    if ($('.bottom-area-2').length > 0) {
    
        Modernizr.load([{
            load: [kopa_variable.url.template_directory_uri + '/js/jquery.matchHeight-min.js'],
            complete: function () {

                var post_1 = $('.bottom-area-2');
                
                post_1.each(function() {
                    $(this).children('div').matchHeight();
                });
            }
        }]);

    };

    if ($('.warea-wrap').length > 0) {
    
        Modernizr.load([{
            load: [kopa_variable.url.template_directory_uri + '/js/jquery.matchHeight-min.js'],
            complete: function () {

                var post_1 = $('.warea-wrap');
                
                post_1.each(function() {
                    $(this).children('div').matchHeight();
                });
            }
        }]);

    };


/* =========================================================
21. Sticky menu
============================================================ */ 

    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + '/js/waypoints.js', kopa_variable.url.template_directory_uri + '/js/waypoints-sticky.js'],
        complete: function () {
            jQuery('.kopa-header-bottom').waypoint('sticky');
        }
    }]);

});
