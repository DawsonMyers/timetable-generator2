/**
 * Created by Dawson on 1/4/2017.
 */
import {Course} from './Course';
import {CombinationTumbler} from "./CombinationTumbler";
import * as _ from 'lodash'
import {Timetabler} from "./Timetabler";
//import data from "../data/mac-course-list-17";
//var data1 = require("../data/mac-course-list-17");
export class TimetableGenerator {
    // math: Course = new Course("SE 2AA4");
    data = {};
    tumbler: CombinationTumbler = new CombinationTumbler();
    // timetabler = new Timetabler();
    constructor(data) {
        //console.log("blooooooob 3");
        this.data = data;
        //this.math.list = ["code"];

        //console.log(data);

        this.simulate();
        // this.simulateLodash()
    }

    simulate() {

        // logObj(this.timetabler);
       // console.log(this.data[0]);
        this.tumbler.addSlot(new Course(this.data[0]));
        this.tumbler.addSlot(new Course(this.data[1]));
        this.tumbler.addSlot(new Course(this.data[2]));
        this.tumbler.addSlot(new Course(this.data[3]));
        this.tumbler.addSlot(new Course(this.data[4]));
        // this.tumbler.print();

        //log("Filtered combos = ");
        //logObj(this.tumbler.slots[0].SimplifyCombos());

        this.tumbler.bruteForce();
    }


    private simulateLodash() {

    }
}
// export namespace Util {
   export function logObj(obj) {
        console.log(JSON.stringify(obj));
    }

    export function log(str) {
        console.log(str);
    }
// }