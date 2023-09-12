var cta = function() {
  
  $('.cta').on('click', function() {
    $('#form-modal').toggleClass('hidden')
    $('html').toggleClass('no-scroll')
  	$('body').toggleClass('no-scroll')
  })
  
  $('#form-modal .close-button').on('click', function() {
    $('#form-modal').toggleClass('hidden')
    $('html').toggleClass('no-scroll')
  	$('body').toggleClass('no-scroll')
  })
  
}

cta()

var video = function() {
  
  $('#video.button').on('click', function() {
    $('#video-modal').toggleClass('hidden')
    $('html').toggleClass('no-scroll')
  	$('body').toggleClass('no-scroll')
  })
  
  $('#video-modal .close-button').on('click', function() {
    $('#video-modal').toggleClass('hidden')
    $('html').toggleClass('no-scroll')
  	$('body').toggleClass('no-scroll')
  })
  
}

video()


