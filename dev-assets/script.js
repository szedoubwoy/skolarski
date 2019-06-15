$(document).ready(function() {
  //navbar scroll
  $(window).scroll(function(){
    if ($(window).width() > (576 || 768)) {
      if($(this).scrollTop() > ( ($('.hero').height() ) - $('.navbar-default').height()-24) ) {
        $('.navbar-default').css('background', 'rgba(52, 58, 64, 1)');
      } else {
        $('.navbar-default').css('background', 'rgba(52, 58, 64, 0.5)');
      }
    } else { 
      $('.navbar-default').css('background', 'rgba(52, 58, 64, 1)');

       //hide navbar after click #mobile
        $('.navbar-collapse a').click(function (e) {
          $('.navbar-collapse').collapse('toggle');
        });
    }
    
  });
 // if($('.carousel-item').hasClass('active'))
   // $(this).removeClass('active');
  //check about me
  function checkActive() {
    if($('.carousel-item').hasClass('active'))
    $('.carousel-item').removeClass('active');
  }

  function checkAboutMeClick(){
    $('#bio').click(function() {
      checkActive();
      $('#bio_id').addClass('active');
    });

    $('#recommendations').click(function() {
      checkActive();
      $('#recommendations_id').addClass('active');
    });

    $('#reviews').click(function() {
      checkActive();
      $('#reviews_id').addClass('active');
    });

    $('#texts').click(function() {
      checkActive();
      $('#texts_id').addClass('active');
    });
  }
 
  checkAboutMeClick();

  function init_carousel() {
    H = +($(window).height() /* -height here  */); // or $('.carousel-inner') as you want ...
    $('.carousel-inner').css('height', H + 'px');
  
}
window.onload = function(){
  AOS.init({
    
  })
  AOS.refresh();
  init_carousel;
  init_carousel();
} ;


});

