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
		ResetBackgroudBox();

		// Part 1 title 
		setTitleDisplayEffect();
		
		// Part 2 icons
		setIconsWidth();

		// TODO: Part 3 members
		//setMembersWidth();

		// Part 4 block
		setBlockSize();

		// TODO: Part 5

		// Part 6
		setWorksGroupBlockSize();
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
		$(".contentBox").css("margin-top", "-" + windowHeight + "px");
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

		//$("#secondPage").css("background-image","url(Resources/secondPageBG_blur.jpg)");
		$("#secondPageBG").addClass("backgroundBlur");
		$("#secondPageBG").removeClass("outBlur");

		// img
		$(this).children("a").children(".clickedIcon").css("display","inline-block");
		$(this).children("a").children(".unclickedIcon").css("display","none");

		// background
		$(this).css("background-color", "#ffffff");
	});

	$(".iconContainer").mouseleave(function(){

		//$("#secondPage").css("background-image","url(Resources/secondPageBG.jpg)");
		$("#secondPageBG").removeClass("backgroundBlur");
		$("#secondPageBG").addClass("outBlur");

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
	$(".memberContainer").mouseenter(function(){
		$("#thirdPageBG").addClass("backgroundBlur");
		$("#thirdPageBG").removeClass("outBlur");

	});

	$(".memberContainer").mouseleave(function(){
		$("#thirdPageBG").removeClass("backgroundBlur");
		$("#thirdPageBG").addClass("outBlur");

	});


	//********************************** Part 4 **********************************//
	function setBlockSize(){
		var windowWidth = $(window).width();
		var limitation = 500;
		if (windowWidth < limitation) {
			$(".blockContainer").css("width", windowWidth);
			$(".blockBGContainer").css("width", windowWidth);
		}
		else{
			$(".blockContainer").css("width", windowWidth/3);
			$(".blockBGContainer").css("width", windowWidth/3);
		}
		var windowHeight = $(window).height();
		if (windowHeight < 770) {
			windowHeight = 770;
		}
		else if (windowHeight > 900) {
			windowHeight = 900;
		}
		$(".blockContainer").css("min-height", windowHeight + "px");
		$(".blockBGContainer").css("min-height", windowHeight + "px");
	}

	$(".blockContainer").mouseenter(function(){
		$(this).children(".blockBGContainer").addClass("backgroundBlur");
		$(this).children(".blockBGContainer").removeClass("outBlur");

		//$(this).css("z-index","0");
	});

	$(".blockContainer").mouseleave(function(){
		$(this).children(".blockBGContainer").removeClass("backgroundBlur");
		$(this).children(".blockBGContainer").addClass("outBlur");

		//$(this).css("z-index","1");
	});

	//********************************** Part 5 **********************************//


	//********************************** Part 6 **********************************//
	function setWorksGroupBlockSize(){
		var windowWidth = $(window).width();
		var limitation = 584;
		if (windowWidth < limitation) {
			windowWidth = windowWidth;
		}
		else{
			windowWidth = windowWidth / 4;
		}

		$(".workGroupContainer").css("width", parseInt(windowWidth));
		$(".workContainer").css("width", parseInt(windowWidth));
		$(".workBGContainer").css("width", parseInt(windowWidth));

		var windowHeight = $(window).height();
		if (windowHeight < 770) {
			windowHeight = 770;
		}
		else if (windowHeight > 900) {
			windowHeight = 900;
		}

		var partWidth = windowHeight / 4;

		$(".workGroupContainer").css("min-height", windowHeight + "px");
		$(".workContainer").css("min-height", partWidth + "px");
		$(".workBGContainer").css("min-height", partWidth + "px");

		var linePaddingLeft = (windowWidth - $(".workSubTitle").width()) / 2;
		var linePaddingTop = (windowHeight/4 - $(".workSubTitle").height()) / 2;

		$(".workSubTitle").css("padding-left", linePaddingLeft);
		$(".workSubTitle").css("padding-right", linePaddingLeft);
		$(".workSubTitle").css("padding-top", linePaddingTop + 6);
		$(".workSubTitle").css("padding-bottom", linePaddingTop - 6);

	}

	$(".workContainer").mouseenter(function(){
		if (!$(this).children(".workBGContainer").hasClass("noBlur")) {
			$(this).children(".workBGContainer").addClass("backgroundBlur");
			$(this).children(".workBGContainer").removeClass("outBlur");
		}
	});

	$(".workContainer").mouseleave(function(){
		if (!$(this).children(".workBGContainer").hasClass("noBlur")) {
			$(this).children(".workBGContainer").removeClass("backgroundBlur");
			$(this).children(".workBGContainer").addClass("outBlur");
		}
	});

	$(".workGroupContainer").mouseenter(function(){
		$(this).parent().children(".workGroupContainer").not(this).children(".blackMask").addClass("inBlackMask");
	});

	$(".workGroupContainer").mouseleave(function(){
		$(this).parent().children(".workGroupContainer").not(this).children(".blackMask").removeClass("inBlackMask");
	});

	


});