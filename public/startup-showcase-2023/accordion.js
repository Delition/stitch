var accordion = function() {
	
  $('.header-row').on('click', function() {
    $(this).find('.acc-arrow').toggleClass('active')
  	$(this).next().slideToggle()
	})
  
}

accordion()