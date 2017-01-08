/**
 * Created by Dawson on 1/4/2017.
 */

export class Course {
    //list = [];
    course = {};
    name: string;

    // array of combos of core, tutorial, and lab
    combos/*: any[]*/ = [];

    tutorial = [];
    core = [];
    lab = [];
    // linearized
    tutLin = [];
    coreLin = [];
    labLin = [];

    constructor(data) {
        this.course = data;
        this.name = data.name;
        this.logObj(this.combos);
        console.log(this.name);

        if (data.tutorial != null) {

            this.tutorial = data.tutorial;
            this.forEachTime(this.tutLin, this.tutorial);

            //console.log(data);
            //console.log(this.tutorial[0].times[0]);
            //this.tutLin.push(new TimeBlock(this.tutorial[0].times[0]));

        }
        if (data.core != null) {
            this.core = data.core;

            //this.logObj(data.core);
            this.forEachTime(this.coreLin, this.core);
            // this.logObj(this.coreLin);
            //this.coreLin.push(new TimeBlock(this.core[0].times[0]));
            //console.log(this.coreLin);
            //console.log(this.core);
        }
        if (data.lab != null) {
            this.lab = data.lab;
            this.forEachTime(this.labLin, this.lab);
            //this.labLin.push(new TimeBlock(this.lab[0].times[0]));
        }

        // brute force generate combos of all times for course
        this.genCombos();

        ///////////////////////
        if (this.coreLin.length > 0) {
            //console.log(this.coreLin);
        }
        // this.log("THIS = ");
        // this.logObj(this.coreLin);
        // this.logObj(this.tutLin);
        // this.logObj(this.labLin);
        ///////////////////////
    }

    forEachTime(part: any[], t: any[]) {
        for (let i = 0; i < t.length; i++) {
            //console.log("t[i] =" + t[i]);
            part.push(new TimeBlock(t[i].name, t[i]));

        }
        if(part.length < 3) {
            if("tutorial" in part[1]){}
            //let name = part[1].name
        }
        //console.log(JSON.stringify(part));
    }

    /////////////////////////////////////////
    /////////////////////////////////////////

    testTimes() {

    }

    /////////////////////////////////////////
    /////////////////////////////////////////
    logObj(obj) {
        console.log(JSON.stringify(obj));
    }

    log(str) {
        console.log(str);
    }

    /////////////////////////////////////////


