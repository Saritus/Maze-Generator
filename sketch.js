// https://www.youtube.com/watch?v=HyK_Q5rrcr4

var cols, rows;
var w = 30;
var grid = [];
var current;

var stack = [];

function setup() {
  createCanvas(600, 600);
  cols = floor(width/w);
  rows = floor(height/w);
  frameRate(10);

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
  current.highlight();

  // STEP 1
  var next = current.checkNeighbors();
  if (next) {
    next.visited = true;

    // STEP 2
    stack.push(current);

    // STEP 3
    removeWalls(current, next);

    // STEP 4
    current = next;
  }
  else if (stack.length > 0) {
    current = stack.pop();
  }

}

function index(i, j) {
  if ( i < 0 || j < 0 || i > cols-1 || j > rows-1 ) {
    return -1;
  }
  return i + j * cols;
}

function removeWalls(a, b) {

  var dx = a.i - b.i;
  if (dx == 1) {
    a.walls['left'] = false;
    b.walls['right'] = false;
  }
  else if (dx == -1) {
    a.walls['right'] = false;
    b.walls['left'] = false;
  }

  var dy = a.j - b.j;
  if (dy == 1) {
    a.walls['top'] = false;
    b.walls['bottom'] = false;
  }
  else if (dy == -1) {
    a.walls['bottom'] = false;
    b.walls['top'] = false;
  }
}
