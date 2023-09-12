$('#help-button, #close-button').on('click', function() {
  $('#help').toggleClass('hidden')
})
  
$('#right-arrow-button').click(function() {
	var leftPos = $('.days').scrollLeft()
	var distance = $('.day').outerWidth()
  var extra = 16
	$('.days').animate({scrollLeft: leftPos + distance + extra}, 500)
})

$('#left-arrow-button').click(function() {
	var leftPos = $('.days').scrollLeft()
	var distance = $('.day').outerWidth()
  var extra = 16
	$('.days').animate({scrollLeft: leftPos - distance - extra}, 500)
})



