class Dustbin{
    constructor(x,y,w,h){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height = h;
        World.add(world,this.body);
        this.image = loadImage("Sprites/dustbingreen.png")
    }
    display() {
    var pos= this.body.position
    var angle= this.body.angle
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("Red");
    
    //rectMode(CENTER);
    //rect(0,0,this.width,this.height);
    pop();
    imageMode(CENTER);
    image(this.image,850,630,80,80)
    }
}