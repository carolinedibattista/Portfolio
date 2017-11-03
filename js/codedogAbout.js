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
	//  Hiding component on DOM load. These components will be switched on/displayed
	//  later.
	//  -----------------------------------------------------------------------------
	$('.hobbyCycling').hide();
	$('.hobbyPhotography').hide();
	$('.hobbyKarate').hide();
	$('.hobbyArtist').hide();
	$('.hobbyTravelling').hide();
	$('.hobbyBowling').hide();

	
	//  -----------------------------------------------------------------------------
	//  Adding slide animation to the hobby icons and waypoint so that the animation
	//  occurs once the user has scrolled to the appropriate place on the screen.
	//
	//  The animation does not occur on a mobile device.
	//  -----------------------------------------------------------------------------	
	var hobbiesDisplay = $('#waypointHobbiesAnimation').waypoint(function(direction) 
	{
		if (direction === 'down')
		{
			$('.hobbyTravelling').show();
			$('.hobbyArtist').show();
			$('.hobbyKarate').show();
			$('.hobbyPhotography').show();
			$('.hobbyCycling').show();
			$('.hobbyBowling').show();
			
			$('.hobbyTravelling').addClass('magictime slideUpReturn');
			$('.hobbyArtist').addClass('magictime slideUpReturn');
			$('.hobbyPhotography').addClass('magictime slideDownReturn');
			$('.hobbyKarate').addClass('magictime slideDownReturn');
			$('.hobbyCycling').addClass('magictime slideUpReturn');
			$('.hobbyBowling').addClass('magictime slideUpReturn');
		}
	});
});
	

