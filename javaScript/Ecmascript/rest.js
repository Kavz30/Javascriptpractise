console.log('rest operator');

function add(c,...a)
{
    var b=0;
    for (const i of a) {
        b= b + i;
    }
    console.log(c);
    console.log(b);
}

add(1, 2, 3, 4, 5);
add(1, 2, 3);
add(10, 20, 30, 40);
console.log("------------spread operator--------------")
var arr = [1, 2, 3, 4];
var arr1 = [5, 6, 7, 8];
var arr2 = [...arr, ...arr1];
console.log(...arr2);
console.log(...arr, ...arr1);



let str = "hello";
console.log(...str);