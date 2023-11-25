document.addEventListener('DOMContentLoaded', function() {
    // Code JavaScript ici
    console.log('Le DOM est chargé.');
  });

  $(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });