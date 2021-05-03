import { Time } from "@angular/common";

export class Outinglist {
    id : number;
    day : string ;
    duration : number;
    email : string ;
    name : string ;
    reason : string;
    outgoingtime : Time;
    returningtime : Time

    constructor(id: number, name: string, email: string, day: string, duration: number, reason: string, outgoingtime : Time, returningtime : Time) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.day = day;
        this.reason = reason;
        this.duration = duration;
        this.outgoingtime = outgoingtime;
        this.returningtime = returningtime;
    }
}