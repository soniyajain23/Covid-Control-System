export class Outinglist {
    id : number;
    day : string ;
    duration : number;
    email : string ;
    name : string ;
    reason : string

    constructor(id: number, name: string, email: string, duration: number, day: string, reason: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.day = day;
        this.reason = reason;
        this.duration = duration;
    }
}