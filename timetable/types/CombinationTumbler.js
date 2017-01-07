"use strict";
/**
 * Created by Dawson on 1/4/2017.
 */
var CombinationTumbler = (function () {
    function CombinationTumbler() {
        this.combinations = {};
        this.slotCount = 0;
        this.slots = [];
    }
    CombinationTumbler.prototype.addSlot = function (slot) {
        this.slots.push(slot);
        this.slotCount++;
    };
    CombinationTumbler.prototype.bruteForce = function () {
    };
    CombinationTumbler.prototype.print = function () {
        console.log(this.slots);
    };
    return CombinationTumbler;
}());
exports.CombinationTumbler = CombinationTumbler;
//# sourceMappingURL=CombinationTumbler.js.map