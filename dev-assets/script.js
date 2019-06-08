$(document).ready(function() {
 // $('#recordings').animatescroll();



  

  AOS.init({
    
  })

  $(this).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });


});