//Evaluate these:
//#1
[2] === [2] //false
//{} === {} //SynyaxError 

//#2 what is the value of property a for each object.
const object1 = { a: 5 };//5 
const object2 = object1; //5
const object3 = object2; //5
const object4 = { a: 5}; //5
object1.a = 4;//4


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal{
    constructor(name,type,color){
        this.name = name;
        this.type = type;
        this.color = color;
    }

    introduce(){
        console.log(`Welcome to this "Animal Kingdom". These attributes identify animals in the kingdom: ${this.name}, ${this.type}, ${this.color}`);

    }
}

class Mammal extends Animal{
    constructor(name,type,color){
        super(name,type,color)
    }

    mooSound(){
        console.log(`My name is ${this.name}, I belong to the ${this.type} family and my skin color is ${this.color}`);        
    }
}


const cow = new Mammal('Bull','cattle','black');
cow.mooSound();
cow.introduce();