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

$(window).scroll(function(){
    if  ($(window).scrollTop() >= 1900){
        $('#fadeInBlock').show("slide", { direction: "right" }, 1000);

    }
    else{
        $('.fadeInBlock').hide("slide", {direction: "left" }, 1000);
    }
});
