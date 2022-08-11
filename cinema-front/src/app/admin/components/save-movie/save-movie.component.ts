import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { FileHandle } from 'src/app/model/imageFileHandle';
import { Movie } from 'src/app/model/movie';
import { CategoryService } from '../../services/category.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-save-movie',
  templateUrl: './save-movie.component.html',
  styleUrls: ['./save-movie.component.css'],
})
export class SaveMovieComponent implements OnInit {
  /****************IMAGE START*/
  uploadedImage!: File;
  url: any; //To view the changed image

  movieToAdd: Movie = {
    id: 0,
    title: "",
    description: "",
    production: "",
    releaseDate: new Date,
    duration: null as any,
    imageModel: {} as FileHandle,
    category: {} as Category,
  };
  /****************IMAGE END*/

  movieForm!: FormGroup;
  error = null;
  listCategories: Category[] | null = null;
  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private movieService: MovieService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      production: ['', Validators.required],
      releaseDate: ['', Validators.required],
      duration: ['', Validators.required],
      //image: ['', Validators.required],
      category: [{}, Validators.required],
    });
  }

  onSaveMovie(movieForm: FormGroup) {
    this.movieToAdd.title = movieForm.value.title;
    this.movieToAdd.description = movieForm.value.description;
    this.movieToAdd.production = movieForm.value.production;
    this.movieToAdd.releaseDate = movieForm.value.releaseDate;
    this.movieToAdd.duration = movieForm.value.duration;
    this.movieToAdd.imageModel.file = this.uploadedImage;
    this.movieToAdd.category = movieForm.value.category;

    const formData: FormData = this.preparePostFormData(this.movieToAdd);
    this.movieService.saveMovie(formData).subscribe((data) => {
      console.log(data);
    });
    this.router.navigateByUrl("/adminMovies").then(() => {
      window.location.reload();
    });
  }

  /**
   * 
   * @param movie 
   * @returns 
   */
  preparePostFormData(movie: Movie): FormData {
    const formData = new FormData();
    formData.append(
      'movie',
      new Blob([JSON.stringify(movie)], { type: 'application/json' })
    );
    formData.append('imageFile', movie.imageModel.file, movie.imageModel.file.name);
    return formData;
  }

  /**
   * 
   */
  getAllCategories() {
     this.categoryService.getAllCategories().subscribe(
      {
      next: (data) => ((this.listCategories = data), console.log(data)),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }

  // readUrl(event: any) {
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();

  //     reader.onload = (event: ProgressEvent) => {
  //       this.url = (<FileReader>event.target).result;
  //       console.log(this.url);
  //     };

  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // }

  /**
   * 
   * @param event 
   */
  public onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    var reader = new FileReader();

    reader.onload = (event: ProgressEvent) => {
      this.url = (<FileReader>event.target).result;
      console.log(this.url);
    };

    reader.readAsDataURL(event.target.files[0]);
  }
}
