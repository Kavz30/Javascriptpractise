export class Car{
     constructor(name, model, prize) {
        this.name = name;
        this.model = model;
        this.prize = prize;
    }

    getCardetails()
    {
        console.log('name' + this.name + " model" + this.model + " prize" + this.prize + "  This is type of car" + this.type); 
    }
}
class Hundai extends Car{
 
    constructor(name,model,prize,type)
    {
        super(name,model,prize)
        this.type=type
    }
    

}
class maruthi extends Hundai{
 
    constructor(name,model,prize,type)
    {
        super(name,model,prize)
        this.type=type
    }
    

}
var car = new Hundai(' hundai', ' i20',  400000, ' sedan');
car.getCardetails();
var car1 = new maruthi('maruthi', ' i20', 400000, ' sedan1');
car1.getCardetails();
