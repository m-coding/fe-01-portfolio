// Slide show
$('#camera_wrap_1').camera({
	cols: 12,
	rows: 7,
	time: 5000,
	thumbnails: false,
	fx: 'mosaicRandom',
	pagination: false
});

// Show modal dialog when an image thumbnail is clicked
$('.enableDialog').click(function(event){
	var $img      = $(this);
	var $imgClone = $img.clone().removeClass('highlight');
	var $title    = $img.attr('alt');
	var $text     = $('#' + $img.data('city')).text();

	new BootstrapDialog({
	closable : true,
	title    : $title,
	message  : function(dialog) {
		var $msg = $('<div></div>');
		$msg.append($imgClone);
		$msg.append('<p class="msg">' + $text + '</p>');

		return $msg;
	}
	}).open();

	event.preventDefault();
});