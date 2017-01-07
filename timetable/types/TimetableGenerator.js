"use strict";
/**
 * Created by Dawson on 1/4/2017.
 */
var Course_1 = require('./Course');
var CombinationTumbler_1 = require("./CombinationTumbler");
//import data from "../data/mac-course-list-17";
//var data1 = require("../data/mac-course-list-17");
var TimetableGenerator = (function () {
    function TimetableGenerator(data) {
        // math: Course = new Course("SE 2AA4");
        this.data = {};
        this.tumbler = new CombinationTumbler_1.CombinationTumbler();
        //console.log("blooooooob 3");
        this.data = data;
        //this.math.list = ["code"];
        //console.log(data);
        this.simulate();
    }
    TimetableGenerator.prototype.simulate = function () {
        // console.log(this.data[0]);
        this.tumbler.addSlot(new Course_1.Course(this.data[0]));
        // this.tumbler.addSlot(new Course(this.data[1]));
        // this.tumbler.addSlot(new Course(this.data[2]));
        // this.tumbler.addSlot(new Course(this.data[3]));
        // this.tumbler.addSlot(new Course(this.data[4]));
        // this.tumbler.print();
    };
    return TimetableGenerator;
}());
exports.TimetableGenerator = TimetableGenerator;
//# sourceMappingURL=TimetableGenerator.js.map