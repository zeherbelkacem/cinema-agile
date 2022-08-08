import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemaComponent } from './components/cinema/cinema.component';
import { CityComponent } from './components/city/city.component';
import { CategoryComponent } from './components/category/category.component';
import { MovieComponent } from './components/movie/movie.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CinemaComponent,
    CityComponent,
    CategoryComponent,
    MovieComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ]
})
export class AdminModule { }
