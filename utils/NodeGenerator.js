class NodeGenerator {
  static generate(maxWidth, maxHeight, maxNode, maxNodeSize, color) {
    let nodes = [];
    for (let nodeId = 1; nodeId <= maxNode; nodeId++) {
      let x = Math.floor(Math.random() * maxHeight) + 100;
      let y = Math.floor(Math.random() * maxWidth) + 100;
      let d = Math.floor(Math.random() * maxNodeSize) + 20;
      let c = color;
      let node = new Node(nodeId, x, y, d, c, null);
      nodes.push(node);
    }
    return nodes;
  }
}
