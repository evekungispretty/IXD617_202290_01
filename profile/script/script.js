$('.image-wrapper').hover(
    function() {
      $('.image-wrapper').not(this).toggleClass('squeeze');
      $(this).toggleClass('stretch');
    }, 
    function() {
      $('.image-wrapper').not(this).toggleClass('squeeze');
      $(this).toggleClass('stretch');
    }
  );