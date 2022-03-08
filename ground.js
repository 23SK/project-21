class Ground{
    constructor(x,y,w,h){
    var options ={
        isStatic:true,
        density:0.8,
    }
        this.body = Bodies.rectangle(x,y,w,h);
        this.w = w;
        this.h = h;
        
    }

    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER)
        rect(pos.x,pos.y,this.w,this.h);
        fill("black");
        pop();
    }
}