$(document).ready(function(){
	$('.toggle').click(function(){
		$('ul').toggleClass('active');
	})

	$(window).scroll(function(){
		var top=$(window).scrollTop();
		if (top>=200) {
			$("header").addClass('header-color');
		}
		else if ($("header").hasClass('header-color')) {
			$("header").removeClass('header-color');
		}


	})

	//Adjust Bxslider list Item Center
	// $('.text').each(function() {
	// 	$(this).css('marginTop', ($(window).height() - $('.text').height()) / 2);
	// 	});

	$('.bxslider').bxSlider({
		pager:false,
		auto:true,
		pause:10000
	});
})