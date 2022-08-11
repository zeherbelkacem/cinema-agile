import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from 'src/app/model/city.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient) { }
  public getCity(){
    return this.http.get<City[]>(environment.host+"/city/all");
}

public postCity(city : any){
  return this.http.post<City>(environment.host+"/city/save",city);
}

public getCityById(id : number){
  return this.http.get<City>(environment.host+"/city/get/"+ id);
}
public delCity(city : City){
  return this.http.delete(environment.host+"/city/delete/"+city.id);
}
}
