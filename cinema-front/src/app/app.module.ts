import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UCinemaComponent } from './UComponents/ucinema/ucinema.component';
import { UcityComponent } from './UComponents/ucity/ucity.component';
import { UmoviesComponent } from './UComponents/umovies/umovies.component';
import { HomeComponent } from './UComponents/home/home.component';
import { CinemaComponent } from './admin/components/cinema/cinema.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './UComponents/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    UCinemaComponent,
    UcityComponent,
    UmoviesComponent,
    HomeComponent,
    LoginComponent,
   
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
