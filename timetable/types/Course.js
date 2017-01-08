/**
 * Created by Dawson on 1/4/2017.
 */
"use strict";
var Course = (function () {
    function Course(data) {
        //list = [];
        this.course = {};
        // array of combos of core, tutorial, and lab
        this.combos /*: any[]*/ = [];
        this.tutorial = [];
        this.core = [];
        this.lab = [];
        // linearized
        this.tutLin = [];
        this.coreLin = [];
        this.labLin = [];
        this.validCombos = [];
        this.course = data;
        this.name = data.name;
        this.logObj(this.combos);
        console.log(this.name);
        if (data.tutorial != null) {
            this.tutorial = data.tutorial;
            this.forEachTime(this.tutLin, this.tutorial);
        }
        if (data.core != null) {
            this.core = data.core;
            //this.logObj(data.core);
            this.forEachTime(this.coreLin, this.core);
        }
        if (data.lab != null) {
            this.lab = data.lab;
            this.forEachTime(this.labLin, this.lab);
        }
        // brute force generate combos of all times for course
        this.genCombos();
        ///////////////////////
        if (this.coreLin.length > 0) {
        }
        // this.log("THIS = ");
        // this.logObj(this.coreLin);
        // this.logObj(this.tutLin);
        // this.logObj(this.labLin);
        ///////////////////////
    }
    Course.prototype.forEachTime = function (part, t) {
        for (var i = 0; i < t.length; i++) {
            //console.log("t[i] =" + t[i]);
            part.push(new TimeBlock(t[i].name, t[i]));
        }
        if (part.length < 3) {
            if ("tutorial" in part[1]) { }
        }
        //console.log(JSON.stringify(part));
    };
    /////////////////////////////////////////
    /////////////////////////////////////////
    Course.prototype.testTimes = function () {
    };
    /////////////////////////////////////////
    /////////////////////////////////////////
    Course.prototype.logObj = function (obj) {
        console.log(JSON.stringify(obj));
    };
    Course.prototype.log = function (str) {
        console.log(str);
    };
    /////////////////////////////////////////
    Course.prototype.genCombos = function () {
        var core = this.coreLin;
        var tutorial = this.tutLin;
        var lab = this.labLin;
        var combos = [];
        // set of combos: C
        // set of core: Core
        // set of tutorials: T
        // set of labs: L
        // C is is the cartesian product of Core, T, and L
        // C = Core x T x L
        for (var i = 0; i < core.length; i++) {
            for (var k = 0; k < tutorial.length; k++) {
                var combo = new Combo();
                combo.core = core[i];
                combo.tutorial = tutorial[k];
                //this.logObj(combos);
                combos.push(combo);
            }
        }
        // this.log("Course combo count = " + combos.length);
        // this.logObj(combos);
        //this.logObj(combos);
        if (combos.length < 1 || combos.length == null) {
            for (var l = 0; l < lab.length; l++) {
                var combo = new Combo();
                combo.core = core[l];
                combo.lab = lab[l];
                combos.push(combo);
            }
        }
        else {
            var c = [];
            var count = 0;
            //this.log("lab length = " + lab.length);
            //var l = 0;
            // for ( var l in lab) {
            var labLen = lab.length;
            var comLen = combos.length;
            for (var l = 0; l < labLen && count < 100; l++) {
                // for ( let l = 0; l < lab.length && count  < 100; l++) {
                if (l >= lab.length)
                    break;
                //this.log("Value of l = " + l);
                //this.log("Course combo count = " + combos.length);
                // cartesian product -> {(for all combo in combos) x (for all sections in lab)}
                //this.log(combos.length);
                // for (var m of combos) { // && false
                for (var m = 0; m < comLen && count < 100; m++) {
                    // for (let m = 0; m < combos.length && count < 100; m++) { // && false
                    //if(m >= combos.length) break;
                    var combo = new Combo();
                    //this.log("m = " + m + " combos.length = " + combos.length);
                    //this.log(combos[m].core);
                    // combo.core = m.core;
                    combo.core = combos[m].core;
                    // combo.tutorial = m.tutorial;
                    combo.tutorial = combos[m].tutorial;
                    combo.lab = lab[l];
                    // store in temp set c
                    c.push(combo);
                }
                // replace old set
                if (c.length > combos.length) {
                    combos = c;
                }
            }
        }
        this.log("Cartesian product = Core x T x L -> " + core.length + " x " + tutorial.length + " x " + lab.length);
        this.log("Course combo count = " + combos.length);
        this.combos = combos;
        //this.logObj(combos);
        // find combos that don't have conflicts
        this.filterConflicts();
    };
    // sample combos:
    //      [{"core":{"times":[{"name":"01","day":2,"start":15,"end":17},{"name":"01","day":3,"start":15,"end":17},{"name":"01","day":5,"start":15,"end":17}],"name":"01"},"tutorial":{"times":[{"name":"01","day":1,"start":9,"end":11}],"name":"01"}},
    //      {"core":{"times":[{"name":"01","day":2,"start":15,"end":17},{"name":"01","day":3,"start":15,"end":17},{"name":"01","day":5,"start":15,"end":17}],"name":"01"},"tutorial":{"times":[{"name":"02","day":1,"start":3,"end":5}],"name":"02"}},...]
    Course.prototype.filterConflicts = function () {
        var testCombos = [
            {
                "core": {
                    "times": [{ "name": "01", "day": 1, "start": 7, "end": 8 }, {
                            "name": "01",
                            "day": 3,
                            "start": 7,
                            "end": 9
                        }, { "name": "01", "day": 5, "start": 11, "end": 13 }], "name": "01"
                },
                "tutorial": { "times": [{ "name": "01", "day": 1, "start": 9, "end": 13 }], "name": "01" },
                "lab": { "times": [{ "name": "01", "day": 4, "start": 1, "end": 7 }], "name": "01" }
            }];
        //      TEST
        //        let combos = testCombos;
        var combos = this.combos;
        var comboLen = combos.length;
        // var [] = this.combos;
        // combo is a combo core, tutorial, and lab sections
        // it represents a single complete selection of course parts (core, tut, lab) for a course
        // i.e. {
        //          core: times[{name: 01, start, end}, {...}],
        //          tutorial: times[{name: 02, start, end}, {...}],
        //          lab: times[{name: 03, start, end}, {...}]
        //      }
        for (var _i = 0, combos_1 = combos; _i < combos_1.length; _i++) {
            var combo = combos_1[_i];
            var foundValidCombo = false;
            // no valid counts can be found
            var foundConflict = false;
            // part is either core, tutorial, or lab
            // i.e. {core: times[{name, start, end}, {...}]}
            //this.log("Combo = ");
            //this.logObj(combo);
            //this.logObj(combo.core.times);
            //
            // for each core time
            // i.e.: core: times[{name: 01, start, end}, {...}]
            for (var _a = 0, _b = combo.core.times; _a < _b.length; _a++) {
                var core = _b[_a];
                //this.log(core);
                // put valid combos in temp combos
                //      let tempCombo = {
                //         core: [] as any,
                //         tutorial: [] as any,
                //         lab: [] as any
                // };
                // each of property holds a single day of class
                // so if a core has 3 lectures a week, the core in the tempCombo object will have the time of one lecture
                // the idea is to check for conflicts of all individual times by looping through each course part
                // and loading each individual class into the temp obj and pass that down through the for loops to check
                // for conflicts
                // let tempCombo = {
                //     core: {},
                //     tutorial: {},
                //     lab: {}
                // };
                var tempCombo = new SingleCombo();
                // Example of a fully loaded temp object
                // tempCombo = {
                //     core: {"name":"01","day":1,"start":7,"end":10},
                //     tutorial: {"name":"01","day":1,"start":9,"end":13},
                //     lab: {"name":"01","day":4,"start":1,"end":7}
                // };
                //let tempCombo: Combo = new Combo();
                // make sure
                if ('length' in core) {
                }
                tempCombo.core = core;
                // this.logObj(tempCombo);
                // this.logObj(core);
                // this.logObj();
                if (combo.tutorial.times.length == 0) {
                    this.log("Tutorial times length = 0");
                    // let dummy = new DayClass();
                    // dummy.name = 'none';
                    combo.tutorial.times[0] = this.newDummyDayClass();
                }
                // for each tutorial time
                // tutorial: times[{name: 02, start, end}, {...}]
                for (var _c = 0, _d = combo.tutorial.times; _c < _d.length; _c++) {
                    var tut = _d[_c];
                    tempCombo.tutorial = tut;
                    //tempCombo.lab = null;
                    // this.logObj(tempCombo);
                    // this.validateCombo(tempCombo);
                    //this.log(tut);
                    // for each lab
                    if (combo.lab.times.length == 0) {
                        // this.log("Lab times length = 0");
                        tempCombo.lab = this.newDummyDayClass();
                    }
                    for (var _e = 0, _f = combo.lab.times; _e < _f.length; _e++) {
                        var lab = _f[_e];
                        tempCombo.lab = lab;
                        // found a combo without
                        if (this.validateCombo(tempCombo)) {
                            foundValidCombo = true;
                        }
                        else {
                            foundConflict = true;
                        }
                    }
                }
            }
            this.logObj(combo);
            if (foundValidCombo && !foundConflict) {
                this.validCombos.push(combo);
            }
        }
        this.log("Filtered combos = ");
        this.logObj(this.validCombos);
    };
    Course.prototype.newDummyDayClass = function () {
        var d = new DayClass();
        d.name = "NONE";
        return d;
    };
    // private validateCombo(tempCombo: {core: Array<TimeBlock>; tutorial: Array<TimeBlock>; lab: Array<TimeBlock>}) {
    //
    // }
    // sample input:
    // {"core":{"name":"01","day":1,"start":7,"end":9},"tutorial":{"name":"01","day":1,"start":9,"end":13},"lab":[]}
    Course.prototype.validateCombo = function (combo) {
        // this.logObj(combo);
        var core = combo.core, tutorial = combo.tutorial, lab = combo.lab;
        //if(core.day === tutorial.day) { //  this.log("Found same day class");
        // this.log(`Core start = ${core.start} `);
        // does the core class start and end before the tutorial?
        // OR does the tutorial class start and end before the core?
        // else the classes overlap and there is a noConflict
        // check if the combo has a tutorial and/or a lab
        // if('start' in tutorial && 'start' in lab) {
        //
        // } else if('start' in tutorial) {
        //
        // } else if('start' in lab) {
        //
        // } else {
        //
        // }
        // let start = []
        // for (let i = 0; i < 3; i++) {
        //
        // }
        //
        // this.noConflict(core, tutorial);
        if (this.noConflict(core, tutorial) &&
            this.noConflict(core, lab) &&
            this.noConflict(tutorial, lab)) {
            return true;
        }
        return false;
        // if(core.start < tutorial.start && core.end <= tutorial.start ||
        //     tutorial.start < core.start && tutorial.end <= core.start){
        //     this.log("no noConflict");
        // } else {
        //
        //     this.log("Conflict FOUND");
        //     return false;
        // }
        //
        // for(let core of combo.core) {
        //     this.logObj(core);
        // }
    };
    Course.prototype.noConflict = function (a, b) {
        // this.log("In noConflict()");
        // they must be on the same day
        // in cases where the course doesn't have a tutorial or lab
        if (a.name == 'NONE' || b.name == 'NONE' || (a.day != b.day)) {
            return true;
        }
        // does a start and finish before b OR
        // does b start and finish before a
        // there is a conflict if not
        if ((a.start < b.start && a.end <= b.start ||
            b.start < a.start && b.end <= a.start)) {
            this.log("no  Conflict");
            return true;
        }
        this.log("Conflict FOUND");
        return false;
    };
    return Course;
}());
exports.Course = Course;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.DAYS = { mo: 1, tu: 2, we: 3, th: 4, fr: 5 };
// combination of core, tutorial, and lab
var Combo = (function () {
    function Combo() {
        this.core = [];
        this.tutorial = [];
        this.lab = [];
    }
    return Combo;
}());
exports.Combo = Combo;
var SingleCombo = (function () {
    function SingleCombo() {
    }
    return SingleCombo;
}());
// time blocks for either core, lab, or tutorial
var TimeBlock = (function () {
    function TimeBlock(name, coursepart) {
        //this.coursePart = coursepart;
        //coursePart = {};
        //oldTimes = [];
        this.times = [];
        //console.log(coursepart.times);
        //this.oldTimes = coursepart.times;
        this.name = name;
        this.convertTimes(coursepart.times);
    }
    // example t = [ [2,mo,11,30,12,20,HH 302], [2,we,11,30,12,20,HH 302], [2,fr,13,30,14,20,HH 302] ]
    TimeBlock.prototype.convertTimes = function (oldTimes) {
        var DAYS = { mo: 1, tu: 2, we: 3, th: 4, fr: 5 };
        //console.log("day object = " + DAYS['mo']);
        if (oldTimes == null)
            return;
        var t = oldTimes;
        //console.log("t = " + t);
        //console.log("length = " + t.length);
        for (var i = 0; i < t.length; i++) {
            //console.log("t[i][1] = " + t[i][1]);
            var day = new DayClass(); //.init({
            day.name = this.name;
            day.day = DAYS[t[i][1]];
            day.start = this.linearize(t[i][2], t[i][3]); // linearize(start-hour, start-minute)
            day.end = this.linearize(t[i][4], t[i][5]); // linearize(end-hour, end-minute)
            // insert obj with day number, start, end
            this.times.push(day);
        }
        //console.log("Linearized times = " + JSON.stringify(this.times));
        //console.log("DAYS = " + DAYS[t[1]]);
    };
    TimeBlock.prototype.linearize = function (hour, minute) {
        // no class starts earlier than 8, so minus 8 to get rid of offset
        // then multiply by two to change hours to half hours
        var time = (hour - 8) * 2;
        time += minute > 0 ? 1 : 0; // if minute isn't 0, then it's 20
        //console.log("Linearized time = " + time);
        return time;
    };
    return TimeBlock;
}());
exports.TimeBlock = TimeBlock;
var DayClass = (function () {
    function DayClass(o) {
        if (o != null) {
            this.name = o.name;
            this.day = o.day;
            this.start = o.start;
            this.end = o.end;
        }
    }
    return DayClass;
}());
//# sourceMappingURL=Course.js.map