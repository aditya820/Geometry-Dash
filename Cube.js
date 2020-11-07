class Cube{

    constructor(x,y,width,height){
        var options = {
            restitution : 1,
            friction : 0.1,
            isStatic : false
        }

        this.body = Bodies.rectangle(x,y,width,height, options); 
        console.log(this.body);
        this.width = width;
        this.height = height;
        World.add(world, this.body);    
    }

    display(){
        rectMode(CENTER);
        var pos = this.body.position;
        noStroke();
        fill(color(107, 246, 236));
        rect(pos.x,pos.y,this.width,this.height);  
    }
}
