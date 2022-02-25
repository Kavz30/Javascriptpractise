interface Adrress{
    city: string;
    pincode: number;

}
interface Employee extends Adrress{
    id: number;
    name: string;
    display():void;
}

var v: Employee = {
    id: 1,
    name: "kaviyapriya",
    city: "Karur",
    pincode: 639117,
    display: function (): void {
        console.log(`demo text`);
    }
}

console.log(`******json******`)
console.log(`Name is ${v.name} and city is ${v.city}`)
console.log(`display function call`);
v.display();

class Manager implements Employee{
    id: number;
    name: string;
    city: string;
    pincode: number;
    
    constructor(id: number, name: string, city: string, pincode: number) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.pincode = pincode;
        
    }
    display(): void {
        console.log(`using object implementation`);
       console.log(`Hi this is ${this.name} and I am in ${this.city} city`)
    }
}
var employee: Manager = new Manager(1, 'kaviya', 'chennai', 445566);
employee.display();
