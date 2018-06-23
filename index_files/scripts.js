$(document).ready(function(){
  $('.main-banner').height($(window).height());
  $('.main-banner img').css('max-height', $(window).height()/2.2);
});

$(window).bind('load resize', function(){
  $('.main-banner').height($(window).height());
  $('.main-banner img').css('max-height', $(window).height()/2.2);
});