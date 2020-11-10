
$(document).ready(function () {    
    var burger = $('.burger')
    var click = false
    burger.click(function() {
        click = !click
        if(click) {
            $('.mob__header').css({
                top: '0'
            })
        } else {
            $('.mob__header').css({
                top: '-100%'
            })
        }
    })

    AOS.init({
        offset: 100, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 500 // values from 0 to 3000, with step 50ms
      });

    $('.num').counterUp({
        delay: 10,
        time: 1000
    });

    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 2000
    //   });
    //   $('.counter').addClass('animated fadeInDownBig');
    //   $('h3').addClass('animated fadeIn');

})