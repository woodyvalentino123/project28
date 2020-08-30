class Tree{
    constructor (x,y,width,height){
        var options = {
            isStatic:true
        }
        this.image = loadImage("sprites/tree.png");
       this.body = Bodies.rectangle(x,y,800,20,options);
       this.width = 300;
       this.height = 400;
       World.add(world,this.body)

    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
       
        image(this.image,pos.x,pos.y,this.width,this.height)
    }
}