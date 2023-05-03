var graph = null;
function setup() {
  let canvas = createCanvas(800, 800);
  let sketchBoard = select(".sketch-board");
  canvas.parent(sketchBoard);
}

function draw() {
  background(color(BACKGROUND_COLOR));
  strokeWeight(2);
  textSize(20);
  if (graph != null) {
    graph.renderNode();
    graph.renderEdge();
  }
}
