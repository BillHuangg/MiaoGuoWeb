//  
jQuery(document).ready(function ($) {
	
	//********************************** init **********************************//
	$(".navigationList").hide();


	//********************************** element response **********************************//
	$(window).load(reset);
	$(window).resize(reset);  

	function reset(){
		
		// 导航居中
		//centreNavigation();

		// 背景图高度响应浏览器高度
		// ResetBackgroudBox();

		// Test Work Page Size
		resetWorkPage();
	}

	// Background Background Image Reset
	function ResetBackgroudBox()
	{
		var windowHeight = $(window).height();
		if (windowHeight < 770) {
			windowHeight = 770;
		}
		// else if (windowHeight > 900) {
		// 	windowHeight = 900;
		// }
		// $(".backgroundBox").css("height", windowHeight + "px");
		// $(".contentBox").css("height", (windowHeight) + "px");
		// $(".contentBox").css("margin-top", "-" + (windowHeight * 0.8) + "px");
	}


	//********************************** Navigation **********************************//
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
		//$("#firstPage").css("background-image","url(Resources/firstPageBG_blur.jpg)");
		$(".navigationContainer").addClass("circleBorder");
		//$(".logoBox").css("margin","0");
		$(".navigationList").show();

		$("#firstPageBG").addClass("backgroundBlur");
	});

	$(".navigationContainer").mouseleave(function(){
		//$("#firstPage").css("background-image","url(Resources/firstPageBG.jpg)");
		$(".navigationContainer").removeClass("circleBorder");
		$(".navigationList").hide();
		$("#firstPageBG").removeClass("backgroundBlur");

	});

	//********************************** WorkPage **********************************//
	function resetWorkPage(){
		var windowWidth = $(window).width();

		if (windowWidth < 1200) {
			windowWidth = 1200;
		}

		var pageHeight = 3332 / 1200 * windowWidth;
		
		$("#work_1_Page").css("width", windowWidth + "px");
		$("#work_1_Page").css("height", pageHeight + "px");

		// set video position
		var rate = 2733 / 3333;
		var videoMarginTop = rate * pageHeight;
		$("#embedVideo").css("margin-top", videoMarginTop);
		var videoMarginLeft =  -620 * 0.1;//$("#embedVideo").css("margin-left") * 0.7;
		$("#embedVideo").css("margin-left", videoMarginLeft);

	}

	function setVideoPosition(){
		var workPageHeight = $("#work_1_Page").height();
	}


});