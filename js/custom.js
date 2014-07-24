//  
jQuery(document).ready(function ($) {
	
	//
	$(".navigationList").hide();


	$(window).load(reset);
	$(window).resize(reset);  

	function reset(){
		centreNavigation();
		ResetBackgroudBox();

		setTitleDisplayEffect();
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

	// TODO: 在第一次切换时，出现黑屏（加载）
	// 		 需要具有判断目前正处于第几页的功能
	$(".logoBox").mouseenter(function(){
		//background image blur
		$("#firstPage").css("background-image","url(Resources/firstPageBG_blur.png)");
		$(".navigationContainer").addClass("circleBorder");
		//$(".logoBox").css("margin","0");
		$(".navigationList").show();

	});

	$(".navigationContainer").mouseleave(function(){
		$("#firstPage").css("background-image","url(Resources/firstPageBG.png)");
		$(".navigationContainer").removeClass("circleBorder");
		$(".navigationList").hide();
	});



	// Part 1
	function setTitleDisplayEffect(){
		var titleWidth = 540;
		var title = $(".title");
		var windowWidth = $(window).width();
		if (windowWidth < titleWidth) {
			if (title.hasClass("titleLetterSpace")) {
				title.removeClass("titleLetterSpace");
			};
		}
		else if (windowWidth > titleWidth) {
			title.addClass("titleLetterSpace");
		};
	}


});