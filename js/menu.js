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
        $(".burger").css({"color":"#A67D4A"});

    }
    else{
        $(".burger").css({"color":"white"});
    }
});
