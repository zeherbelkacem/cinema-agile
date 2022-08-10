import { Address } from "./address";
import { City } from "./city.model";
import { Movie } from "./movie";


export interface Cinema {
    id:number;
    name:string;
    address: Address;
    city : City;
    movies : Array<Movie>;
}
