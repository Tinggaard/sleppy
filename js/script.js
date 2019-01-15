$(document).ready(function () {
	$('.toast').show()
	$('.toast').toast('show')

	$('#countdown').timezz({
		'days': ':',
		'hours': ':',
		'minutes': ':',
		'seconds': ''
	});


});

// Load google charts
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
	var data = google.visualization.arrayToDataTable([
		['Task', 'Timer om dagen'],
		['Skole', 8],
		['Spiser', 2],
		['Træning', 4],
		['Gym', 2],
		['Søvn', 8]
	]);

	// Optional; add a title and set the width and height of the chart
	var options = { 'title': 'Din gennemsnitsdag' };

	// Display the chart inside the <div> element with id="piechart"
	var chart = new google.visualization.PieChart(document.getElementById('piechart'));
	chart.draw(data, options);
}

