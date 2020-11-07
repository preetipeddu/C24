class Pig{
    constructor(x,y){

        var options = {
            friction: 1.0,
            density: 1.2,
            restitution: 0.5
        }

        this.body = Bodies.rectangle(x,y,50,50,options);
        this.w = 50;
        this.h = 50;
        World.add(world, this.body);
        
    }

    display(){
       var pos = this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       fill("green");
       strokeWeight(4);
       stroke("red");
       rectMode(CENTER);
       rect(0,0,this.w,this.h);
       pop();

    }


}