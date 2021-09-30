class Ball{
    constructor(x,y,width,height,angle){
        var options={
            restitution : 2.65,
            friction: 1.0,
            density: 0.004
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle)
       ellipseMode(CENTER)
        strokeWeight(4)
        stroke("blue")
        fill("grey")
        ellipse(0,0,this.width, this.height)
        pop()
    }
}