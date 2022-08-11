import { Address } from "./address";
import { City } from "./city.model";
import { Movie } from "./movie";


export class Cinema {
    id:number;
    name:string;
    address: Address;
    city : City;
    movies : Array<Movie>;

    constructor(id:number, name:string,address:Address,city:City,movies:Array<Movie>){
        this.id=id;
        this.name=name;
        this.address=address;
        this.city=city;
        this.movies=movies;
    }
}