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
	//  Adding typewriter animation effects to the position statement on the home page.
	//  -----------------------------------------------------------------------------
	$('#portfolioStatement').typeIt({
		 speed: 75,
		 autoStart: false
	})
		.tiPause(1500)
		.tiType('There is nothing more rewarding than turning user-centric designs into real-life applications.');

});
	

