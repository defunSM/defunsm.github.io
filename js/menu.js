$('#toggle').click(function() {
    $(this).toggleClass('active');

    var about = $('#about').attr('class');
    var portfolio = $('#portfolio').attr('class');
    var contact = $('#contact').attr('class');

    if (about == "module defaultpadding") {
        $('#about').removeClass('defaultpadding');
        $('#about').toggleClass('addpadding');
    } else {
        $('#about').removeClass('addpadding');
        $('#about').toggleClass('defaultpadding');
    }


    $('.body').toggleClass('body_hidden');
    $('#navigation').toggleClass('open');
    $('#portfolio').toggleClass('addpadding');
    $('#contact').toggleClass('addpadding');
    $('.container_footer').toggleClass('addpadding');
    $('#welcome').toggleClass('addpadding');


  });

// $('.menu').click(function() {
//     $('.body').removeClass('body_hidden');
//     $( "#toggle" ).removeClass( "active" );
//     $('#navigation').removeClass('open');

//     $('#about').removeClass('addpadding');
//     $('#portfolio').removeClass('addpadding');
//     $('#contact').removeClass('addpadding');
//     $('.container_footer').removeClass('addpadding');
//     $('#welcome').removeClass('addpadding');


//     $('#about').toggleClass('defaultpadding');
//     $('#portfolio').toggleClass('defaultpadding');
//     $('#contact').toggleClass('defaultcontactpadding');
//     $('.container_footer').toggleClass('defaultfooterpadding');
//     $('#welcome').toggleClass('defaultpadding');
//   });

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
