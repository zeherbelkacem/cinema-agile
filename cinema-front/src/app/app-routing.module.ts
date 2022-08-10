import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/components/admin-home/admin-home.component';
import { CinemaComponent } from './admin/components/cinema/cinema.component';
import { CityComponent } from './admin/components/city/city.component';
import { MovieComponent } from './admin/components/movie/movie.component';
import { SaveCinemaComponent } from './admin/components/save-cinema/save-cinema.component';
import { HomeComponent } from './UComponents/home/home.component';
import { LoginComponent } from './UComponents/login/login.component';
import { UCinemaComponent } from './UComponents/ucinema/ucinema.component';
import { UcityComponent } from './UComponents/ucity/ucity.component';
import { UmoviesComponent } from './UComponents/umovies/umovies.component';

const routes: Routes = [
  { path : 'home', component : HomeComponent},
  {path:'',component:HomeComponent},
{ path : 'cinemas', component : UCinemaComponent},
{path : 'movies', component:UmoviesComponent},
{path : 'cities', component : UcityComponent},
{path : 'login',component :LoginComponent},
{path : 'adminCinema',component:CinemaComponent},
{path : 'adminCities',component:CityComponent},
{path : 'saveCinema',component:SaveCinemaComponent},
{path : 'adminHome',component:AdminHomeComponent},
{path : 'adminMovies',component: MovieComponent},

    { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
