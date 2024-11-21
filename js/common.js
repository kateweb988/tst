$(function () {
	var tabContainers = $('div.tabs > div');
	tabContainers.hide().filter(':first').show();
	$('div.tabs ul.tabNavigation a').click(function () {
		tabContainers.hide();
		tabContainers.filter(this.hash).show();
		$('div.tabs ul.tabNavigation a').removeClass('selected');
		$(this).addClass('selected');
		return false;
	}).filter(':first').click();

	$('.action-request').on('click', function () {
		let id = $(this).data('id');
		$("#callme form input[name='actions_id']").val(id);
		//console.log(id);
	});
});

$(function () {
	$('.menubg').click(function () {
		$('.menubg').fadeOut();
		$('.header ul').removeClass('opened');
		$('.cabinet-page .top-block .menu').removeClass('opened');
	});
	$('.cabinet-page .top-block .menu-button').click(function () {
		$('.menubg').fadeIn();
		$('.cabinet-page .top-block .menu').addClass('opened');
	});
	$('.header .menu-button').click(function () {
		$('.menubg').fadeIn();
		$('.header ul').addClass('opened');
	});
	$('.fixed-social-block .link').click(function () {
		$(this).toggleClass('active');
		$('.fixed-social-block ul').toggle();
	});

	$('.index-page-slider').slick({
		dots: true,
		fade: true,
		autoplay: true
	});


	/*
	$('.index-page-slider').slick({
		dots: true,
		infinite: true,
		  speed: 3000,
		  fade: true,
		  cssEase: 'linear',
		slidesToShow: 1,
		  slidesToScroll: 1,
		autoplay: true,
		 autoplaySpeed: 1000
	   
	});
	*/
	$('.index-images-block .list').slick({
		speed: 3000,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4
				}
			}
		]
	});

	$('.about-page .media .list').slick({
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});


	$('.catalog-page .item .photos').slick({});

	$('.about-page .photos').slick({});


	$(".phone-input").keydown(function (event) {
		// backspace, delete, tab и escape
		if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
			// Ctrl+A
			(event.keyCode == 65 && event.ctrlKey === true) ||
			// home, end, влево, вправо
			(event.keyCode >= 35 && event.keyCode <= 39)) {
			return;
		} else {
			// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
			if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
				event.preventDefault();
			}
		}
	});
});
document.addEventListener("DOMContentLoaded", () => {
	const loc_box = $('.second');
	$('.second').click(function () {
		loc_box.addClass('active');
		$('.head-stick').addClass('area');
		$('.first').removeClass('active');
		$(this).addClass('active');
	});

});
document.addEventListener("DOMContentLoaded", () => {
	const loc_box = $('.first');
	$('.first').click(function () {
		loc_box.addClass('active');
		$('.second').removeClass('active');
		$('.head-stick').removeClass('area');
		$(this).addClass('active');
	});

});
document.addEventListener("DOMContentLoaded", () => {
	// svg
	$(function () {
		jQuery('img.svg').each(function () {
			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');

			jQuery.get(imgURL, function (data) {
				// Get the SVG tag, ignore the rest
				var $svg = jQuery(data).find('svg');

				// Add replaced image's ID to the new SVG
				if (typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}
				// Add replaced image's classes to the new SVG
				if (typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass + ' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');

				// Check if the viewport is set, else we gonna set it if we can.
				if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
				}

				// Replace image with new SVG
				$img.replaceWith($svg);

			}, 'xml');

		});
	});
});