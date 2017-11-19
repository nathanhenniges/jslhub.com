// Fixs the menu so when link is clicked it would close the menu.
$(function () {

  $('#bs-example-navbar-collapse-1')
    .on('shown.bs.collapse', function () {
      $('#navbar-hamburger').addClass('hidden');
      $('#navbar-close').removeClass('hidden');
    })
    .on('hidden.bs.collapse', function () {
      $('#navbar-hamburger').removeClass('hidden');
      $('#navbar-close').addClass('hidden');
    });

});

$(document).on('click', '.navbar-collapse.in', function (e) {
  if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
    $(this).collapse('hide');
  }
});
$(function () {
  $(document).click(function (event) {
    $('.navbar-collapse').collapse('hide');
  });
});

$(document).ready(function () {
  setTimeout(function () {
    $("#cookieConsent").fadeIn(200);
  }, 4000);
  $("#closeCookieConsent, .cookieConsentOK").click(function () {
    $("#cookieConsent").fadeOut(200);
  });
});

$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $('#scroll_navbar');
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        $(".navbar-default").addClass('navbar-scroll');
        $('.navbar-brand img').attr('src', 'https://mrdemonwolf.github.io/jslhub_com/assets/images/logo_text_dark.png');
      } else {
        $(".navbar-default").removeClass('navbar-scroll');
        $('.navbar-brand img').attr('src', 'https://mrdemonwolf.github.io/jslhub_com/assets/images/logo_text_light.png');
      }
    });
  }
});
