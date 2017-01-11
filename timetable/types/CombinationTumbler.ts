import {Course, DayClass, TimeBlock} from "./Course";
/**
 * Created by Dawson on 1/4/2017.
 */

// import {process} from "node";
// import process = require('@types/node')
import {log, logObj} from './Utilities'
import * as _ from 'lodash';
import {Timetabler} from "./Timetabler";
export class CombinationTumbler {
    combinations = {};
    slotCount = 0;
    courseSlots: any[] = [];
    // timetabler = new Timetabler();

    validFullCombos = [];
    tempCombo = [];

    constructor() {

    }

    addSlot(slot: Course) {
        slot.slotId = ++this.slotCount;
        this.courseSlots.push(slot);

    }

    bruteForce() {
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


    }

    // course: Course combo=
// {
//     core: TimeBlock = {name: '01', times: [{name, day, start, end}, ...]};
//     tutorial: TimeBlock;
//     lab: TimeBlock;
// }

    i = 0;

    spinCombos(course) {

        if (course == null) {
            log('NULL course');
            return;
        }
        console.log("IN SPIN COMBOS");
        // logObj(course);
        // each course part : core, tut, lab
        //_.each(course, (c)=>{
        // log("course.validCombos ===" + course.validCombos);
        // log(`course.validCombos[] ===` + logObj(course.validCombos[course.validCombos.length - 1]));
        _.each(course.validCombos, (combo) => {
            // log('EACH COURSE');
            // log('iteration count = ' + (++this.i));
            // store combo in tempCombo at the index corrisponding to its slotID
            this.tempCombo[course.slotId-1] = combo;
            // log(`slotId = ${course.slotId}, count = ${this.slotCount}`);
            if (course.slotId < this.slotCount) {
                // log('slot id is less than count');
                // call recursively with course in next slot as input
                // the array index and course slot ID start at 0, so add 1 to get next course
                this.spinCombos(this.courseSlots[course.slotId]);
                // logObj(this.tempCombo);
                // process.exit();
            } else {
                // log('final slot reached____ combo ====');
                // logObj(this.tempCombo);

                // schedule times in table to find conflicts
                // for each course combo in array [ {core:{times:[]}, tutorial:{times:[]},...}, {} ]
                let isValid = false;
                let conflictCount = 0;
                let timetabler = new Timetabler();
                _.each(this.tempCombo, (course) =>{

                    _.each(course, (part) => {

                        _.each(part, (time) => {
                            isValid = timetabler.trySchedule(time.day, time.start, time.end);

                            if(!isValid) {
                                conflictCount++

                            }

                        })
                    } )
                });

                // add if valid
                if(conflictCount == 0){
                    log('VALID TIMETABLE FOUND======================');
                    // log('======================');
                    // log('======================');
                    // log('======================');
                    // log('======================');
                    logObj(this.tempCombo);
                    // clone copy of array into valid combo array
                    this.validFullCombos.push(this.tempCombo.slice(0));
                } else {
                    // log('CONFLICT FOUND == ' + conflictCount);
                }

                // process.exit();
                // actually, this isn't needed since the course combos are replaced
                // at each recursive iteration
                // // reset temp combo for next combo
                // this.tempCombo = [];
            }

        });
        //});

        log("Valid count = " + this.validFullCombos.length);
        logObj(this.validFullCombos);
    }

    private validateCombo(combo: any[]): boolean {

        // does the core class start and end before the tutorial?
        // OR does the tutorial class start and end before the core?
        // else the classes overlap and there is a noConflict

        logObj(combo);

        // if(this.noConflict(core, tutorial) &&
        //     this.noConflict(core, lab) &&
        //     this.noConflict(tutorial, lab)){
        //     return true;
        // }

        return false;


    }

    noConflict(a: DayClass, b: DayClass): boolean {

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

    }


    print() {
        console.log(this.courseSlots);
    }

}