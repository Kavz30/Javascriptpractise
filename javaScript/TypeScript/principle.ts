import { Student } from './student';
class Principle extends Student{

    constructor(id: number, name: string, marks: number)
    {
        super(id, name, marks);
    }
}

var pp: Principle = new Principle(1,'priya',100);
console.log(pp.marks);