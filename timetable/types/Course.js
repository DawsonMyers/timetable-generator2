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
        this.log("Course combo count = " + combos.length);
        this.logObj(combos);
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
            this.log("lab length = " + lab.length);
            //var l = 0;
            // for ( var l in lab) {
            var labLen = lab.length;
            var comLen = combos.length;
            for (var l = 0; l < labLen && count < 100; l++) {
                // for ( let l = 0; l < lab.length && count  < 100; l++) {
                if (l >= lab.length)
                    break;
                this.log("Value of l = " + l);
                this.log("Course combo count = " + combos.length);
                // cartesian product -> {(for all combo in combos) x (for all sections in lab)}
                this.log(combos.length);
                // for (var m of combos) { // && false
                for (var m = 0; m < comLen && count < 100; m++) {
                    // for (let m = 0; m < combos.length && count < 100; m++) { // && false
                    //if(m >= combos.length) break;
                    var combo = new Combo();
                    this.log("m = " + m + " combos.length = " + combos.length);
                    //this.log(combos[m].core);
                    combo.core = m.core;
                    // combo.core = combos[m].core;
                    combo.tutorial = m.tutorial;
                    // combo.tutorial = combos[m].tutorial;
                    combo.lab = lab[l];
                    // store in temp set c
                    c.push(combo);
                    this.logObj(c);
                    this.log(++count);
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
    Course.prototype.filterConflicts = function () {
        for (var _i = 0, _a = this.combos; _i < _a.length; _i++) {
            var combo = _a[_i];
            var coreLen = combo.core.times.length;
        }
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
    }
    return Combo;
}());
exports.Combo = Combo;
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
            // insert obj with day number, start, end
            this.times.push({
                name: this.name,
                day: DAYS[t[i][1]],
                start: this.linearize(t[i][2], t[i][3]),
                end: this.linearize(t[i][4], t[i][5]) // linearize(end-hour, end-minute)
            });
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
//# sourceMappingURL=Course.js.map