    genCombos() {
        let core: any[] = this.coreLin;
        let tutorial: any[] = this.tutLin;
        let lab: any[] = this.labLin;
        let combos: any[] = [];
        // set of combos: C
        // set of core: Core
        // set of tutorials: T
        // set of labs: L

        // C is is the cartesian product of Core, T, and L
        // C = Core x T x L

        for (let i = 0; i < core.length; i++) {


            for (let k = 0; k < tutorial.length; k++) {
                let combo = new Combo();
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
            for (let l = 0; l < lab.length; l++) {
                let combo = new Combo();
                combo.core = core[l];
                combo.lab = lab[l];
                combos.push(combo);
            }
        } else {
            let c: any[] = [];
            let count = 0;
            //this.log("lab length = " + lab.length);
            //var l = 0;
            // for ( var l in lab) {
            var labLen = lab.length;
            var comLen = combos.length;

            for ( let l = 0; l < labLen && count  < 100; l++) {
            // for ( let l = 0; l < lab.length && count  < 100; l++) {
                if(l >= lab.length) break;
                //this.log("Value of l = " + l);
                //this.log("Course combo count = " + combos.length);
                // cartesian product -> {(for all combo in combos) x (for all sections in lab)}
                //this.log(combos.length);

                // for (var m of combos) { // && false
                for (let m = 0; m < comLen && count < 100; m++) { // && false
                // for (let m = 0; m < combos.length && count < 100; m++) { // && false
                    //if(m >= combos.length) break;
                    let combo = new Combo();
                    //this.log("m = " + m + " combos.length = " + combos.length);
                    //this.log(combos[m].core);
                    // combo.core = m.core;
                    combo.core = combos[m].core;
                    // combo.tutorial = m.tutorial;
                    combo.tutorial = combos[m].tutorial;
                    combo.lab = lab[l];
                    // store in temp set c
                    c.push(combo);
                    //this.logObj(c);
                    //this.log(++count);
                }
                // replace old set
                if(c.length > combos.length) {
                    combos = c;
                }


                //this.log("Course combo count = " + c.length);
                //this.logObj(c);

            }

        }


        this.log("Cartesian product = Core x T x L -> " + core.length + " x " + tutorial.length + " x " + lab.length);
        this.log("Course combo count = " + combos.length);
        this.combos = combos;
        //this.logObj(combos);

        // find combos that don't have conflicts
        this.filterConflicts();
    }
// sample combos:
//      [{"core":{"times":[{"name":"01","day":2,"start":15,"end":17},{"name":"01","day":3,"start":15,"end":17},{"name":"01","day":5,"start":15,"end":17}],"name":"01"},"tutorial":{"times":[{"name":"01","day":1,"start":9,"end":11}],"name":"01"}},
//      {"core":{"times":[{"name":"01","day":2,"start":15,"end":17},{"name":"01","day":3,"start":15,"end":17},{"name":"01","day":5,"start":15,"end":17}],"name":"01"},"tutorial":{"times":[{"name":"02","day":1,"start":3,"end":5}],"name":"02"}},...]

    private filterConflicts() {

        let testCombos = [
            {
                "core":{"times":[{"name":"01","day":1,"start":7,"end":10},{"name":"01","day":3,"start":7,"end":9},{"name":"01","day":5,"start":11,"end":13}],"name":"01"},
                "tutorial":{"times":[{"name":"01","day":1,"start":9,"end":13}],"name":"01"},
                "lab":{"times":[{"name":"01","day":4,"start":1,"end":7}],"name":"01"}
            }];

        let combos = testCombos;
        // let combos = this.combos;


        var comboLen = combos.length;
       // var [] = this.combos;

        // combo is a combo core, tutorial, and lab sections
        // it represents a single complete selection of course parts (core, tut, lab) for a course
        // i.e. {
        //          core: times[{name: 01, start, end}, {...}],
        //          tutorial: times[{name: 02, start, end}, {...}],
        //          lab: times[{name: 03, start, end}, {...}]
        //      }
        for(let combo of combos) {

            // part is either core, tutorial, or lab
            // i.e. {core: times[{name, start, end}, {...}]}

            //this.log("Combo = ");
            //this.logObj(combo);

            //this.logObj(combo.core.times);
            //
            // for each core time
            // i.e.: core: times[{name: 01, start, end}, {...}]
            for(let core of combo.core.times ) {
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

                let tempCombo = new SingleCombo();

                // Example of a fully loaded temp object
                // tempCombo = {
                //     core: {"name":"01","day":1,"start":7,"end":10},
                //     tutorial: {"name":"01","day":1,"start":9,"end":13},
                //     lab: {"name":"01","day":4,"start":1,"end":7}
                // };
                 //let tempCombo: Combo = new Combo();

                // make sure
                if('length' in core) {

                }
                tempCombo.core = core;

                  this.logObj(tempCombo);
                  this.logObj(core);
                  // this.logObj();

                if(combo.tutorial.times.length == 0){
                    this.log("Tutorial times length = 0")
                } else {

                    // for each tutorial time
                    // tutorial: times[{name: 02, start, end}, {...}]
                    for(let tut of combo.tutorial.times) {
                        tempCombo.tutorial = tut;
                        //tempCombo.lab = null;
                        // this.logObj(tempCombo);
                        // this.validateCombo(tempCombo);
                        //this.log(tut);
                        // for each lab
                        for(let lab of combo.lab.times){
                            tempCombo.lab = lab;

                            this.validateCombo(tempCombo);
                        }

                    }
                }

            }
            // for(var part of combo){
            //     this.logObj(part);
            // }
            // if(combo.length === 3) {
            //     var [core, tutorial, lab] = combo;
            // }
            // var coreLen = combo.core.times.length;

        }
    }


    // private validateCombo(tempCombo: {core: Array<TimeBlock>; tutorial: Array<TimeBlock>; lab: Array<TimeBlock>}) {
    //
    // }

    // sample input:
    // {"core":{"name":"01","day":1,"start":7,"end":9},"tutorial":{"name":"01","day":1,"start":9,"end":13},"lab":[]}
    private validateCombo(combo: SingleCombo): boolean {
        this.logObj(combo);

        let {core, tutorial, lab} = combo;

        if(core.day === tutorial.day) { //  this.log("Found same day class");
            this.log(`Core start = ${core.start} `);

            // does the core class start and end before the tutorial?
            // OR does the tutorial class start and end before the core?
            // else the classes overlap and there is a conflict

            // check if the combo has a tutorial and/or a lab
            if('start' in tutorial && 'start' in lab) {

            } else if('start' in tutorial) {

            } else if('start' in lab) {

            } else {

            }
            let start = []
            for (let i = 0; i < 3; i++) {

            }
            if(core.start < tutorial.start && core.end <= tutorial.start ||
                tutorial.start < core.start && tutorial.end <= core.start){
                this.log("no conflict");
            } else {

                this.log("Conflict FOUND");
                return false;
            }
        }
        // for(let core of combo.core) {
        //     this.logObj(core);
        // }
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const DAYS = {mo: 1, tu: 2, we: 3, th: 4, fr: 5};

// combination of core, tutorial, and lab
export class Combo {
    core: DayClass[] = [];
    tutorial = [];
    lab = [];
}

class SingleCombo {
    core: DayClass;
    tutorial: DayClass;
    lab: DayClass;
}

// time blocks for either core, lab, or tutorial
export class TimeBlock {
    //coursePart = {};

    //oldTimes = [];
    times: any[] = [];
    name: string;

    constructor(name: string, coursepart) {
        //this.coursePart = coursepart;

        //console.log(coursepart.times);

        //this.oldTimes = coursepart.times;

        this.name = name;
        this.convertTimes(coursepart.times);
    }

    // example t = [ [2,mo,11,30,12,20,HH 302], [2,we,11,30,12,20,HH 302], [2,fr,13,30,14,20,HH 302] ]
    private convertTimes(oldTimes: any[]) {
        let DAYS = {mo: 1, tu: 2, we: 3, th: 4, fr: 5};
        //console.log("day object = " + DAYS['mo']);
        if (oldTimes == null) return;
        let t: any[] = oldTimes;
        //console.log("t = " + t);
        //console.log("length = " + t.length);
        for (let i = 0; i < t.length; i++) {
            //console.log("t[i][1] = " + t[i][1]);

            let day = new DayClass() //.init({
            day.name = this.name;
                day.day =  DAYS[t[i][1]];
                day.start = this.linearize(t[i][2], t[i][3]);  // linearize(start-hour, start-minute)
                day.end = this.linearize(t[i][4], t[i][5]);     // linearize(end-hour, end-minute)

            // insert obj with day number, start, end
            this.times.push(day);
            //     new DayClass().init({
            //     name: this.name,
            //     day: DAYS[t[i][1]],
            //     start: this.linearize(t[i][2], t[i][3]),  // linearize(start-hour, start-minute)
            //     end: this.linearize(t[i][4], t[i][5])     // linearize(end-hour, end-minute)
            //
            // })
            //    let new DayClass().init({
            //         name: this.name,
            //         day: DAYS[t[i][1]],
            //         start: this.linearize(t[i][2], t[i][3]),  // linearize(start-hour, start-minute)
            //         end: this.linearize(t[i][4], t[i][5])     // linearize(end-hour, end-minute)
            //
            //     })
            // );

        }
        //console.log("Linearized times = " + JSON.stringify(this.times));
        //console.log("DAYS = " + DAYS[t[1]]);
    }

    private linearize(hour: number, minute: number): number {
        // no class starts earlier than 8, so minus 8 to get rid of offset
        // then multiply by two to change hours to half hours
        let time = (hour - 8) * 2;
        time += minute > 0 ? 1 : 0; // if minute isn't 0, then it's 20

        //console.log("Linearized time = " + time);
        return time;
    }
}

class DayClass{
    name: string;
    day: number;
    start: number;
    end: number;

    constructor(o?: {name: string, day: number, start: number, end:number}){
        if(o != null) {
            this.name = o.name;
            this.day = o.day;
            this.start = o.start;
            this.end = o.end;
        }
    }

    // constructor(){
    //     return this;
    // }

    // init(o: {name: string, day: number, start: number, end:number}){
    //     this.name = o.name;
    //     this.day = o.day;
    //     this.start = o.start;
    //     this.end = o.end;
    // }

}