jQuery(document).ready(function($) {
	// //check the media query and bind corresponding events
	// var MQ = deviceType();
	// var bindToggle = false;

	// bindEvents(MQ, true);

	// $(window).on('resize', function() {
 //        MQ = deviceType();
 //        bindEvents(MQ, bindToggle);
 //        if (MQ == 'mobile') bindToggle = true;
 //        if (MQ == 'desktop') bindToggle = false;
 //    });

    // function scrollAnimation() {
    //     //normal scroll - use requestAnimationFrame (if defined) to optimize performance
    //     (!window.requestAnimationFrame) ? animateSection(): window.requestAnimationFrame(animateSection);
    // }

    // function animateSection() {
    //     var scrollTop = $(window).scrollTop(),
    //         windowHeight = $(window).height(),
    //         windowWidth = $(window).width();
    //     sectionsAvailable.each(function() {
    //         var actualBlock = $(this),
    //             offset = scrollTop - actualBlock.offset().top;
    //         //according to animation type and window scroll, define animation parameters
    //         var animationValues = setSectionAnimation(offset, windowHeight, animationType);
    //         transformSection(actualBlock.children('div'), animationValues[0], animationValues[1], animationValues[2], animationValues[3], animationValues[4]);
    //         (offset >= 0 && offset < windowHeight) ? actualBlock.addClass('visible'): actualBlock.removeClass('visible');
    //     });
    //     checkNavigation();
    // }

    $('#io_header .navbar-toggle').click(function(){
    	var navBar  = $('.navbar-toggle');
    	if (navBar.hasClass('nav-icon') == false) {
    		$('#io_header .navbar-toggle').addClass('nav-icon');
    		console.log(1);
    	} else {
    		console.log(2);
    		$('#io_header .navbar-toggle').removeClass('nav-icon');
    	}
    });

    $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
})