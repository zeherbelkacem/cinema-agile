import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  /**
   * 
   * @param movie 
   * @returns 
   */
  saveMovie(movie: FormData): Observable<Movie> {
    console.log(movie);

    return this.http.post<Movie>(environment.hostMovie + '/save', movie);
  }


  // saveMovie(movie: Movie): Observable<Movie> {
  //   console.log(movie);

  //   return this.http.post<Movie>(environment.hostMovie + '/new', movie);
  // }


  getAllMovies():Observable<Movie[]> {
   return this.http.get<Movie[]>(environment.hostMovie+"/all");
  }
}
