class Floor{

    constructor(x, y, width, height){
        var options = {
            friction : 0.1,
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        this.body.velocity.x = -5;
        console.log(this.body);
        World.add(world, this.body);
    }

    display(){
        rectMode(CENTER);
        noStroke();
        fill(color(172, 71, 204));
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        
    }
}