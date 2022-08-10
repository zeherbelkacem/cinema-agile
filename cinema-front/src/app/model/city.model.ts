import { Cinema } from "./cinema.model";



export class City {

    id : number;

    name : string;

    department : number;

    //cinema : Array<Cinema>;



    constructor(id:number,name:string,department : number){

        this.id=id;

        this.name=name;

        this.department=department;

       // this.cinema=cinema;

    }

   

}