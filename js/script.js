$(document).ready(function () {
  //Slider
  $('#slider').bxSlider({
    controls: false,
    auto: true,
    pause: 4000
  });

  $('#galeria').bxSlider({
    auto: true,
    pause: 4000,
    minSlides: 5,
    maxSlides: 7,
    slideMargin: 20,
    slideWidth: 300
  });

  $('#depoimentos').bxSlider({
    auto: true,
    pause: 4000,
    minSlides: 2,
    maxSlides: 2,
    slideMargin: 20,
    slideWidth: 570
  });

  //Acorddion
	$('.tab').on('click', function (e) {
    var accordion = $('.accordion');
    var content = $(this).find('.tab-content');
    if (content.is(':hidden')) {
      accordion.find('.tab-content').slideUp('fast');
      content.slideToggle('fast');
    }
	});

  $('#sign').on('click', function (e) {
    e.preventDefault();
    alert('Entre em contato através do telefone 0800 940 2104 ou pelo email mobiabert@abert.org.br para participar');
  });

  //Smooth Scroll
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .on('click', function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 600, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
});