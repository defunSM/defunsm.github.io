$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 700, 'swing', function () {
			window.location.hash = target;
		});
	});
});

// $('.tooltip').tooltipster({
//     contentCloning: true
// });

// $('.tooltip').tooltipster({
//     functionInit: function(instance, helper){
//         var content = $(helper.origin).find('.tooltip_content').detach();
//         instance.content(content);
//     }
// });
