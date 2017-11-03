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
	$('#js-contact-form').hide();
});
	

