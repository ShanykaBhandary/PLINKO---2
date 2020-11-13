class Plinko{
    constructor(x,y){
      var options={
        isStatic:true
      
      }  
      this.r = 10
      this.body = Bodies.circle(x,y,10,options);
       
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

       ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.r, this.r)
    }
} 