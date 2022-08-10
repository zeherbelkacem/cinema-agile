import { Cinema } from "./cinema.model";

export interface City {
    id : number;
    name : string;
    department : number;
    cinema : Array<Cinema>;
    
}