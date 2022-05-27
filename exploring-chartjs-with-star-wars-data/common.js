const getRandomColor = () => {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const getRandomColorList = (length) => {
  let colors = [];
  for (i =0; i < length; i++) {
    colors.push(getRandomColor());
  }
  return colors;
}

const showChart = (type) => {
  const allTypes = ['bar', 'line', 'pie', 'doughnut', 'mixed'];

  allTypes.forEach(chartType => {
    const context = document.getElementById(chartType + 'Chart').getContext('2d');
    if (chartType === type) {
      context.canvas.hidden = false;
    } else {
      context.canvas.hidden = true;
    }
  });
}