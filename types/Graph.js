class Graph {
  constructor() {
    this._nodeStore = new Map();
  }
  getNodeStore() {
    return this._nodeStore;
  }
  _drawArrow(startX, startY, endX, endY) {
    var arrowSize = 10;
    var angle = atan2(endY - startY, endX - startX);
    line(startX, startY, endX, endY);
    push();
    fill(color(255, 0, 0));
    translate(endX, endY);
    rotate(angle);
    triangle(-arrowSize, arrowSize / 2, 0, 0, -arrowSize, -arrowSize / 2);
    pop();
  }
  renderEdge() {
    for (let node of this._nodeStore.values()) {
      let neighbour = node.getNeighbour();
      let [startX, startY] = node.getCoordinate();

      for (let eachNeighbour of neighbour) {
        let [endX, endY] = eachNeighbour.getCoordinate();
        strokeWeight(2);
        this._drawArrow(startX, startY, endX, endY);
      }
    }
  }
  renderNode() {
    for (let node of this._nodeStore.values()) {
      node.draw();
    }
  }
  addNode(node) {
    this._nodeStore.set(node.getId(), node);
  }
  addEdge(u, v) {
    if (Number.isInteger(u) && Number.isInteger(v)) {
      let uNode = this._nodeStore.get(u);
      let vNode = this._nodeStore.get(v);
      uNode.addNeighbour(vNode);
    } else {
      alert("Provided Invalid Id for Node U and V");
    }
  }
  deleteEdge(u, v) {
    if (Number.isInteger(u) && Number.isInteger(v)) {
      let uNode = this._nodeStore.get(u);
      let neighbour = uNode.getNeighbour();
      for (let eachNeighbour of neighbour) {
        if (v == eachNeighbour.getId()) {
          uNode.deleteNeighbour(eachNeighbour);
        }
      }
    } else {
      alert("Provided Invalid Id for Node U and V");
    }
  }
  generateNode(maxHeight, maxWidth, maxNode, maxNodeSize, color) {
    let nodes = [];
    for (let nodeId = 1; nodeId <= maxNode; nodeId++) {
      let x = Math.floor(Math.random() * maxHeight);
      let y = Math.floor(Math.random() * maxWidth);
      let d = Math.floor(Math.random() * maxNodeSize) + 20;
      let c = color;
      let node = new Node(nodeId, x, y, d, c, null);
      nodes.push(node);
    }
    return nodes;
  }
}
