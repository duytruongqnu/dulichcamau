
$('#click-search').click(function(){
  $('.form-search').toggleClass('active');
});


$('.click-menu').click(function(){
  $('.menu').stop().slideToggle();
});

var topBtn = $('#page-top'); 
topBtn.hide();
$(window).scroll(function() {
   if ($(this).scrollTop() > 300) {
       topBtn.fadeIn();
   } else {
       topBtn.fadeOut();
   }
});
topBtn.click(function() {
   $('body,html').animate({
      scrollTop: 0
   }, 0);
   return false;
});

AOS.init();
