var emp = { 'name': 'kaviya', 'age': 21, 'salary': 20000, 'city': 'blore' };
console.log(emp.city);
var emp1 = { 'name': 'priya', 'age': 21, 'salary': 20000 }; //invoke interface variables
var emp2 = {
    'name': 'Rahu',
    'age': 21,
    display: function () {
        return "Hai welcome all";
    }
}; //? mark is given to salary field so it is optional
console.log('****************');
console.log("Employee name:" + emp1.name);
console.log("Employee age:" + emp1.age);
console.log("Employee salary:" + emp1.salary);
console.log('****************');
console.log("Employee name:" + emp2.name);
console.log("Employee age:" + emp2.age);
console.log("Employee salary:" + emp2.salary);
console.log("Employee display:" + emp2.display());
