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
    if  ($(window).scrollTop() >= 200){
        $(".burger").css({"backgroundColor":"red"});

    }
    else{
        $(".burger").css({"color":"white"});
    }
});
