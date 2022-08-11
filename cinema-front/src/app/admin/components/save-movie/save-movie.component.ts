import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/model/category';
import { CategoryService } from '../../services/category.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-save-movie',
  templateUrl: './save-movie.component.html',
  styleUrls: ['./save-movie.component.css']
})
export class SaveMovieComponent implements OnInit {
  url:any;
  movieForm!: FormGroup;
  error =null;
  listCategories: Category[] |null=null;
  constructor(private categoryService: CategoryService, private fb: FormBuilder, private movieService: MovieService) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      production: ['', Validators.required],
      releaseDate: ['', Validators.required],
      duration: ['', Validators.required],
      image: ['', Validators.required],
      category: [{}, Validators.required],
    });
  }

  onSaveMovie(movieForm: FormGroup){
    movieForm.value.image = (movieForm.value.image).substring(12);
    console.log(movieForm.value.image);
    
      this.movieService.saveMovie(movieForm.value).subscribe(data=>{
        console.log(data);
        
      });
      
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (data) => (this.listCategories = data, console.log(data)
      ),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }


  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
        console.log(this.url);
        
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
