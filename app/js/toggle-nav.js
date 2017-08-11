// Multi-Toggle Navigation
$(function() {

	$('body').addClass('js');
		let	$menu = $('#menu'),
			$menulink = $('.hamburger'),
			$menuTrigger = $('.subnav');
			$menuTriangle = $('.has-subnav');

	$menulink.click(function(e) {
		e.preventDefault();
		$menulink.toggleClass('is-active');
		$menu.toggleClass('active');
	});

	$menuTrigger.click(function(e) {
		e.preventDefault();
		let $this = $(this);
		$this.next('span').toggleClass('active').next('ul').toggleClass('active');
	});

    $menuTriangle.click(function(e) {
        e.preventDefault();
        let $this = $(this);
        $this.toggleClass('active').next('ul').toggleClass('active');
    });

});

// Remove "Active" Class from Menu on Resize
$(window).resize(function() {
	let viewportWidth = $(window).width();
		if (viewportWidth > 925) {
			$("#menu").removeClass("active");
		}
});
