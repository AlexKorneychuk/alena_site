// $(window).scroll(function () {
//
//     let st = $(this).scrollTop();
//
//     $(".text-test").css({
//
//         "transform" : "translate(0%, " + st * 2 + "%"
//         })
//
// });

$(window).load(function(){


    $('.slider').fractionSlider({

        'slideTransition' : 'none', // default slide transition
        'slideTransitionSpeed' : 2000, // default slide transition time
        'slideEndAnimation' : true, // if set true, objects will transition out before next slide moves in
        'position' : '0,0', // default position | should never be used
        'transitionIn' : 'left', // default in - transition
        'transitionOut': 'left', // default out - transition
        'fullWidth' : true, // transition over the full width of the window
        'delay' : 0, // default delay for elements
        'timeout' : 2000, // default timeout before switching slides
        'speedIn' : 2500, // default in - transition speed
        'speedOut' : 1000, // default out - transition speed
        'easeIn' : 'easeOutExpo', // default easing in
        'easeOut' : 'easeOutCubic', // default easing out

        'controls' : false, // controls on/off
        'pager' : false, // pager inside of the slider on/off OR $('someselector') for a pager outside of the slider
        'autoChange' : true, // auto change slides
        'pauseOnHover' : false, // Pauses slider on hover (current step will still be completed)

        'backgroundAnimation' : false, // background animation
        'backgroundElement' : null, // element to animate | default fractionSlider element
        'backgroundX' : 500, // background animation x distance
        'backgroundY' : 500, // background animation y distance
        'backgroundSpeed' : 2500, // default background animation speed
        'backgroundEase' : 'easeOutCubic', // default background animation easing

        'responsive' : true, // responsive slider (see below for some implementation tipps)
        'increase' : false, // if set, slider is allowed to get bigger than basic dimensions
        'dimensions' : '1400, 400',
        /* IMPORTANT:
        if you use the responsive option, you have to set dimensions to the origin (width,height) in px
        you use for data-position,heights of elements, etc. */

        'startCallback' : null, // callbacks, see below for more information on callbacks
        'startNextSlideCallback' : null,
        'stopCallback' : null,
        'pauseCallback' : null,
        'resumeCallback' : null,
        'nextSlideCallback' : null,
        'prevSlideCallback' : null,
        'pagerCallback' : null
    });

});

$(document).ready(function () {


    $(document).on('click', '.arrow', function () {
        $('html, body').animate({scrollTop: $('a[name="' + this.hash.slice(1) + '"]').offset().top}, 1000);
        return false;
    });


});

$(function () {

//Настраиваем instafeed
    let foundImages = 0;
    let maxImages = 8;
    let feed = new Instafeed({

        get: 'user',
        userId: '1258860011',
        accessToken: '1258860011.1677ed0.3ffd7ed42db7450486db0d330afb5fbf',
        target: 'instafeed',
        links: true,

        sortBy: 'most-recent',
        resolution: 'low_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap">' +
        '<a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">' +
        '{{caption}}<div class="date">{{model.date}}</div></div></div></div>',

        // ... other settings
        limit: 60,
        success: function () {
            foundImages = 0;
        },
        filter: function (image) {
            if (image.tags.indexOf('бровиоболонь') >= 0 && foundImages < maxImages) {
                foundImages = foundImages + 1;
                return true;
            }
            return false;
        },


    });
    feed.run();

});