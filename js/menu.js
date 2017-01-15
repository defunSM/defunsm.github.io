$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('.body').toggleClass('body_hidden');
    $('#navigation').toggleClass('open');
    $('#about').css({"padding": "30px 5px 0px 30%"});
    $('#portfolio').css({"padding": "30px 5px 0px 30%"});
    $('#contract').css({"padding": "30px 5px 0px 30%"});
    $('.container_footer').css({"padding": "30px 5px 0px 30%"});

  });

$('.menu').click(function() {
    $('.body').removeClass('body_hidden');
    $( "#toggle" ).removeClass( "active" );
    $('#navigation').removeClass('open');
    $('#about').css({"padding": "100px 50px"});
    $('#portfolio').css({"padding": "100px 50px"});
    $('#contract').css({"padding": "100px 50px"});
    $('.container_footer').css({"padding": "100px 50px"});
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

    var wScroll = $(this).scrollTop();

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
         $('li3').fadeOut();
         $('.menubarblack').fadeOut();

     }
    else
     {
         $('ul3').fadeIn();
         $('li3').fadeIn();
         $('.menubarblack').fadeIn();
         // $('.menubarblack').css({'height':  + 'px'});

     }



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
