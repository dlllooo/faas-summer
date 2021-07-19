class Instrument {
    constructor(family,verb, loudness){
        this.family = family;
        this.verb = verb;
        this.loudness = loudness;
    }

    play(){
        console.log(this.family + this.verb + " at volume " + this.loudness);
    
    }

}

class Woodwind extends Instrument {
    constructor(loudness){
        super("Woodwind " , "blow",loudness );
    }
}

class Percussion extends Instrument {
    constructor(loudness){
        super("Percussion ", "drums", loudness);
    }

}

class String extends Instrument {
    constructor(loudness){
        super("String " , "bounces" , loudness);
    }
}

let instruments = [];
instruments[0] = new Woodwind(10);
instruments[1] = new Percussion(2);
instruments[2] = new String(8);


function setup(){
    createCanvas (500,500);

}
function draw(){
   instruments[0].play();
   instruments[1].play();
   instruments[2].play();
}