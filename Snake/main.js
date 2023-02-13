let xSnake = 400;
let ySnake = 400;
let speedSnake = 4;
let directionX = 1;
let directionY = 0;
let actualBall = null;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  fill("green");
  background(220);
  if (!actualBall) {
    actualBall = generateRandomBall();
  }
  drawBorder();

  drawBall(actualBall);
  updatePlayer();
  drawPlayer(xSnake, ySnake);
}

function updatePlayer() {
  if (xSnake >= 0 && xSnake <= 750) {
    xSnake = xSnake + directionX * speedSnake;
  } else if (xSnake > 750) {
    xSnake = xSnake % 750;
  } else if (xSnake < 0) {
    xSnake = width - 50;
  }

  if (ySnake > 50 && ySnake < height - 100) {
    ySnake = ySnake + directionY * speedSnake;
  }
}

function keyPressed() {
  //Internamente almacena en una variable llamada "keyCode" la tecla que presionaste
  if (keyCode === LEFT_ARROW) {
    xSnake -= 1;
    directionX = -1;
    directionY = 0;
  } else if (keyCode === RIGHT_ARROW) {
    xSnake += 1;
    directionX = 1;
    directionY = 0;
  } else if (keyCode === UP_ARROW) {
    ySnake -= 1;
    directionX = 0;
    directionY = -1;
  } else if (keyCode === DOWN_ARROW) {
    ySnake += 1;
    directionX = 0;
    directionY = 1;
  }
}

function drawPlayer(xSnake, ySnake) {
  rect(xSnake, ySnake, 30, 30);
}

function drawBorder() {
  for (let indexX = 0; indexX < width; indexX += 50) {
    drawBlock(indexX, 0);
  }
  for (let indexX = 0; indexX < width; indexX += 50) {
    drawBlock(indexX, height - 50);
  }
}

function drawBlock(x, y) {
  rect(x, y, 50, 50);
}

function generateRandomBall() {
  return { x: 100, y: 100 };
}

function drawBall(ball) {
  circle(ball.x, ball.y, 20);
}
