$('#toggle').click(function() {
    $(this).toggleClass('active');

    var about = $('#about').attr('class');
    var portfolio = $('#portfolio').attr('class');
    var contact = $('#contact').attr('class');

    if (about == "module defaultpadding") {
        $('#about').removeClass('defaultpadding');
        $('#about').toggleClass('addpadding');
        $('#downarrow').toggleClass('arrowpadding');

        $('.container_footer').removeClass('defaultpadding');
        $('.container_footer').toggleClass('newfooterpadding');

        // $('.container_small').removeClass('defaultcontactpadding');
        $('.container_small').toggleClass('addpadding');

        $('#portfolio').removeClass('defaultpadding');
        $('#portfolio').toggleClass('newpadding');

        $('#headerspan').removeClass('fade child');

        $('.header_title').toggleClass('addpadding');

        $('.fade-in').toggleClass('background-padding');

    } else {

        $('.header_title').removeClass('addpadding');

        $('.container_footer').toggleClass('defaultpadding');
        $('.container_footer').removeClass('newfooterpadding');

        // $('.container_small').toggleClass('defaultcontactpadding');
        $('.container_small').removeClass('addpadding');

        $('#about').removeClass('addpadding');
        $('#about').toggleClass('defaultpadding');
        $('#downarrow').removeClass('arrowpadding');

        $('#portfolio').removeClass('newpadding');
        $('#portfolio').toggleClass('defaultpadding');

        $('#headerspan').toggleClass('fade child');

        $('.fade-in').removeClass('background-padding');
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


    $('#welcome').toggleClass('welcomeaddpadding');


});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 300){
        $(".burger span").css({'background':'#a67d4a'});
    } else {
        $(".burger span").css({'background':'white'});
    }

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

// $(window).scroll(function() {

//     var wScroll = $(this).scrollTop();

//     if ($(this).scrollTop()>700)
//      {
//         $('.burger').fadeOut();
//      }
//     else
//      {
//       $('.burger').fadeIn();
//      }

//         if ($(this).scrollTop()<700)
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

// Makes the .hljs bigger on click.

$('code').on('click', function() {

    var myvar = $(this).css('font-size')

    if (myvar == "30px") {

        $(this).css({'font-size':'inherit'});
    }
    else {

        $(this).css({'font-size':'30px'});

    }
});
