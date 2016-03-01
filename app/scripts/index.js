var $ = require('jquery');

console.log('hello');
// $(".accordion").accordion();

// function(event eventObject)

$('.section-1').click(function(){
  $('#accordion-1').addClass('show');
  $('#accordion-2').removeClass('show');
  $('#accordion-3').removeClass('show');
  $('#accordion-4').removeClass('show');
  $('#accordion-5').removeClass('show');
})

$('.section-2').click(function(){
  $('#accordion-1').removeClass('show');
  $('#accordion-2').addClass('show');
  $('#accordion-3').removeClass('show');
  $('#accordion-4').removeClass('show');
  $('#accordion-5').removeClass('show');
})

$('.section-3').click(function(){
  $('#accordion-1').removeClass('show');
  $('#accordion-2').removeClass('show');
  $('#accordion-3').addClass('show');
  $('#accordion-4').removeClass('show');
  $('#accordion-5').removeClass('show');
})

$('.section-4').click(function(){
  $('#accordion-1').removeClass('show');
  $('#accordion-2').removeClass('show');
  $('#accordion-3').removeClass('show');
  $('#accordion-4').addClass('show');
  $('#accordion-5').removeClass('show');
})

$('.section-5').click(function(){
  $('#accordion-1').removeClass('show');
  $('#accordion-2').removeClass('show');
  $('#accordion-3').removeClass('show');
  $('#accordion-4').removeClass('show');
  $('#accordion-5').addClass('show');
})

// var button = document.querySelector('.accordion-section-title');
//   button.addEventListener('click', function(){
//     alert('clicked')
//   });
