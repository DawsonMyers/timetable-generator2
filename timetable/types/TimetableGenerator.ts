/**
 * Created by Dawson on 1/4/2017.
 */
import {Course} from './Course';
import {CombinationTumbler} from "./CombinationTumbler";

//import data from "../data/mac-course-list-17";
//var data1 = require("../data/mac-course-list-17");
export class TimetableGenerator {
    // math: Course = new Course("SE 2AA4");
    data = {};
    tumbler: CombinationTumbler = new CombinationTumbler();

    constructor(data) {
        //console.log("blooooooob 3");
        this.data = data;
        //this.math.list = ["code"];

        //console.log(data);

        this.simulate();
    }

    simulate() {

       // console.log(this.data[0]);
        this.tumbler.addSlot(new Course(this.data[0]));
        // this.tumbler.addSlot(new Course(this.data[1]));
        // this.tumbler.addSlot(new Course(this.data[2]));
        // this.tumbler.addSlot(new Course(this.data[3]));
        // this.tumbler.addSlot(new Course(this.data[4]));
        // this.tumbler.print();
    }


}