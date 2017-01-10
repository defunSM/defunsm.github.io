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

    if ($(this).scrollTop()>700)
     {
        $('.burger').fadeOut();
     }
    else
     {
      $('.burger').fadeIn();
     }

        if ($(this).scrollTop()<700)
     {
        $('ul3').fadeOut();
     }
    else
     {
      $('ul3').fadeIn();
     }

    var wScroll = $(this).scrollTop();

    $('.header_title').css({
        'transform' : 'translate(0px, ' + wScroll/3 + 'px)'
    });

    $('.header_subtitle').css({
        'transform' : 'translate(0px, ' + wScroll/3 + 'px)'
    });

});

$('code').on('click', function() {

    var myvar = $(this).css('font-size')

    if (myvar == "30px") {

        $(this).css({'font-size':'inherit'});
    }
    else {

        $(this).css({'font-size':'30px'});

    }


});
