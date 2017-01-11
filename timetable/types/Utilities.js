/**
 * Created by Dawson on 1/10/2017.
 */
"use strict";
function log(str) {
    console.log(str);
}
exports.log = log;
function logObj(obj) {
    var s = JSON.stringify(obj);
    console.log(s);
    return s;
}
exports.logObj = logObj;
//# sourceMappingURL=Utilities.js.map