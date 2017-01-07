import {Course} from "./Course";
/**
 * Created by Dawson on 1/4/2017.
 */


export class CombinationTumbler{
    combinations = {};
    slotCount = 0;
    slots: Course[] = [];

    constructor(){

    }

    addSlot(slot: Course){
        this.slots.push(slot);
        this.slotCount++;
    }

    bruteForce(){



    }



    print(){
      console.log(this.slots);
    }

}