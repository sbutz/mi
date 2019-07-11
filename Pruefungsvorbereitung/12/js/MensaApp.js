var BASE_URL = 'https://regensburger-forscher.de:9001/mensa/uni/';
var listContainer;

var MONDAY = 'mo';
var THUESDAY = 'di';
var WEDNESDAY = 'mi';
var THURSDAY = 'do';
var FRIDAY = 'fr';
var SATURDAY = 'sa';
var SUNDAY = 'so';

function initMensaApp() {
	listContainer = $('#mensa_results');

	$('#get_monday_button').on('click', function() {
		fetchData(MONDAY);
	});
	$('#get_tuesday_button').on('click', function() {
		fetchData(THUESDAY);
	});

	listContainer.append('<li>Test</li>');

	fetchData(MONDAY);
}

function fetchData(day) {
	$.ajax({
		url: BASE_URL + day,
		dataType: 'json',
		success: dataRetrieved,
		error: errorRequestingData,
	});
}

function dataRetrieved(data) {
	listContainer.children().toArray().forEach(function(e) { e.remove(); });

	data.forEach(function(meal) {
		listContainer.append('<li>' + meal.name + '</li>');
	});
}

function errorRequestingData(error) {
	console.log(error);
}
