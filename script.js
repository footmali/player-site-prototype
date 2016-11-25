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
			var $grid = $('#news .row').imagesLoaded( function() {
			  // init Masonry after all images have loaded
			  var width = $grid.width() / 3;
				$grid.masonry({
			 		itemSelector: '.news-item',
					columnWidth: '.grid-sizer',
					percentPosition: true
			  	});
			});
		}

	});
	
});

// var $newsRow = $('#news .row').masonry({
// 	itemSelector: '.news-item',
// 	columnWidth: '.grid-sizer',
// 	percentPosition: true
// });

// var $newsRow = $('#news .row').imagesLoaded( function() {
// 	$newsRow.masonry({
// 		itemSelector: '.news-item',
// 		columnWidth: '.grid-sizer',
// 		percentPosition: true
// 	});
// });