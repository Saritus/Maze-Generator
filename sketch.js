// https://www.youtube.com/watch?v=HyK_Q5rrcr4

var cols, rows;
var w = 40;
var grid = [];
var current;

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

  current = grid[0];

}

function draw() {
  background(51);
  for (var i=0; i<grid.length; i++) {
    grid[i].show();
  }

  current.visited = true;
  var next = current.checkNeighbors();

}

function index(i, j) {
  if ( i < 0 || j < 0 || i > cols-1 || j > rows-1 ) {
    //return -1;
  }
  return i + j * cols;
}

function Cell(i, j) {
  this.i = i;
  this.j = j;
  this.visited = false;

  this.walls = []
  this.walls['top'] = true
  this.walls['right'] = true
  this.walls['bottom'] = true
  this.walls['left'] = true

  this.checkNeighbors = function() {
    var neighbors = [];

    var top    = grid[index(i    , j - 1)];
    var right  = grid[index(i + 1, j    )];
    var bottom = grid[index(i    , j + 1)];
    var left   = grid[index(i - 1, j    )];

    if(top && !top.visited) {
      neighbors.push(top);
    }
    if(right && !right.visited) {
      neighbors.push(right);
    }
    if(bottom && !bottom.visited) {
      neighbors.push(bottom);
    }
    if(left && !left.visited) {
      neighbors.push(left);
    }

    if(neighbors.length > 0) {
      var r = floor(random(0, neighbors.length));
      return neighbors[r]
    }
    else {
      return undefined;
    }

  }

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

    if (this.visited) {
      fill(128, 0, 128);
      rect(x,y,w,w);
    }

  }
}
