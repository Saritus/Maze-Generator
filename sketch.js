// https://www.youtube.com/watch?v=HyK_Q5rrcr4

var cols, rows;
var w = 40;
var grid = [];

function setup() {
  createCanvas(400, 400);
  cols = floor(width/w);
  rows = floor(height/w);

  for(var j = 0; j < rows; j++) {
    for(var i = 0; i < rows; i++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }
}

function draw() {
  background(51);
  for (var i=0; i<grid.length; i++) {
    grid[i].show();
  }
}

function Cell(i, j) {
  this.i = i;
  this.j = j;

  this.walls = []
  this.walls['top'] = true
  this.walls['right'] = true
  this.walls['bottom'] = true
  this.walls['left'] = true

  this.show = function() {
    var x = this.i*w;
    var y = this.j*w;
    stroke(255);
    if (this.walls['top']) {
      line(x,     y,     x + w, y    ); // Top
    }
    if (this.walls['right']) {
      line(x + w, y,     x + w, y + w); // Right
    }
    if (this.walls['bottom']) {
      line(x,     y + w, x + w, y + w); // Bottom
    }
    if (this.walls['left']) {
      line(x,     y,     x,     y + w); // Left
    }
    // noFill();
    // rect(x,y,w,w);
  }
}
