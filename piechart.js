google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['User Type', 'Number'],
    ['Students', 400],
    ['Teachers', 80],
    ['Admins', 10]
  ]);

  var options = {
    title: 'User Distribution'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
