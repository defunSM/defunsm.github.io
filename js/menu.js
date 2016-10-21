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
      	$('#userNav').hide("slide", {direction: "left" }, 1000);

    }
    else{
        $('#userNav').show("slide", { direction: "right" }, 1000);
    }
});
