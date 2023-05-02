var graph;

function setup() {
  
  graph = new Graph();
  let nodes = graph.generateNode(400,400,5,50);
  console.log(nodes);
  for(let node of nodes){
    graph.addNode(node);
  }
  createCanvas(500, 500);
}

function draw() {
  background(255);
  graph.renderNode();
  graph.renderEdge();
}
