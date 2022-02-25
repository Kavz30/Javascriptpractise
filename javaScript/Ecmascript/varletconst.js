

function abc()
{
    var vegies = ["carrot", "beetroot", "cabbage", "ladiesfinger"];

    for (let index = 0; index < vegies.length; index++)
    {
        let veg = vegies[index]
        console.log(veg);
    }
    console.log(vegies);
    //console.log(index);
    //console.log(veg);

}
abc();
console.log('Template String')
var message = `This is a 
      a message 
      from kaviya`;
console.log(message);
var a = 10;
var b = 20;
console.log(`the result is${a + b}`);