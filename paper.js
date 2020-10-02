class paper {
    constructor(x,y,width,height,radius){
       var options = {
           isStatic : false,
           restitution : 0.3,
           friction : 0.5,
           density : 1.2
        }
        this.body = Bodies.Circle(x,y,20,20,radius,options);
        this.width = 20;
        this.height = height;
        this.radius = 20;
        Matter.Bodies.circle(x, y, radius);

    }

    display(){
        ellipse(56, 46, 55, 55);
        ellipseMode(CENTER);
        Fill("purple");
    }

}