export class Permissionlist {
    name : string ;
    pid : number;
    day : string ;
    duration : number;
    email : string ;
    msg : string;
    status : string;

    constructor(name: string , email: string , pid: number, msg:string, duration: number ,status:string, day: string) {
        this.email = email;
        this.day = day;
        this.msg = msg;
        this.duration = duration;
        this.status = status;
        this.pid = pid;
        this.name = name;
    }
}