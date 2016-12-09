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

  this.highlight = function() {
    var x = this.i*w;
    var y = this.j*w;

    noStroke()
    fill(0, 255, 0, 100);
    rect(x,y,w,w);
  }

  this.show = function() {
    var x = this.i*w;
    var y = this.j*w;

    if (this.visited) {
      noStroke()
      fill(255, 0, 255, 100);
      rect(x,y,w,w);
    }

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

  }
}
