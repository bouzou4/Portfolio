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
//  Mobile Nav Code
//  ==========================================================================	
function initNav() {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('#'+burger.dataset.target);
 
  burger.addEventListener('click', function(){
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
  });
}

//  ==========================================================================
//  Init
//  ==========================================================================	
function init(){
	$(document).ready(function(){
		scrollEffects();
		initNav();
		//prevent FOUC because of webpack
		$('body').removeClass('display-hide');
	});
}

// PUBLIC METHODS
	return {
		init: init
	};

})(jQuery);

scriptsJS.init();