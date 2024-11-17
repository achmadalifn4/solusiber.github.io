(function($) {
    "use strict";

    // Activate rtl slider
    let rtl_setting = $('body').hasClass("rtl") ? true : false;

    var runok_contact_form = {
        runok_contact_Form: function($scope, $) {
            try {
                (function($) {
                    // Data Background
                    $("[data-background").each(function() {
                        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
                    });

                    /* Odometer */
                    $(".odometer").waypoint(
                        function() {
                            var odo = $(".odometer");
                            odo.each(function() {
                                var countNumber = $(this).attr("data-count");
                                $(this).html(countNumber);
                            });
                        }, {
                            offset: "80%",
                            triggerOnce: true,
                        }
                    );
                })(jQuery)
            } catch (e) {}
        }
    };

    function newsTicker() {

        // carouselTicker initail 
        $('.carouselTicker-nav').carouselTicker({});
        $(".carouselTicker-start").carouselTicker({
            direction: "next",
        });

    }

    function heroSlider() {

        function sliderAnimations(elements) {
            var animationEndEvents = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data("delay");
                var $animationDuration = $this.data("duration");
                var $animationType = "runok-animation " + $this.data("animation");
                $this.css({
                    "animation-delay": $animationDelay,
                    "-webkit-animation-delay": $animationDelay,
                    "animation-duration": $animationDuration,
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
        var sliderOptions = {
            speed: 1500,
            autoplay: {
                delay: 7000,
            },
            disableOnInteraction: false,
            initialSlide: 0,
            parallax: false,
            mousewheel: false,
            loop: true,
            grabCursor: true,
            effect: "fade",
            navigation: {
                nextEl: ".slider-arrow .slider-next",
                prevEl: ".slider-arrow .slider-prev",
            },
            pagination: {
                el: ".runok-swiper-pagination",
                clickable: true,
            },
        };
        sliderOptions.on = {
            slideChangeTransitionStart: function() {
                var swiper = this;
                var animatingElements = $(swiper.slides[swiper.activeIndex]).find("[data-animation]");
                sliderAnimations(animatingElements);
            },

            resize: function() {
                this.update();
            },
        };

        var swiper = new Swiper(".runok-slider-2", sliderOptions);


        // Slider 1

        // Sliderthumb
        var sliderThumb = new Swiper(".slider-tab", {
            spaceBetween: 20,
            slidesPerView: 3,
        });
        var slider2Options = {
            speed: 1500,
            autoplay: {
                delay: 7000,
            },
            disableOnInteraction: false,
            initialSlide: 0,
            parallax: false,
            mousewheel: false,
            loop: true,
            grabCursor: true,
            effect: "fade",
            navigation: {
                nextEl: ".slider-arrow .slider-next",
                prevEl: ".slider-arrow .slider-prev",
            },
            thumbs: {
                swiper: sliderThumb,
            },
        };
        slider2Options.on = {
            slideChangeTransitionStart: function() {
                var swiper = this;
                var animatingElements = $(swiper.slides[swiper.activeIndex]).find("[data-animation]");
                sliderAnimations(animatingElements);
            },

            resize: function() {
                this.update();
            },
        };

        var swiper2 = new Swiper(".runok-slider", slider2Options);

    }

    var runok_counter = {
        runok_Counter: function($scope, $) {
            try {
                (function($) {
                    /* Odometer */
                    $(".odometer").waypoint(
                        function() {
                            var odo = $(".odometer");
                            odo.each(function() {
                                var countNumber = $(this).attr("data-count");
                                $(this).html(countNumber);
                            });
                        }, {
                            offset: "80%",
                            triggerOnce: true,
                        }
                    );
                })(jQuery)
            } catch (e) {}
        }
        
    };

    
    function runokServices() {

        // Service Carousel
        var swiperService = new Swiper(".service-carousel", {
            slidesPerView: 4,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            reverseDirection: rtl_setting,
            navigation: {
                nextEl: ".service-section .swiper-prev",
                prevEl: ".service-section .swiper-next",
            },
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 25,
                },
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                },
            },
        });
    };

    function testimonialSlider() {

        var swiperTesti = new Swiper(".testi-carousel", {
            slidesPerView: 3,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 400,
            reverseDirection: rtl_setting,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 25,
                },
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
            },
        });

        var swiperTesti = new Swiper(".testi-carousel-2", {
            slidesPerView: 1,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 400,
            reverseDirection: rtl_setting,
            navigation: {
                nextEl: ".testi-top .swiper-prev",
                prevEl: ".testi-top .swiper-next",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 25,
                },
                767: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
            },
        });

        // Testimonial Carousel 3
        var testimonialThumb = new Swiper(".thumb-carousel", {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 0,
            loop: false,
            autoplay: true,
            centerSlides: true,
            speed: 600,
        });
        var testimonials = new Swiper(".content-carousel", {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: true,
            speed: 600,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            thumbs: {
                swiper: testimonialThumb,
            },
        });
    };

    function callToAction() {

        $("[data-background").each(function() {
            $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
        });

    };

    function brandSlider() {

        var swiperSponsor = new Swiper(".sponsor-carousel", {
            slidesPerView: 5,
            spaceBetween: 50,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 400,
            reverseDirection: rtl_setting,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 25,
                },
                767: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 5,
                    slidesPerGroup: 1,
                },
            },
        });

        var swiperBlog = new Swiper(".sponsor-carousel-2", {
            slidesPerView: 6,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            reverseDirection: rtl_setting,
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 25,
                },
                767: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 6,
                    slidesPerGroup: 1,
                },
            },
        });

        var swiperSponsor = new Swiper(".sponsor-carousel-3", {
            slidesPerView: 6,
            spaceBetween: 40,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
                767: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                },
                1024: {
                    slidesPerView: 6,
                    slidesPerGroup: 1,
                },
            },
        });

    };

    function portfolioSlider() {

        var swiperProject = new Swiper(".project-carousel", {
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: true,
            autoplay: false,
            grabcursor: true,
            initialSlide: -1,
            speed: 600,
            reverseDirection: rtl_setting,
            navigation: {
                nextEl: ".project-section .swiper-prev",
                prevEl: ".project-section .swiper-next",
            },
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
        });

        var swiperProject = new Swiper(".project-carousel-2", {
            slidesPerView: 1,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            centerSlides: true,
            navigation: {
                nextEl: ".project-carousel-2 .swiper-prev",
                prevEl: ".project-carousel-2 .swiper-next",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 25,
                },
                767: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
            },
        });

    };

    $(window).on("elementor/frontend/init", function() {
        elementorFrontend.hooks.addAction("frontend/element_ready/contact_form.default", runok_contact_form.runok_contact_Form);
        elementorFrontend.hooks.addAction('frontend/element_ready/news_ticker.default', newsTicker);
        elementorFrontend.hooks.addAction('frontend/element_ready/runok_hero_slider.default', heroSlider);
        elementorFrontend.hooks.addAction("frontend/element_ready/counter.default", runok_counter.runok_Counter);
        elementorFrontend.hooks.addAction("frontend/element_ready/services.default", runokServices);
        elementorFrontend.hooks.addAction("frontend/element_ready/testimonial_slider.default", testimonialSlider);
        elementorFrontend.hooks.addAction("frontend/element_ready/cta.default", callToAction);
        elementorFrontend.hooks.addAction("frontend/element_ready/brand_slider.default", brandSlider);
        elementorFrontend.hooks.addAction("frontend/element_ready/portfolio_slider.default", portfolioSlider);
    });


})(jQuery);