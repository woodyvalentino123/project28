class Stone {
    constructor(x,y,radius){
        var options = {
            'density':0.001,
            'restitution':0.08,
            'isStatic':false
    }
    
    
    this.body = Bodies.circle(x,y,radius,options)
    this.radius = radius;
    this.image = loadImage("sprites/stone.png")
    World.add(world,this.body)

    }
    display(){

        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y)
        fill("red")
       imageMode(CENTER);
       image(this.image,0,0,this.radius,20)
        pop();
    }
}