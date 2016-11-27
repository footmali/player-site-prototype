var cover = $('.cover');
var homePage = cover.html();
var bkImages = {
	'home': 'adama-traore-cover.jpg',
	'profile': 'adama-profile.jpg',
	'stats' : 'adama-stats.jpg'
}
$('.masthead-nav > li > a').click( function(e){
	e.preventDefault();
	var target = $(this);

	var page = $(this).attr('href');
	var pageName = $(this).attr('data-name');

	$.ajax({
		url: page
	}).done(function(resp){
		$('.masthead-nav > li > a').removeClass('active');
		target.addClass('active');
		cover.html(resp);
		$('.site-wrapper').css({
			'background-image': 'url(images/'+ bkImages[pageName] +')',
			'background-position': '80% 100px'
		});
		$('body').addClass('inner-pages');

		if(pageName == 'news'){
			var $grid = $('.masonry-grid .row').imagesLoaded( function() {
			  // init Masonry after all images have loaded
				$grid.masonry({
			 		itemSelector: '.masonry',
					columnWidth: '.grid-sizer',
					percentPosition: true
			  	});
			});
		}else if(pageName == 'gallery'){
			var $grid = $('.masonry-grid .row').imagesLoaded( function() {
			  // init Masonry after all images have loaded
				$grid.masonry({
			 		itemSelector: '.masonry',
					columnWidth: '.gallery-grid-sizer',
					percentPosition: true
			  	});
			});
		}

	});
	
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

