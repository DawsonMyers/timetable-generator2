"use strict";
/**
 * Created by Dawson on 1/4/2017.
 */
var Course_1 = require("./Course");
var CombinationTumbler_1 = require("./CombinationTumbler");
//import data from "../data/mac-course-list-17";
//var data1 = require("../data/mac-course-list-17");
var TimetableGenerator = (function () {
    // timetabler = new Timetabler();
    function TimetableGenerator(data) {
        // math: Course = new Course("SE 2AA4");
        this.data = {};
        this.tumbler = new CombinationTumbler_1.CombinationTumbler();
        //console.log("blooooooob 3");
        this.data = data;
        //this.math.list = ["code"];
        //console.log(data);
        this.simulate();
        // this.simulateLodash()
    }
    TimetableGenerator.prototype.simulate = function () {
        // logObj(this.timetabler);
        // console.log(this.data[0]);
        this.tumbler.addSlot(new Course_1.Course(this.data[0]));
        this.tumbler.addSlot(new Course_1.Course(this.data[1]));
        this.tumbler.addSlot(new Course_1.Course(this.data[2]));
        this.tumbler.addSlot(new Course_1.Course(this.data[3]));
        this.tumbler.addSlot(new Course_1.Course(this.data[4]));
        // this.tumbler.print();
        //log("Filtered combos = ");
        //logObj(this.tumbler.slots[0].SimplifyCombos());
        this.tumbler.bruteForce();
    };
    TimetableGenerator.prototype.simulateLodash = function () {
    };
    return TimetableGenerator;
}());
exports.TimetableGenerator = TimetableGenerator;
// export namespace Util {
function logObj(obj) {
    console.log(JSON.stringify(obj));
}
exports.logObj = logObj;
function log(str) {
    console.log(str);
}
exports.log = log;
// } 
//# sourceMappingURL=TimetableGenerator.js.map