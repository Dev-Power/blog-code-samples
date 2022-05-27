getFilms().then(data => {
  new Chart(document.getElementById('mixedChart').getContext('2d'), {
    type: 'bar',
    data: {
      labels: data.map(d => d.title),
      datasets: [
        {
          type: 'line',
          label: '# of planets',
          data: data.map(d => d.planets.length),
          borderWidth: 1,
          backgroundColor: getRandomColor()
        },
        {
          type: 'bar',
          label: '# of vehicles',
          data: data.map(d => d.vehicles.length),
          borderWidth: 1,
          backgroundColor: getRandomColor()
        },
        {
          type: 'bar',
          label: '# of starships',
          data: data.map(d => d.starships.length),
          borderWidth: 1,
          backgroundColor: getRandomColor()
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





