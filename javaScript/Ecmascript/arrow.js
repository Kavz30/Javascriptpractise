function hello()
{
    console.log('hai');
}
() => //single line code;
    Sub = () => {
        //multiple line code;
    }

var x = (a, b) => a + b;
console.log(x(4, 5));

var Can = (c, d) => {
    console.log(`the result is ${c + d}`);
    return c + d;
}
console.log(Can(2, 3));
hello();
var xyz = (x,y) => {
   // var a = 10;
   // var b = 20;
    console.log(`the result is ${x + y}`);
    return x+ y;
}
var b = xyz(10,20);
console.log(b);
console.log("Fucntio as parameter");
//function add(xyz)
//{
 //   var a = xyz;
//    console.log(a);
//}

//add(xyz());