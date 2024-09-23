var menu = $('.nav-primary');
var open = $('#clik-menu');
var close = $('#closet-menu');
open.click(function(e){
  e.preventDefault();
  menu.addClass('active');
});
close.click(function(e){
  e.preventDefault();
  menu.removeClass('active');
});
$(window).click(function(e){
  if(menu.has(e.target).length == 0 && !menu.is(e.target) && open.has(e.target).length == 0 && !open.is(e.target)){
    menu.removeClass('active');
  }
});

if($(window).width() < 768){
  $('.menu-item-has-children>a').append('<i class="fa-light fa-angle-down"></i>');
  $('.menu-item-has-children i.fa-angle-down').click(function(e){
    e.preventDefault();
    $(this).closest('li').toggleClass('open');
  });
}


$('#click-menu').click(function(e){
  $(this).toggleClass('active');
  
  if($('#click-menu').hasClass('active')){
    $(this).html('<i style="font-size: 29px;" class="fa-solid fa-xmark"></i>');
  }
  else{
    $(this).html('<i class="fa-solid fa-bars"></i>');
  }
  $('.nav-sp').stop().slideToggle();
});

$('#click-search').click(function(){
  $('.form-search').toggleClass('active');
});


$('.click-menu').click(function(){
  $('.menu').stop().slideToggle();
});

 /*MENU FIX*/
 var he = $('.faha-header-row').outerHeight();
 $(window).scroll(function ()
 {
     if ($(window).scrollTop() > he)
     {
         $('.faha-header-nav-primary').addClass('navbar-fixed-top');
     }
     if ($(window).scrollTop() < he)
     {
         $('.faha-header-nav-primary').removeClass('navbar-fixed-top');
     }
});

// var topBtn = $('#page-top'); 
// // topBtn.hide();
// // $(window).scroll(function() {
// //    if ($(this).scrollTop() > 300) {
// //        topBtn.fadeIn();
// //    } else {
// //        topBtn.fadeOut();
// //    }
// // });
// topBtn.click(function() {
//    $('body,html').animate({
//       scrollTop: 0
//    }, 0);
//    return false;
// });

AOS.init();
