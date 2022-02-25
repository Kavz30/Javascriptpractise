var v = {
    id: 1,
    name: "kaviyapriya",
    city: "Karur",
    pincode: 639117,
    display: function () {
        console.log("demo text");
    }
};
console.log("******json******");
console.log("Name is ".concat(v.name, " and city is ").concat(v.city));
console.log("display function call");
v.display();
var Manager = /** @class */ (function () {
    function Manager(id, name, city, pincode) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.pincode = pincode;
    }
    Manager.prototype.display = function () {
        console.log("using object implementation");
        console.log("Hi this is ".concat(this.name, " and I am in ").concat(this.city, " city"));
    };
    return Manager;
}());
var employee = new Manager(1, 'kaviya', 'chennai', 445566);
employee.display();
