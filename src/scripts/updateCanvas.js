const updateCanvas = () => {
  const width = window.innerWidth;
  const height = 100;
  const myCanvas = document.getElementById('myCanvas');
  myCanvas.width = width;
  myCanvas.height = height;
  const context = myCanvas.getContext('2d');
  context.fillStyle = '#FCEAB8';
  context.fillRect(0, 0, width, height);
  const circleSize = 10;
  const gaps = circleSize + 10;
  const widthCount = parseInt(width / gaps, 10);
  const heightCount = parseInt(height / gaps, 10);
  const aColors = ['#43A9D1', '#EFA63B', '#EF7625', '#5E4130'];
  const aColorsLength = aColors.length;
  for (let x = 0; x < widthCount; x += 1) {
    for (let y = 0; y < heightCount; y += 1) {
      context.fillStyle = aColors[parseInt(Math.random() * aColorsLength, 10)];
      context.beginPath();
      context.arc(circleSize + gaps * x, circleSize + gaps * y,
        circleSize, 0, Math.PI * 2, true);
      context.closePath();
      context.fill();
    }
  }
};

export default updateCanvas;
