class Sling{    
        constructor(bodyA,pointB){
            var options = {
                bodyA: bodyA,
               pointB: pointB,
                stiffness: 0.04,
                length: 10
            }
            this.pointB = pointB;
            this.chain = Constraint.create(options);
            World.add(world, this.chain);
        }
        fly(){
            this.chain.bodyA = null;   
           }   
           attach(){
               this.chain.bodyA=body
           }
           
           detectCollision (lstone,lmango){
               mangoBodyPositon=lmango.body.position
               stoneBodyPostion=lstone.body.positon
               var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
               if(distance<=lmango.r+lstone.r){
                   Matter.Body.setStatic(lmango.body,false)
               }
           }

           
           
        display(){
            if(this.chain.bodyA){
    
            
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
        }
     
    }