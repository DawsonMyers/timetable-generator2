"use strict";
/**
 * Created by Dawson on 1/4/2017.
 */
// import {process} from "node";
// import process = require('@types/node')
var Utilities_1 = require("./Utilities");
var _ = require("lodash");
var Timetabler_1 = require("./Timetabler");
var CombinationTumbler = (function () {
    function CombinationTumbler() {
        this.combinations = {};
        this.slotCount = 0;
        this.courseSlots = [];
        // timetabler = new Timetabler();
        this.validFullCombos = [];
        this.tempCombo = [];
        // course: Course combo=
        // {
        //     core: TimeBlock = {name: '01', times: [{name, day, start, end}, ...]};
        //     tutorial: TimeBlock;
        //     lab: TimeBlock;
        // }
        this.i = 0;
    }
    CombinationTumbler.prototype.addSlot = function (slot) {
        slot.slotId = ++this.slotCount;
        this.courseSlots.push(slot);
    };
    CombinationTumbler.prototype.bruteForce = function () {
        // let tSet: DayClass[];
        //
        // for(let course of this.courseSlots){
        //
        // }
        // _.each(this.courseSlots, (c) => {
        //         log('c.slotId = ' + c.slotId)
        //         log('c.validCombos.length = ' + c.validCombos.length);
        //         logObj(c);
        //     }
        // );
        // log(this.courseSlots);
        this.spinCombos(this.courseSlots[0]);
    };
    CombinationTumbler.prototype.spinCombos = function (course) {
        var _this = this;
        if (course == null) {
            Utilities_1.log('NULL course');
            return;
        }
        console.log("IN SPIN COMBOS");
        // logObj(course);
        // each course part : core, tut, lab
        //_.each(course, (c)=>{
        // log("course.validCombos ===" + course.validCombos);
        // log(`course.validCombos[] ===` + logObj(course.validCombos[course.validCombos.length - 1]));
        _.each(course.validCombos, function (combo) {
            // log('EACH COURSE');
            // log('iteration count = ' + (++this.i));
            // store combo in tempCombo at the index corrisponding to its slotID
            _this.tempCombo[course.slotId - 1] = combo;
            // log(`slotId = ${course.slotId}, count = ${this.slotCount}`);
            if (course.slotId < _this.slotCount) {
                // log('slot id is less than count');
                // call recursively with course in next slot as input
                // the array index and course slot ID start at 0, so add 1 to get next course
                _this.spinCombos(_this.courseSlots[course.slotId]);
            }
            else {
                // log('final slot reached____ combo ====');
                // logObj(this.tempCombo);
                // schedule times in table to find conflicts
                // for each course combo in array [ {core:{times:[]}, tutorial:{times:[]},...}, {} ]
                var isValid_1 = false;
                var conflictCount_1 = 0;
                var timetabler_1 = new Timetabler_1.Timetabler();
                _.each(_this.tempCombo, function (course) {
                    _.each(course, function (part) {
                        _.each(part, function (time) {
                            isValid_1 = timetabler_1.trySchedule(time.day, time.start, time.end);
                            if (!isValid_1) {
                                conflictCount_1++;
                            }
                        });
                    });
                });
                // add if valid
                if (conflictCount_1 == 0) {
                    Utilities_1.log('VALID TIMETABLE FOUND======================');
                    Utilities_1.log('======================');
                    Utilities_1.log('======================');
                    Utilities_1.log('======================');
                    Utilities_1.log('======================');
                    Utilities_1.logObj(_this.tempCombo);
                    // clone copy of array into valid combo array
                    _this.validFullCombos.push(_this.tempCombo.slice(0));
                }
                else {
                }
            }
        });
        //});
        Utilities_1.log("Valid count = " + this.validFullCombos.length);
        Utilities_1.logObj(this.validFullCombos);
    };
    CombinationTumbler.prototype.validateCombo = function (combo) {
        // does the core class start and end before the tutorial?
        // OR does the tutorial class start and end before the core?
        // else the classes overlap and there is a noConflict
        Utilities_1.logObj(combo);
        // if(this.noConflict(core, tutorial) &&
        //     this.noConflict(core, lab) &&
        //     this.noConflict(tutorial, lab)){
        //     return true;
        // }
        return false;
    };
    CombinationTumbler.prototype.noConflict = function (a, b) {
        // they must be on the same day
        // in cases where the course doesn't have a tutorial or lab
        // if(a.name == 'NONE' || b.name == 'NONE' || (a.day != b.day)){
        //     return true
        // }
        //
        // // does a start and finish before b OR
        // // does b start and finish before a
        // // there is a conflict if not
        // if(
        //     (a.start < b.start && a.end <= b.start ||
        //     b.start < a.start && b.end <= a.start)){
        //     this.log("no  Conflict");
        //     return true
        // }
        //
        //  log("Conflict FOUND");
        return false;
    };
    CombinationTumbler.prototype.print = function () {
        console.log(this.courseSlots);
    };
    return CombinationTumbler;
}());
exports.CombinationTumbler = CombinationTumbler;
//# sourceMappingURL=CombinationTumbler.js.map