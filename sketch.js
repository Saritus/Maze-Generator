var cols, rows;
var w = 40;

function setup() {
  createCanvas(400, 400);
  cols = floor(width/w);
  rows = floor(height/w);

  for(var j = 0; j < rows; j++) {
    for(var i = 0; i < rows; i++) {
      var cell = new Cell(i, j);
    }
  }
}

function draw() {
  background(51);
}
