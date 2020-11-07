class Log{
     constructor(x,y,height,angle){

        var options = {
            friction: 1.0,
            density: 1.2,
            restitution: 0.5
        }

        this.body = Bodies.rectangle(x,y,20,height,options);
        this.w = 20;
        this.h = height;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);

     }

     display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        strokeWeight(4);
        stroke("green");
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();

     }



}