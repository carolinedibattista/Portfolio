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
	$('.walkForAnimals').hide();

	
	//  -----------------------------------------------------------------------------
	//  Adding animation effects to the years of experience on the resume page.
	//  -----------------------------------------------------------------------------

	setTimeout(function()
	{				
		$('.yrsExperience').removeClass('textWhite');
		$('.yrsExperience').addClass('textNavyBlue');
		$('.yrsExperience').addClass('magictime vanishIn');
	}, 500);
	
	//  -----------------------------------------------------------------------------
	//  Adding slide animation to the "Walk for Animals" poster and waypoint so that 
	//  the animation occurs once the user has scrolled to the appropriate place on 
	//  the screen.
	//
	//  The timer is to allow enough time for the user to notice the poster has
	//  disappeared before they are redisplayed.
	//  -----------------------------------------------------------------------------
	var walkForAnimalsDisplay = $('#waypointExperienceAnimation').waypoint(function(direction) 
	{
		if (direction === 'down')
		{
/*			$('.walkForAnimals').hide();*/

			setTimeout(function()
			{
				$('.walkForAnimals').show();
				$('.walkForAnimals').addClass('magictime slideLeftReturn');
			}, 500);
		}
	});

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
	
	//  -----------------------------------------------------------------------------
	//  Skill Set Animation
	//  First two lines of the animation reset the slider bars and dots back to the
	//  left-hand-side of the slider.  This way, when the waypoint is triggered, all
	//  animation starts from the left-hand-side and does not over-run the slider area.
	//  -----------------------------------------------------------------------------
	var skillSetAnimation = $('#waypointSkillSetAnimation').waypoint(function(direction)
	{
		// alert ('Skill Set Display: ' + this.triggerPoint);
		$('#skillHTML .sliderFillBar').animate({width: '1'}, 0);
		$('#skillHTML .sliderDot').animate({ left:'0'}, 0);
		$('#skillHTML .sliderFillBar').animate({width: '216'}, 1000);
		$('#skillHTML .sliderDot').animate({ left:'+=216'}, 1000);

		$('#skillCSS3 .sliderFillBar').animate({width: '1'}, 0);
		$('#skillCSS3 .sliderDot').animate({ left:'0'}, 0);
		$('#skillCSS3 .sliderFillBar').animate({width: '216'}, 1000);
		$('#skillCSS3 .sliderDot').animate({ left:'+=216'}, 1000);

		$('#skillJavaScript .sliderFillBar').animate({width: '1'}, 0);
		$('#skillJavaScript .sliderDot').animate({ left:'0'}, 0);
		$('#skillJavaScript .sliderFillBar').animate({width: '189'}, 1000);
		$('#skillJavaScript .sliderDot').animate({ left:'+=189'}, 1000);

		$('#skilljQuery .sliderFillBar').animate({width: '1'}, 0);
		$('#skilljQuery .sliderDot').animate({ left:'0'}, 0);
		$('#skilljQuery .sliderFillBar').animate({width: '162'}, 1000);
		$('#skilljQuery .sliderDot').animate({ left:'+=162'}, 1000);

		$('#skillBootstrap .sliderFillBar').animate({width: '1'}, 0);
		$('#skillBootstrap .sliderDot').animate({ left:'0'}, 0);
		$('#skillBootstrap .sliderFillBar').animate({width: '189'}, 1000);
		$('#skillBootstrap .sliderDot').animate({ left:'+=189'}, 1000);

		$('#skillFoundation .sliderFillBar').animate({width: '1'}, 0);
		$('#skillFoundation .sliderDot').animate({ left:'0'}, 0);
		$('#skillFoundation .sliderFillBar').animate({width: '189'}, 1000);
		$('#skillFoundation .sliderDot').animate({ left:'+=189'}, 1000);

		$('#skillAdobeTools .sliderFillBar').animate({width: '1'}, 0);
		$('#skillAdobeTools .sliderDot').animate({ left:'0'}, 0);
		$('#skillAdobeTools .sliderFillBar').animate({width: '216'}, 1000);
		$('#skillAdobeTools .sliderDot').animate({ left:'+=216'}, 1000);

		$('#skillUIUX .sliderFillBar').animate({width: '1'}, 0);
		$('#skillUIUX .sliderDot').animate({ left:'0'}, 0);
		$('#skillUIUX .sliderFillBar').animate({width: '243'}, 1000);
		$('#skillUIUX .sliderDot').animate({ left:'+=243'}, 1000);

		$('#skillUsabilityTesting .sliderFillBar').animate({width: '1'}, 0);
		$('#skillUsabilityTesting .sliderDot').animate({ left:'0'}, 0);
		$('#skillUsabilityTesting .sliderFillBar').animate({width: '243'}, 1000);
		$('#skillUsabilityTesting .sliderDot').animate({ left:'+=243'}, 1000);

		$('#skillPhotography .sliderFillBar').animate({width: '1'}, 0);
		$('#skillPhotography .sliderDot').animate({ left:'0'}, 0);
		$('#skillPhotography .sliderFillBar').animate({width: '216'}, 1000);
		$('#skillPhotography .sliderDot').animate({ left:'+=216'}, 1000);

		$('#skillDigitalPublishing .sliderFillBar').animate({width: '1'}, 0);
		$('#skillDigitalPublishing .sliderDot').animate({ left:'0'}, 0);
		$('#skillDigitalPublishing .sliderFillBar').animate({width: '189'}, 1000);
		$('#skillDigitalPublishing .sliderDot').animate({ left:'+=189'}, 1000);

		$('#skillTechnicalWriting .sliderFillBar').animate({width: '1'}, 0);
		$('#skillTechnicalWriting .sliderDot').animate({ left:'0'}, 0);
		$('#skillTechnicalWriting .sliderFillBar').animate({width: '243'}, 1000);
		$('#skillTechnicalWriting .sliderDot').animate({ left:'+=243'}, 1000);

		$('#skillAnalytical .sliderFillBar').animate({width: '1'}, 0);
		$('#skillAnalytical .sliderDot').animate({ left:'0'}, 0);
		$('#skillAnalytical .sliderFillBar').animate({width: '253'}, 1000);
		$('#skillAnalytical .sliderDot').animate({ left:'+=243'}, 1000);

		$('#skillCreative .sliderFillBar').animate({width: '1'}, 0);
		$('#skillCreative .sliderDot').animate({ left:'0'}, 0);
		$('#skillCreative .sliderFillBar').animate({width: '216'}, 1000);
		$('#skillCreative .sliderDot').animate({ left:'+=216'}, 1000);

		$('#skillCommitted .sliderFillBar').animate({width: '1'}, 0);
		$('#skillCommitted .sliderDot').animate({ left:'0'}, 0);
		$('#skillCommitted .sliderFillBar').animate({width: '270'}, 1000);
		$('#skillCommitted .sliderDot').animate({ left:'+=270'}, 1000);

		$('#skillDetailOriented .sliderFillBar').animate({width: '1'}, 0);
		$('#skillDetailOriented .sliderDot').animate({ left:'0'}, 0);
		$('#skillDetailOriented .sliderFillBar').animate({width: '270'}, 1000);
		$('#skillDetailOriented .sliderDot').animate({ left:'+=270'}, 1000);

		$('#skillCommunication .sliderFillBar').animate({width: '1'}, 0);
		$('#skillCommunication .sliderDot').animate({ left:'0'}, 0);
		$('#skillCommunication .sliderFillBar').animate({width: '243'}, 1000);
		$('#skillCommunication .sliderDot').animate({ left:'+=243'}, 1000);

		$('#skillLeadership .sliderFillBar').animate({width: '1'}, 0);
		$('#skillLeadership .sliderDot').animate({ left:'0'}, 0);
		$('#skillLeadership .sliderFillBar').animate({width: '243'}, 1000);
		$('#skillLeadership .sliderDot').animate({ left:'+=243'}, 1000);	
	});
	
	//  -----------------------------------------------------------------------------
	//  Colorbox for thumbnail images
	//  -----------------------------------------------------------------------------
	$(".thumbnailWalkForAnimals").colorbox({rel:'thumbnailWalkForAnimals', transition:"fade"});
	$(".thumbnailWalkForAnimalsSm").colorbox({rel:'thumbnailWalkForAnimalsSm', transition:"fade"});
	$(".thumbnailWalkForAnimalsMobile").colorbox({rel:'thumbnailWalkForAnimalsMobile', transition:"fade"});
	

	//  -----------------------------------------------------------------------------
	//  Used to flip between Work Achievements and Timeline
	//  -----------------------------------------------------------------------------	
	$("#card").flip();
	
});
	

