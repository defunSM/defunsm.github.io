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

$(function() {
  $(window).scroll( function(){


   $('.fadeInBlock').each( function(i){

    var bottom_of_object = $(this).position().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
    bottom_of_window = bottom_of_window + 350;

    if( bottom_of_window > bottom_of_object ){

        $(this).slideToggle(done);

            }
            else{
              $(this).animate({'opacity':'0'},200);
            }
        });

    });
});
