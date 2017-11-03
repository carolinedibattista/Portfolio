/* 
--------------------------------------------------------------
Web site is built on the foundation framework.
--------------------------------------------------------------
*/
$(document).foundation();

$(document).ready(function()
{
	"use strict";
	
	
	//  -----------------------------------------------------------------------------
	//  Stick the menu to the top of the web page.
	//  -----------------------------------------------------------------------------
	$('.title-bar').on('sticky.zf.stuckto:top', function(){
	  $(this).addClass('shrink');
	}).on('sticky.zf.unstuckfrom:top', function(){
	  $(this).removeClass('shrink');
	});

	
	//  -----------------------------------------------------------------------------
	//  Creates a responsive slick slider
	//  -----------------------------------------------------------------------------	
	$('.carouselSlider').slick({
		center: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
        arrows: false,
		speed: 300,
		responsive: [
	{
		breakpoint: 1024,
		settings: {
		slidesToShow: 2,
		slidesToScroll: 2,
		infinite: true,
		dots: true,
        arrows: false
	  }
	},
	{
		breakpoint: 768,
		settings: {
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: true,
        arrows: false
	  }
	},
	{
		breakpoint: 480,
		settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
        arrows: false
	  }
	}
	// You can unslick at a given breakpoint now by adding:
	// settings: "unslick"
	// instead of a settings object
	]
	}); 
	
});
	

