import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UCinemaComponent } from './UComponents/ucinema/ucinema.component';
import { UcityComponent } from './UComponents/ucity/ucity.component';
import { UmoviesComponent } from './UComponents/umovies/umovies.component';
import { HomeComponent } from './UComponents/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './UComponents/login/login.component';
import { AdminHomeComponent } from './admin/components/admin-home/admin-home.component';
import { CityComponent } from './admin/components/city/city.component';
import { CinemaComponent } from './admin/components/cinema/cinema.component';
import { MovieComponent } from './admin/components/movie/movie.component';
import { SaveCityComponent } from './admin/components/save-city/save-city.component';
import { SaveCinemaComponent } from './admin/components/save-cinema/save-cinema.component';
import { UpdateCinemaComponent } from './admin/components/update-cinema/update-cinema.component';
import { UpdateCityComponent } from './admin/components/update-city/update-city.component';



@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    UCinemaComponent,
    UcityComponent,
    UmoviesComponent,
    HomeComponent,
    LoginComponent,
    AdminHomeComponent,
    CityComponent,
    MovieComponent,
    SaveCityComponent,
    SaveCinemaComponent,
    UpdateCinemaComponent,
    UpdateCityComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
