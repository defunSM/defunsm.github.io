$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('.body').toggleClass('body_hidden')
   $('#navigation').toggleClass('open');
  });

$('.menu').click(function() {
   $('.body').removeClass('body_hidden')
   $( "#toggle" ).removeClass( "active" )
   $('#navigation').removeClass('open');
  });

// $(window).scroll(function(){
//     if  ($(window).scrollTop() >= 300){
//         $(".burger").hide();

//     }
//     else{
//         $(".burger").show();
//     }
// });

$(window).scroll(function() {

    if ($(this).scrollTop()>650)
     {
        $('.burger').fadeOut();
     }
    else
     {
      $('.burger').fadeIn();
     }
});

$(window).scroll(function() {

    if ($(this).scrollTop()<650)
     {
        $('ul3').fadeOut();
     }
    else
     {
      $('ul3').fadeIn();
     }
 });

var enlarged = false;

$('.hljs').on('click', function() {
  var width = $(this).width();
  var height = $(this).height();
  var $p = $(this).find('p')

  if (!enlarged) {
    width = width * 2;
    height = height * 2;
    enlarged = true;
    var callback = function($this) {
      $this.show();
    };
  } else {
    width = width / 2;
    height = height / 2;
    enlarged = false;
    var callback = function($this) {
      $this.hide();
    };
  }

  $(this).stop().animate({
    width: width,
    height: height
  }, callback($p));

});
