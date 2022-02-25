import {Car} from './car'
class BMX extends Car{


    constructor(name,model,prize,type)
    {
        super(name,model,prize)
        this.type=type
    }
    
}
var bmx = new BMX('BMX', '530D', 100000, 'sedan');
bmx.getCardetails();