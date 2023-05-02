var graph;

function setup() {
  graph = new Graph();
  let nodes = graph.generateNode(700, 700, 10, 50, color(255, 255, 0));
  console.log(nodes);
  for (let node of nodes) {
    graph.addNode(node);
  }
  graph.addEdge(3, 1);
  createCanvas(1000, 800);
}

function draw() {
  background(200);
  graph.renderNode();
  graph.renderEdge();
}
