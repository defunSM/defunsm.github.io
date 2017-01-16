$('#toggle').click(function() {
    $(this).toggleClass('active');

    var about = $('#about').attr('class');
    var portfolio = $('#portfolio').attr('class');
    var contact = $('#contact').attr('class');

    if (about == "module defaultpadding") {
        $('#about').removeClass('defaultpadding');
        $('#about').toggleClass('addpadding');
        $('#downarrow').toggleClass('arrowpadding');

        $('.container_small').toggleClass('defaultcontactpadding');

        $('.container_footer').removeClass('defaultpadding');
        $('.container_footer').toggleClass('addpadding');

        $('#portfolio').removeClass('defaultpadding');
        $('#portfolio').toggleClass('addpadding');
    } else {

        $('.container_footer').toggleClass('defaultpadding');
        $('.container_footer').removeClass('addpadding');

        $('.container_small').removeClass('defaultcontactpadding');

        $('#about').removeClass('addpadding');
        $('#about').toggleClass('defaultpadding');
        $('#downarrow').removeClass('arrowpadding');

        $('#portfolio').removeClass('addpadding');
        $('#portfolio').toggleClass('defaultpadding');
    }

    if (contact == "module defaultpadding") {
        $('#contact').removeClass('defaultpadding');
        $('#contact').toggleClass('addpadding');
    } else {
        $('#contact').removeClass('addpadding');
        $('#contact').toggleClass('defaultpadding');
    }





    $('.body').toggleClass('body_hidden');
    $('#navigation').toggleClass('open');


    $('#welcome').toggleClass('addpadding');


});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 300){
        $(".burger span").css({'background':'#a67d4a;'});
    } else {
        $(".burger span").css({'background':'white'});
    }

});
// $(window).scroll(function(){
//     if  ($(window).scrollTop() >= 300){
//         $(".burger").hide();

//     }
//     else{
//         $(".burger").show();
//     }
// });

// $(window).scroll(function() {

//     var wScroll = $(this).scrollTop();

//     if ($(this).scrollTop()>350)
//      {
//         $('.burger').fadeOut();
//      }
//     else
//      {
//       $('.burger').fadeIn();
//      }

//         if ($(this).scrollTop()<350)
//      {
//          $('ul3').fadeOut();
//          $('li3').fadeOut();
//          $('.menubarblack').fadeOut();

//      }
//     else
//      {
//          $('ul3').fadeIn();
//          $('li3').fadeIn();
//          $('.menubarblack').fadeIn();
//          // $('.menubarblack').css({'height':  + 'px'});

//      }



//     $('.header_title').css({
//         'transform' : 'translate(0px, ' + wScroll/3 + 'px)'
//     });

//     $('.header_subtitle').css({
//         'transform' : 'translate(0px, ' + wScroll/3 + 'px)'
//     });

// });

$('code').on('click', function() {

    var myvar = $(this).css('font-size')

    if (myvar == "30px") {

        $(this).css({'font-size':'inherit'});
    }
    else {

        $(this).css({'font-size':'30px'});

    }


});
