class Graph {
  constructor() {
    this._nodeStore = new Map();
  }
  getNodeStore() {
    return this._nodeStore;
  }
  _drawArrow(startX, startY, endX, endY) {
    let arrowSize = 10;
    let angle = atan2(endY - startY, endX - startX);
    line(startX, startY, endX, endY);
    push();
    fill(color(ARROW_COLOR));
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
}
