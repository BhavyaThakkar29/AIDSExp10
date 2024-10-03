google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Content Type', 'Videos', 'Quizzes', 'Assignments'],
    ['Week 1', 5, 2, 1],
    ['Week 2', 7, 4, 2],
    ['Week 3', 6, 3, 2]
  ]);

  var options = {
    chart: {
      title: 'Content Creation and Curation',
      subtitle: 'Videos, Quizzes, Assignments'
    }
  };

  var chart = new google.charts.Bar(document.getElementById('stacked_bar_chart'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}
