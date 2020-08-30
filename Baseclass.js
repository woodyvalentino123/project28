class Baseclass {
    constructor (x,y,radius){
        var options = {
            isStatic:true
        }
        this.image = loadImage("sprites/stone.png");
       this.body = Bodies.circle(x,y,radius,options);
       this.radius = 50;
       
       World.add(world,this.body)

    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,20);
}
}