export class Permissionlist {
    pid : number;
    day : string ;
    duration : number;
    email : string ;
    name : string ;
    msg : string;
    status : string;

    constructor(pid: number, name: string, email: string,msg:string,status:string, duration: number, day: string,) {
        this.pid = pid;
        this.name = name;
        this.email = email;
        this.day = day;
        this.msg = msg;
        this.duration = duration;
        this.status = status;
    }
}