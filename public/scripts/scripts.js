$(document).ready(function(){

  $('.carousel').slick({
    dots: true,
    arrows:false
  });

  $('#user-nav a').on('click', function(e){
    e.preventDefault();
    $('#user-nav .active').removeClass('active');
    $(this).addClass('active');
    var menu = $(this).attr('href');
    if($('#'+ menu + '-dropdown .dropdown-wrapper').hasClass('dropdown-active')){
      $('.dropdown-wrapper').removeClass('dropdown-active');
      $('#user-nav .active').removeClass('active');
    }else if($('.dropdown-wrapper').hasClass('dropdown-active')){
      $('.dropdown-wrapper').removeClass('dropdown-active');
      // This timer must be equal to the CSS transition timer
      setTimeout(function(){
       $('#'+ menu + '-dropdown .dropdown-wrapper').addClass('dropdown-active');
      }, 250);
    }else{
      $('#'+ menu + '-dropdown .dropdown-wrapper').addClass('dropdown-active');
    }
  });

});