getPeople().then(data => {
  new Chart(document.getElementById('lineChart').getContext('2d'), {
    type: 'line',
    data: {
      datasets: [
        {
          label: 'height',
          data: data.map(d => ({ x: d.name, y: d.height })),
          borderWidth: 1,
          backgroundColor: getRandomColorList(data.length)
        }
      ]
    },
    options: {
      responsive: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});


