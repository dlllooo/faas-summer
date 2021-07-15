class Animal {
    constructor (species,color, legs){
        this.species = species;
        this.color = color ;
        this.legs = legs;
    }
}

class Cat extends Animal{
    constructor(legs){
        super("feline","blue",legs);
    }


}
let catA = new Cat(4);
function setup(){
    createCanvas (200,200);

}
function draw(){
    console.log(catA.legs);
}
