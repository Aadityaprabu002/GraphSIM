class Graph{
    constructor(){
        this._nodeStore = new Map();
    }
    renderEdge(){
        for(let [key,value] of this._nodeStore){
            console.log(key);
        }
    }
    renderNode(){
        for(let node of this._nodeStore.values()){
            node.draw();
        }
    }
    addNode(node){
        this._nodeStore.set(node.getId(),node);
    }
    addEdge(u,v){
        if( u.isInteger() && v.isInteger() ){
            let uNode = this._nodeStore[u];
            let vNode = this._nodeStore[v];
            uNode.addNeighbour(vNode);
        }
        alert('Provided Invalid Id for Node U and V');
    }
    generateNode(maxHeight,maxWidth,maxNode,maxNodeSize){
        let nodes = []
        for(let nodeId = 0; nodeId <= maxNode; nodeId++){
            let x = Math.floor(Math.random() * maxHeight);
            let y = Math.floor(Math.random() * maxWidth);
            let d = Math.floor(Math.random() * maxNodeSize) + 20;
            let c = color(255,255,0);
            let node = new Node(nodeId,x,y,d,c,null);
            nodes.push(node);
        }
        return nodes;
    }
}