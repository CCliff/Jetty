$(document).ready(function(){

  $('.carousel').slick({
    dots: true,
    arrows:false
  });

  $('#user-nav a').on('click', function(e){
    e.preventDefault();
    var menu = $(this).attr('href');
    if($('#'+ menu + '-dropdown .dropdown-wrapper').hasClass('dropdown-active')){
      $('.dropdown-wrapper').removeClass('dropdown-active');
      // $('#'+ menu + '-dropdown .dropdown-wrapper').removeClass('dropdown-active');
    }else{  
      $('.dropdown-wrapper').removeClass('dropdown-active');
      $('#'+ menu + '-dropdown .dropdown-wrapper').addClass('dropdown-active');
    }
  });

});