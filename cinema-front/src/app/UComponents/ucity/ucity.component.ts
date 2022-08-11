import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemaService } from 'src/app/admin/services/cinema.service';
import { CityService } from 'src/app/admin/services/city.service';

import { Cinema } from 'src/app/model/cinema.model';
import { City } from 'src/app/model/city.model';

@Component({
  selector: 'app-ucity',
  templateUrl: './ucity.component.html',
  styleUrls: ['./ucity.component.css']
})
export class UcityComponent implements OnInit {
listCities : City[] | undefined;
listCinemas : Cinema[]|undefined;
error = null;
 
 

  constructor(private cityService : CityService,private cinemaService : CinemaService, private router : Router) {}

  ngOnInit(): void {
    this.getAllCity();
    this.getAllCinema();

  }
getAllCity(){
  this.cityService.getCity().subscribe({
    next : (data) => (this.listCities = data,console.log(data)) ,
    error : (err) => this.error = err.message,
    complete : () => this.error = null
    
  })
}
getAllCinema(){
  this.cinemaService.getCinemas().subscribe({
    next :(data) => (this.listCinemas = data, console.log(data)),
    error : (err) => this.error = err.message,
    complete : () => this.error = null
  })

  }

  onSelect(cityId : number){
    this.router.navigateByUrl("/cityDetails/"+ cityId);
  }
 


  }


