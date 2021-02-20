
$(document).ready(function(){
	$('.header-navbar__btn').click(function(){
		$(this).toggleClass('header-navbar__btn-row--active');
		$('.header-navbar__list').stop(true, true).fadeToggle(1000);
	});
});