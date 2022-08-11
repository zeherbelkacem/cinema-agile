import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  listMovies: Movie[] | null = null;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.onGetAllMovies();
  }

  onGetAllMovies(){
    this.movieService.getAllMovies().subscribe(data=>{
      this.listMovies = data;
    })
  }
}
