"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(id, name, marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
    return Student;
}());
exports.Student = Student;
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(id, name, marks, subject) {
        var _this = _super.call(this, id, name, marks) || this;
        _this.subject = subject;
        return _this;
    }
    Teacher.prototype.verify = function () {
        if (this.marks >= 35) {
            console.log("Student name is ".concat(this.name, " and passed  in ").concat(this.subject));
        }
        else {
            console.log('fail');
        }
    };
    return Teacher;
}(Student));
var std1 = new Teacher(1, 'kaviya', 70, 'English');
std1.verify();
