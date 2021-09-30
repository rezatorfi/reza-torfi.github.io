$(function() {
	$(window).on("load resize", function() {
		$(".background-image").css("height", window.innerHeight);
	})
})

// Implements Bootstrap's Scrollspy on the nav element
$('body').scrollspy({target: '#topNav', offset: 50});

// This implements smooth scrolling
$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 50
    }, 800);
});

// Implements a scroll listener which adds text animation class
var $window = $(window);
var $animateText = $(".animated");


function checkInView() {
	var windowHeight = $window.height();
	var windowTop = $window.scrollTop();
	var windowBottom = windowHeight + windowTop;

	// Cycle through each DOM element with .animated class and check to see if in view
	$.each($animateText, function() {
		var $element = $(this);
		var elementHeight = $element.outerHeight();
		var elementTop = $element.offset().top;
		var elementBottom = elementTop + elementHeight;

		// If in view, add animation class
		if (elementTop <= windowBottom && elementBottom >= windowTop) {
			$element.addClass('flipInX');
		}
	})
}

$window.on('scroll resize', checkInView);


// Logic for up arrow
window.onscroll = function() {showArrow()};

// function showArrow() {
// 	var $upButton = $(".upButton");
// 	var $windowWidth = $(window).width();
// 	if ((document.body.scrollTop >= 415 || document.documentElement.scrollTop >= 415) && $windowWidth > 768) {
// 		$upButton.addClass('showButton');
// 	}
// 	else {
// 		$upButton.removeClass('showButton');
// 	}
// }

function showArrow() {
	var $upButton = $('.upButton');
	var $windowWidth = $(window).width();
	var $windowTop = $(window).scrollTop();
	if ($windowTop >= 415 && $windowWidth > 768) {
		$upButton.addClass('showButton');
	}
	else {
		$upButton.removeClass('showButton');
	}
}