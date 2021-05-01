export class Tracinglist {
    id : number;
    drivername : string ;
    drivercontact : number;
    email : string ;
    name : string ;
    room : number

    constructor(id: number, name: string, email: string, room: number, drivername: string, drivercontact: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.room = room;
        this.drivername = drivername;
        this.drivercontact = drivercontact;
    }
}