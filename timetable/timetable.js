/**
 * Created by Dawson on 1/6/2017.
 */

// var data = require("./data/se-courselist.json");
var data = require("./data/se-list-test");
var Timetable = require("./types/TimetableGenerator");

//console.log(data[0]);


timetable = new Timetable.TimetableGenerator(data);