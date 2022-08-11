import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cinema } from 'src/app/model/cinema.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private http:HttpClient) { }

  public getCinemas(){
    return this.http.get<Cinema[]>(environment.host+ '/cinema/all');
  }

  public getOneCinema(id: number){
    return this.http.get<Cinema>(environment.host+ "/cinema/get/"+ id);
  }

  public addCinema(cinema:Cinema){
    console.log("cinema service");
    return this.http.post<Cinema>(
      environment.host+ '/cinema/save',
      cinema
    )
  }

  public deleteCinema(id: number){
    return this.http.delete<Cinema>(environment.host+ '/cinema/delete/' + id);
  }

  public updateCinema(id: number, cinemaData: FormData){
    return this.http.put<Cinema>(environment.host+'/cinema/update/'+id, cinemaData);
  }
}
