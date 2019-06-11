$(document).ready(function() {
  //navbar scroll
  $(window).scroll(function(){
    if($(this).scrollTop() > ( ($('.hero').height() ) - $('.navbar-default').height()-24) ) {
      $('.navbar-default').css('background', 'rgba(0, 0, 0, 1)');
    } else {
      $('.navbar-default').css('background', 'rgba(0, 0, 0, 0.5)');
    }
  });

  
  //albums hover effect
  /*$('#rachmaninov .album-hover-wrapper').hover( function(){
    $(this).css('opacity', '0.5').fadeOut('medium', 0.8);
  },
  function() {
    $(this).css('opacity', '0').fadeOut('medium', 0.8);
  });

  $('#rachmaninov .album-hover-wrapper').hover( function(){
    $(this).css('opacity', '0.5').fadeOut('medium', 0.8);
  },
  function() {
    $(this).css('opacity', '0').fadeOut('medium', 0.8);
  });

  
*/
 // $('#recordings').animatescroll();
  /*$('.carousel').carousel({
    interval: false,
    wrap: false
  })

  var checkitem = function() {
    var $this;
    $this = $(".carousel");
    if ($(".carousel .carousel-inner .carousel-item:first").hasClass("active")) {
      $('#prevControl').hide();
     // $this.children(".right").show();
    } else if ($("#slideshow .carousel-inner .carousel-item:last").hasClass("active")) {
      $('#nextControl').hide();
    } else {
      $('#prevControl').show();
      $('#nextControl').show();
    }
  };
  
  checkitem();
  
 */

  AOS.init({
    
  })

//
  $('.ekko-lightbox .modal-dialog .modal-content .modal-body .ekko-lightbox-nav-overlay').css("color", "red");

  //$(this).on("click", '[data-toggle="lightbox"]', function(event) {
   // event.preventDefault();
 //   $(this).ekkoLightbox({
    
      
  //});


    ////////////////
  //});


});

