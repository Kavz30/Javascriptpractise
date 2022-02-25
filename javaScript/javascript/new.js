function abc()
{
    console.log('hello');
    this.name = "this is demo text";
    console.log(this.name);
    console.log(this.name.toUpperCase());
    this.name = this.name.concat(' welcome');
    console.log(this.name);
    console.log(this.name.slice(0, 18));
    this.name = this.name.replace('demo','DEMO');
    console.log(this.name);
    console.log(this.name.lastIndexOf('DEMO'));
    console.log(this.name.startsWith('this'));
    console.log(this.name.endsWith('welcome'));
}
abc();
var cars = ["Apple", "Orange", "Mango"];
cars[3] = "grapes";
cars.push(new Date());
cars.pop();

for (var i = 0; i < cars.length; i++)
{
    console.log(cars[i]);
}
console.log('------------------')
var fruits = new Array();
fruits[0] = "Banana";
fruits[1] = "Stawberry";
fruits[2] = "Gauva";
fruits[3] = "Sappota";
fruits.push("apple");
fruits.sort().reverse();
for (const items of fruits)
{
    console.log(items);
}
console.log('------------------')
var date = new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getFullYear());
//console.log(date.getTime());
console.log("Time "+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds())
console.log(date.getDay());
