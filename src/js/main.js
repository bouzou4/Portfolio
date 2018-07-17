// protect the namespace!
var scriptsJS = (function($){

//  ==========================================================================
//  Scrolling Code
//  ==========================================================================	
function scrollEffects() {
	// initialize smooth scrolling on same-page links
	$('a[href*=\\#]:not([href=\\#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: (target.offset().top - 100)
				}, 1000);
			return false;
			}
		}
	});
}


//  ==========================================================================
//  Init
//  ==========================================================================	
function init(){
	$(document).ready(function(){
		console.log("hey man");
		scrollEffects();
		$('body').removeClass('display-hide');
	});
}

// PUBLIC METHODS
	return {
		init: init
	};

})(jQuery);

scriptsJS.init();