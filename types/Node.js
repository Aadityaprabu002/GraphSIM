class Node{
    constructor(id = 0,x,y,diameter,color,neighbour){
        this._id = id;
        this._x = x;
        this._y = y;
        this._diameter = diameter;
        this._color = color;
        this._neighbour = neighbour || new Set();
    } 
    getId(){
        return this._id;
    }
    addNeighbour(node){
        this._neighbour.add(node);
    }
    getNeighbour(){
        return this._neighbour;
    }
    draw(){
        // fill(this._color);
        // noStroke();
        circle(this._x,this._y,this._diameter);
       // circle(50,50,20);
        console.log('drew');
    }
}

