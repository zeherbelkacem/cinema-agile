import { Cinema } from "./cinema";

export interface City {
    id : number;
    name : string;
    department : number;
    cinema : Array<Cinema>;
    
}