//  
jQuery(document).ready(function ($) {
	
	//********************************** init **********************************//
	$(".navigationList").hide();


	//********************************** element response **********************************//
	$(window).load(reset);
	$(window).resize(reset);  

	function reset(){
		
		// 导航居中
		centreNavigation();

		// 背景图高度响应浏览器高度
		ResetBackgroudBox();

		// Part 1 title 
		setTitleDisplayEffect();
		
		// Part 2 icons
		setIconsWidth();

		// TODO: Part 3 members
		//setMembersWidth();

		// Part 4 block
		setBlockSize();
	}

	// Background Background Image Reset
	function ResetBackgroudBox()
	{
		var windowHeight = $(window).height();
		if (windowHeight < 770) {
			windowHeight = 770;
		}
		else if (windowHeight > 900) {
			windowHeight = 900;
		}
		$(".backgroundBox").css("min-height", windowHeight + "px");
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
		$("#firstPage").css("background-image","url(Resources/firstPageBG_blur.jpg)");
		$(".navigationContainer").addClass("circleBorder");
		//$(".logoBox").css("margin","0");
		$(".navigationList").show();
	});

	$(".navigationContainer").mouseleave(function(){
		$("#firstPage").css("background-image","url(Resources/firstPageBG.jpg)");
		$(".navigationContainer").removeClass("circleBorder");
		$(".navigationList").hide();
	});


	//********************************** Part 1 **********************************//
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


	//********************************** Part 2 **********************************//
	function setIconsWidth(){
		var windowWidth = $(window).width();
		var defaultIconsWidthLimitation = 630;

		if (windowWidth < defaultIconsWidthLimitation) {
			$(".icons").css("width","300");
		}
		else{
			$(".icons").css("width","600");
		}
	}

	$(".iconContainer").mouseenter(function(){

		$("#secondPage").css("background-image","url(Resources/secondPageBG_blur.jpg)");
		
		// img
		$(this).children("a").children(".clickedIcon").css("display","inline-block");
		$(this).children("a").children(".unclickedIcon").css("display","none");

		// background
		$(this).css("background-color", "#ffffff");
	});

	$(".iconContainer").mouseleave(function(){

		$("#secondPage").css("background-image","url(Resources/secondPageBG.jpg)");

		// img
		$(this).children("a").children(".clickedIcon").css("display","none");
		$(this).children("a").children(".unclickedIcon").css("display","inline-block");

		// backgroud
		$(this).css("background-color", "#6ef1b5");
	});

	//********************************** Part 3 **********************************//

	// ?????
	function setMembersWidth(){
		var windowWidth = $(window).width();
		var defaultIconsWidthLimitation = 800;

		if (windowWidth < defaultIconsWidthLimitation) {
			$(".members").css("width","320");
		}
		else{
			$(".members").css("width","800");
		}
	}

	//********************************** Part 4 **********************************//
	function setBlockSize(){
		var windowWidth = $(window).width();
		var limitation = 500;
		if (windowWidth < limitation) {
			$(".blockContainer").css("width", windowWidth);
		}
		else{
			$(".blockContainer").css("width", windowWidth/3);

		}
		var windowHeight = $(window).height();
		if (windowHeight < 770) {
			windowHeight = 770;
		}
		else if (windowHeight > 900) {
			windowHeight = 900;
		}
		$(".blockContainer").css("min-height", windowHeight + "px");
	}

	//********************************** Part 5 **********************************//


});