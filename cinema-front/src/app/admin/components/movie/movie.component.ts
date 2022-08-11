import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { ImageService } from '../../services/image.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  postResponse: any;
  imageOfMovie!: any[];
 
  // listMovies: Movie[] | null = null;
  listMovies$: Observable<Movie[]> | null = null;
  constructor(
    private movieService: MovieService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.imageOfMovie;
    this.listMovies$ = this.movieService.getAllMovies()
    this.onGetAllMovies();
  }

  onGetAllMovies() {
    this.movieService.getAllMovies().subscribe((data) => {
     // this.listMovies = data;
      console.log(data);
      
      let images: any[] = []
      for (let i = 0; i < data.length; i++) {
        this.imageService
          .viewImage(data[i].imageModel.name)
          .subscribe((res) => {
            this.postResponse = res;
            images.push('data:image/jpeg;base64,' + this.postResponse.image);
              
          });
         
      }
      console.log(images);
      this.imageOfMovie = images
      
    });
  }
}
