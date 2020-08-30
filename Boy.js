class Boy {
    constructor (x,y,width,height){
        var options = {
            isStatic:true
        }
        this.image = loadImage("sprites/boy.png")
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = 80;
       this.height = 150;
       World.add(world,this.body)

    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height)
        pop();
    }
}