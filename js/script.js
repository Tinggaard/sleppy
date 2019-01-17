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
	// Table 1
	var data1 = google.visualization.arrayToDataTable([
		['Task', 'Timer om dagen'],
		['Skole', 8],
		['Spiser', 2],
		['Træning', 3],
		['Søvn', 7.5],
		['Lektier', 3.5]
	]);

	// Optional; add a title and set the width and height of the chart
	var options1 = { 'title': 'Din gennemsnitsdag'};

	// Display the chart inside the <div> element with id="piechart"
	var chart = new google.visualization.PieChart(document.getElementById('piechart'));
	chart.draw(data1, options1);


	
	// Table 2
	var data2 = google.visualization.arrayToDataTable([
		['Dag siden start', 'Dig', 'Gennemsnit'],
		['Dag 1', 7, 6.5],
		['Dag 2', 7, 7],
		['Dag 3', 7.5, 6.5],
		['Dag 4', 7, 6.5],
		['Dag 5', 8, 7],
		['Dag 6', 7.5, 7]
	]);

	var options2 = {
		title: 'Din søvnrytme',
		curveType: 'function',
		legend: { position: 'bottom' },
		vAxis: { title: 'Timer' }
	};

	var chart = new google.visualization.LineChart(document.getElementById('linechart'));

	chart.draw(data2, options2);


}
