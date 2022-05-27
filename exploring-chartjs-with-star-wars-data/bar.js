getFilms().then(data => {
  new Chart(document.getElementById('barChart').getContext('2d'), {
    type: 'bar',
    data: {
      labels: data.map(d => d.title),
      datasets: [
        {
          label: '# of characters',
          data: data.map(d => d.characters.length),
          borderWidth: 1,
          backgroundColor: getRandomColor()
        },
        {
          label: '# of species',
          data: data.map(d => d.species.length),
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


