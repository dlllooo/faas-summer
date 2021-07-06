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
        ellipse(this.x, this.y , this.radius);
    }

}

class Ground {
    constructor(x,y,width,height,color){
        this.x= x;
        this.y=y;
        this.width=width;
        this.height= height;
        this.color= color;
        this.speed = 1+ Math.random() * 2 ;
    }

    update (){
        
        fill(this.color);
        rect(this.x,this.y,this.width,this.height);
        ellipse(this.x,this.y, 2,10)
        this.y =this.y + this.speed;
        this.speed = this.speed + .1;
    }
    
}

var myRaindrops = [
    new Rain(10,10,25,[230, 236, 255]),
    new Rain(25,15,10,[153, 179, 255]),
    new Rain(35,10,15,[204, 217, 255]),
    new Rain(50,10,30,[77, 121, 255]),
    new Rain(60,10,25,[230, 236, 255]),
    new Rain(75,15,10,[153, 179, 255]),
    new Rain(85,10,15,[204, 217, 255]),
    new Rain(100,10,30,[77, 121, 255]),
    new Rain(110,15,10,[153, 179, 255]),
    new Rain(125,10,15,[204, 217, 255]),
    new Rain(135,10,25,[230, 236, 255]),
    new Rain(150,15,10,[153, 179, 255]),
    new Rain(160,10,15,[204, 217, 255]),
    new Rain(175,10,30,[77, 121, 255]),
    new Rain(190,10,25,[230, 236, 255]),
    new Rain(200,15,10,[153, 179, 255]),
    new Rain(210,10,15,[204, 217, 255]),
    new Rain(220,10,30,[77, 121, 255]),
    new Rain(230,15,10,[153, 179, 255]),
    new Rain(240,10,15,[204, 217, 255]),
];

var ground = new Ground(0,460,500,40,[70, 210, 75]);

function setup (){
    createCanvas(500,500);
   
}

function draw(){
    background(34, 32, 79);
 for (let i = 0 ; myRaindrops.length; i++){
        myRaindrops[i].update();
    }
    
    ground.update();
}