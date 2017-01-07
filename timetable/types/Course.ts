/**
 * Created by Dawson on 1/4/2017.
 */

export class Course{
    //list = [];
    course = {};
    name: string;

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

    console.log(this.name);

    if (data.tutorial != null) {

        this.tutorial = data.tutorial;

        //console.log(this.tutorial[0].times[0]);
        //this.tutLin.push(new TimeBlock(this.tutorial[0].times[0]));

    }
    if (data.core != null) {
        this.core = data.core;

        this.forEachTime(this.coreLin, this.core);
        //this.coreLin.push(new TimeBlock(this.core[0].times[0]));
        //console.log(this.coreLin);
        //console.log(this.core);
    }
    if (data.lab != null) {
        this.lab = data.lab;
        //this.labLin.push(new TimeBlock(this.lab[0].times[0]));
    }

    ///////////////////////
        if(this.coreLin.length > 0) {
            //console.log(this.coreLin);
        }
    ///////////////////////
}

    forEachTime(part: any[],t: any[]){
        for(let i = 0; i < t.length; i++) {
            console.log(t[i]);
            part.push(new TimeBlock(t[i]));

        }
        //console.log(part);
    }
}
export const DAYS = {mo:1,tu: 2, we: 3, th: 4, fr: 5};



// time blocks for either core, lab, or tutorial
export class TimeBlock{
    coursePart = {};

    oldTimes = [];
    times: any[] = [];

    constructor(coursepart){
        this.coursePart = coursepart;

        //console.log(coursepart.times);

        this.oldTimes = coursepart.times;
        this.convertTimes();
    }

    private convertTimes() {
        if(this.oldTimes == null) return;
        let t: any[] = this.oldTimes;
        //console.log("t = " + t);
        for(let i=0; i < t.length; i++ ){
            // insert obj with day number, start, end
            this.times.push({
                day: DAYS[t[1]],
                start: this.linearize(t[2], t[3]),  // linearize(start-hour, start-minute)
                end: this.linearize(t[4], t[5])     // linearize(end-hour, end-minute)

            });

        }
        console.log(this.times);

    }

    private linearize(hour: number, minute: number): number {
        // no class starts earlier than 8, so minus 8 to get rid of offset
        // then multiply by two to change hours to half hours
        let time = (hour - 8) * 2;
        time += minute > 0 ? 1 : 0; // if minute isn't 0, then it's 20

        return time;
    }
}