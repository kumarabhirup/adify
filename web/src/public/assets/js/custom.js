(function ($) {
  "use strict";


// var client_logo = client_logo_slider

var client_logo = $('.client_logo_slider')
if(client_logo.length){
  client_logo.owlCarousel({
    items: 6,
    loop: true,
    responsive: {
      0: {
        items: 3,
        margin: 15,
      },
      600: {
        items: 3,
        margin: 15,
      },
      991: {
        items: 5,
        margin: 15,
      },
      1200: {
        items: 6,
        margin: 15,
      }
    }             
  });
}



  var review = $('.review_slider');
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: false,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: false,
    });
  }

  $(document).ready(function() {
    $('select').niceSelect();
  });
  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });

 $('.gallery_img').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});

// Search Toggle
$("#search_input_box").hide();
$("#search_1").on("click", function () {
  $("#search_input_box").slideToggle();
  $("#search_input").focus();
});
$("#close_search").on("click", function () {
  $('#search_input_box').slideUp(500);
});

//------- Mailchimp js --------//  
function mailChimp() {
  $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


}(jQuery));