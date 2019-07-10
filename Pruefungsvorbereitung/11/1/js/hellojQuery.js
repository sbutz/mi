$(document).ready(function () {
	$('#theRedButton').on('click', function() {
		$('h1').addClass('redElements');
		$('h2').addClass('redElements');
		$('h3').addClass('redElements');
	});

	$('#theSpeakersButton').on('click', function() {
		$('#speakerHeading').fadeOut(1000);
	});
});
