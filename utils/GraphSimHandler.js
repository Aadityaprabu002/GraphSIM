function generateNode() {
  if (graph == null) {
    alert("Graph not created!");
    return;
  }
  const count = document.getElementById("generate-input").value;
  const generateBtn = document.getElementById("generate-btn");

  if (count < 3 || count > 10) {
    alert("Enter valid count between 3 and 10!");
    return;
  }
  generateBtn.disabled = true;
  let nodes = NodeGenerator.generate(600, 600, count, 50, color(NODE_COLOR));
  for (let node of nodes) {
    graph.addNode(node);
  }
}
function connectNode() {
  const node1 = parseInt(document.getElementById("node-1-input").value);
  const node2 = parseInt(document.getElementById("node-2-input").value);
  if (node1 === node2) {
    alert("Enter different nodes!");
    return;
  }
  const nodeStore = graph.getNodeStore();

  if (nodeStore.has(node1) && nodeStore.has(node2)) {
    graph.addEdge(node1, node2);
  } else {
    alert("Node does not exist!");
  }
}
function createGraph() {
  if (graph == null) {
    graph = new Graph();
  }
  const createBtn = document.getElementById("create-btn");
  const deleteBtn = document.getElementById("delete-btn");
  const generateBtn = document.getElementById("generate-btn");
  const connectBtn = document.getElementById("connect-btn");

  createBtn.disabled = true;
  deleteBtn.disabled = false;
  generateBtn.disabled = false;
  connectBtn.disabled = false;
}
function deleteGraph() {
  if (graph != null) {
    delete graph;
  }
  graph = null;
  const createBtn = document.getElementById("create-btn");
  const deleteBtn = document.getElementById("delete-btn");
  const generateBtn = document.getElementById("generate-btn");
  const connectBtn = document.getElementById("connect-btn");

  createBtn.disabled = false;
  deleteBtn.disabled = true;
  generateBtn.disabled = true;
  connectBtn.disabled = true;
}
