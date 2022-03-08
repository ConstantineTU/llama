$(function () {

	$('.portpholio-images').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		rows: 2,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 630,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					rows: 3
				}
			}
		]
	});

	$(document).ready(function () {
		$('.header__burger').click(function (event) {
			$('.header__burger, .header__menu, .head-nav__flex').toggleClass('active');
			// $('.top-images__llama3').toggleClass('lock')
		});
	});


	$('.btn__menu').on('click', function () {
		$('.head-nav__ul').slideToggle();
	});

	// $('textarea').on('paste input', function () {
	// 	if ($(this).outerHeight() > this.scrollHeight) {
	// 		$(this).height(1)
	// 	}
	// 	while ($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
	// 		$(this).height($(this).height() + 1)
	// 	}
	// });
});
$(function () {
	$(document).ready(function () {
		$('.top-images__llama3').click(function (event) {
			$('.header__burger.active, .header__menu.active, .head-nav__flex.active').toggleClass('active');
		});
	});
	$(document).ready(function () {
		$('.top').click(function (event) {
			$('.header__burger.active, .header__menu.active, .head-nav__flex.active').toggleClass('active');
		});
	});
	$(document).ready(function () {
		$('.head-nav__account1').click(function (event) {
			$('.search, .head-nav__div').toggleClass('active');
		});
	});
});
$(document).ready(function () {

	//E-mail Ajax Send
	$("#form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});