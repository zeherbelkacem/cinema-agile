import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './UComponents/home/home.component';
import { LoginComponent } from './UComponents/login/login.component';
import { UCinemaComponent } from './UComponents/ucinema/ucinema.component';
import { UcityComponent } from './UComponents/ucity/ucity.component';
import { UmoviesComponent } from './UComponents/umovies/umovies.component';

const routes: Routes = [
  { path : 'home', component : HomeComponent},
{ path : 'cinemas', component : UCinemaComponent},
{path : 'movies', component:UmoviesComponent},
{path : 'cities', component : UcityComponent},
{path : 'login',component :LoginComponent},

    { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
