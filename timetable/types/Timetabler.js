"use strict";
var Timetabler = (function () {
    function Timetabler() {
        this.schedule = []; //new SmartHour[4][8];
        this.days = 7;
        // 8am - 11pm = 15 hours
        // 15*2 to get half hours
        this.halfhours = 15 * 2;
        this.temp = [];
        for (var i = 0; i < this.days; i++) {
            var array = [];
            for (var j = 0; j < this.halfhours; j++) {
                // array.push(j);
                array.push(new SmartHalfHour());
            }
            this.schedule.push(array);
        }
        // log('SCHEDULE ==== ');
        // logObj(this.schedule);
    }
    // returns true if valid
    Timetabler.prototype.trySchedule = function (day, start, end) {
        var conflictCount = 0;
        for (var i = start; i <= end; i++) {
            // if(this.schedule[day][i].tryScheduleHalfHour()){
            //     conflictCount++;
            // }
            if (this.schedule[day][i].isScheduled) {
                conflictCount++;
            }
            else {
                this.schedule[day][i].isScheduled = true;
            }
        }
        return conflictCount == 0;
    };
    return Timetabler;
}());
exports.Timetabler = Timetabler;
// a single hour that returns false if it has already been scheduled
// and true if it has not been scheduled yet.
// the hour can only be set once
var SmartHalfHour = (function () {
    function SmartHalfHour() {
        this.isScheduled = false;
    }
    SmartHalfHour.prototype.tryScheduleHalfHour = function () {
        if (!this.isScheduled) {
            this.isScheduled = true;
            return true;
        }
        // this.isScheduled = true;
        return false;
    };
    SmartHalfHour.prototype.schedule = function () {
        this.isScheduled = true;
    };
    return SmartHalfHour;
}());
//# sourceMappingURL=Timetabler.js.map