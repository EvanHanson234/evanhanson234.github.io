//Scroll Message
$(document).ready(function() {
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 130) {
        $('#scroll-message').fadeOut();
      } else {
        $('#scroll-message').fadeIn();
      }
    });
  });