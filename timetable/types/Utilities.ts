/**
 * Created by Dawson on 1/10/2017.
 */

export function log(str){
    console.log(str);
}

export function logObj(obj) {
    let s = JSON.stringify(obj);
    console.log(s);
    return s;
}