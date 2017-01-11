/**
 * Created by Dawson on 1/10/2017.
 */
import * as _ from 'lodash';
import {log, logObj} from './Utilities';
export class Timetabler {

    schedule = []; //new SmartHour[4][8];
    days = 7;
    // 8am - 11pm = 15 hours
    // 15*2 to get half hours
    halfhours = 15 * 2;

    temp = [];
    constructor() {

        for (let i = 0; i < this.days; i++) {
            let array = [];
            for (let j = 0; j < this.halfhours; j++) {
                // array.push(j);
                array.push(new SmartHalfHour());
            }
            this.schedule.push(array);

        }

        // log('SCHEDULE ==== ');
        // logObj(this.schedule);

    }

    // returns true if valid
    trySchedule(day, start, end): boolean{

        let conflictCount;
        for(let i = start; i <= end; i++) {
            if(this.schedule[day][i].isScheduled){
                conflictCount++;
            }
        }
        return conflictCount == 0;
    }

    // generate(){
    //
    //     let courseProcessor = (course) => {
    //
    //     };
    //     _.each(this.courses, courseProcessor);
    //
    // }
}




// a single hour that returns false if it has already been scheduled
// and true if it has not been scheduled yet.
// the hour can only be set once
class SmartHalfHour {
    isScheduled: boolean = false;
    constructor() {}

    tryScheduleHalfHour(): boolean {
        // if (this.isScheduled) {
        //     return false
        // } else {
        //     this.isScheduled = true;
            return true;
        // }



    }

    schedule(){
        this.isScheduled = true;
    }



}