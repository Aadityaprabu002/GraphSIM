class DeadlockDetector {
    constructor() {
        this.nodesToKill = new Set();
        this.components = [];
        this.stack = [];
        this.visited = new Set();
        this.adjacencyList = new Map();
        this.reverseAdjacencyList = new Map();
    }
    findComponents(graph) {
        this.createAdjacencyList(graph);
        for (let nodeId of this.adjacencyList.keys()) {
            if (!this.visited.has(nodeId)){
                this.dfs(nodeId, this.adjacencyList, this.stack);
            }
        }
        this.visited.clear();
        this.reverseGraph();
        while (this.stack.length > 0) {
            let nodeId = this.stack.pop();
            let component = []
            if (!this.visited.has(nodeId)) {
                this.dfs(nodeId, this.reverseAdjacencyList, component);
            }
            this.components.push(component);
        }
        return this.findNodesToKill(this.components);
    }

    findNodesToKill(){
        
            for(let component of this.components){
                if (component.length > 1){
                    this.nodesToKill.add(component[0]);
                }
            }
            return this.nodesToKill;
            
    }

    createAdjacencyList(graph) {
        var graphDb = graph.getNodeStore();
        for (let nodeId of graphDb.keys()) {
            let neighbours = graphDb.get(nodeId).getNeighbour();
            for (let neighbour of neighbours) {
                let neighbourId = neighbour.getId();
                if (!this.adjacencyList.has(nodeId)) {
                    this.adjacencyList.set(nodeId, []);
                }
                if (!this.adjacencyList.has(neighbourId)) {
                    this.adjacencyList.set(neighbourId, []);
                }
                this.adjacencyList.get(nodeId).push(neighbourId);

            }
        }
    }

    dfs(nodeId, adjacencyList, stack) {
        this.visited.add(nodeId);
        for (let neighbourId of adjacencyList.get(nodeId)) {
            if (!this.visited.has(neighbourId)) {
                this.dfs(neighbourId, adjacencyList,stack);
            }
        }
        stack.push(nodeId);
    }
    
    reverseGraph() {
        for (let nodeId of this.adjacencyList.keys()) {
            let list = this.adjacencyList.get(nodeId);
            if (!this.reverseAdjacencyList.has(nodeId)) {
                this.reverseAdjacencyList.set(nodeId, []);
            }
            for (let neighbourId of list) {

                if (!this.reverseAdjacencyList.has(neighbourId)) {
                    this.reverseAdjacencyList.set(neighbourId, [])
                }
                this.reverseAdjacencyList.get(neighbourId).push(nodeId);
            }
        }
    }
}