google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Time', 'Engagement'],
    ['Week 1', 100],
    ['Week 2', 120],
    ['Week 3', 130],
    ['Week 4', 150]
  ]);

  var options = {
    title: 'User Engagement with Personalized Content',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
  chart.draw(data, options);
}
