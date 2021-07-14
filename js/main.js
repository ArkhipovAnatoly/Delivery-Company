$(window).on("load", function() {
	$("#loader").fadeOut("slow");
});
$(function() {
	try {
		var rellax = new Rellax('.rellax');
	} catch (ingore) {
		console.log("Rellax error");
	}
	var mainSliderArrows = $(".main-arrow, .working-arrow");
	var sliderLeftBtn = $("#main-slider-prev");
	var sliderRightBtn = $("#main-slider-next");

	$(".main-slider-wrapper").slick({
		dots: true,
		arrows: true,
		dotsClass: "main-slider-dots",
		mobileFirst: true,
		autoplay: true,
		prevArrow: sliderLeftBtn,
		nextArrow: sliderRightBtn,
		responsive: [{
			breakpoint: 1120,
			settings: {
				arrows: false
			}
		}]
	});
	$(".services-cards-slider").slick({
		autoplay: true,
		arrows: false,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});
	$(".working-slider").slick({
		prevArrow: $("#working-slider-prev"),
		nextArrow: $("#working-slider-next"),
		dotsClass: "main-slider-dots",
		mobileFirst: true,
		responsive: [{
			breakpoint: 1120,
			settings: {
				arrows: false
			}
		}]
	});
	$(".partners-slider").slick({
		slidesToShow: 5,
		slidesToScroll: 5,
		arrows: false,
		autoplay: true,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
	$("#toggle-menu").on("click", function(event) {
		event.preventDefault();
		var menu = $(".main-navigation-list-mobile");
		var logo = $(".main-header-logo");
		if (menu.is(":visible")) {
			menu.slideUp('fast');
		} else {
			menu.slideDown('fast');
		}
	});

	$(window).on("load", function() {
		toggleArrows($(this).width());
		$(this).resize(function(event) {
			toggleArrows($(this).width());
		});
	});
	/*$("a[href='#']").on('click', function(event) {
		event.preventDefault();
	});*/
	$(".popup-btn").on('click', function(event) {
		event.preventDefault();
		var getID = $(this).data("link");
		$(getID).fadeIn("fast");
		/* Act on the event */
	});
	$('.popup-close').on('click', function() {
		$('.popup').fadeOut('fast');
	});

	function toggleArrows(width) {
		if (width < 1120) {
			mainSliderArrows.hide();

		} else {
			mainSliderArrows.show();

		}
	}
	$("form").submit(function(event) {
		/* Act on the event */
		var form = $(this);
		event.preventDefault();
		var data = $(this).serialize();
		$.ajax({
			url: "mailer/smart.php",
			method: "POST",
			data: data,
			success: function(respone) {
				form.find('input').val("");
				$(".popup").fadeOut("fast");
				$("#success-bid").fadeIn("fast");
				form.trigger('reset');
			},
			error: function(e) {
				alert("Error: " + e.status);
			}
		});
	});
	$(".phone-input").inputmask("+7 (999) 999-99-99");
});