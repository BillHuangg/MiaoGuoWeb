//  
jQuery(document).ready(function ($) {
	
	//
	$(window).load(reset);
	$(window).resize(reset);  

	function reset(){
		centreNavigation();
		ResetBackgroudBox();
	}

	// Background Background Image Reset
	function ResetBackgroudBox()
	{
		var windowHeight = $(window).height();
		if (windowHeight < 700) {
			windowHeight = 700;
		}
		else if (windowHeight > 1200) {
			windowHeight = 1200;
		}
		$(".backgroundBox").css("min-height", windowHeight + "px");
	}

	// Navigation
	function centreNavigation(){
		var navigationWidth = $(".navigationContainer").width();
		var windowWidth = $(window).width();
		var navigatiionLeftPosition = windowWidth / 2 - navigationWidth / 2;
		$(".navigationContainer").css("left",navigatiionLeftPosition + "px");
	}


});