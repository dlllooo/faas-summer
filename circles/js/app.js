class Rain{
    constructor(x,y,radius,color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = 1+ Math.random() * 2 ;
    }

    update(){
        this.y =this.y + this.speed;
        this.speed = this.speed + .1;
        fill(this.color);
        ellipse(this.x, this.y , 2,10);
       

    }
}

var circles = new Rain[100];

function setup (){
    createCanvas(500,500);
}

function draw(){
    background(275, 85, 50);

}
