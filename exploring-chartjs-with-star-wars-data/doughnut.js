new Chart(document.getElementById('doughnutChart').getContext('2d'), {
  type: 'doughnut',
  data: {
    labels: boxOfficeValues.map(d => d.title),
    datasets: [
      {
        data: boxOfficeValues.map(d => d.boxOffice),
        backgroundColor: getRandomColorList(boxOfficeValues.length)
      }
    ]
  },
  options: {
    responsive: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Star Wars Box Office Values (in USD)'
      }
    }
  }
});



