google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Set Data
    const data = google.visualization.arrayToDataTable([
      ['Price', 'Size'],
      [20,7],[30,2],[40,5],[50,10],[60,8],[70,8],[80,9],[90,9],
      [100,9],[110,10],[120,11],
      [130,14],[140,14],[150,15]
    ]);

    // Set Options
    const options = {
      legend: 'none'
    };

    // Draw
    const chart = new google.visualization.ScatterChart(document.getElementById('myChart'));
    chart.draw(data, options);

}