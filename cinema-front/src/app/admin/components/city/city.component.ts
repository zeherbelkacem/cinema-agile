import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/model/city.model';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  listCities : City[] | undefined;
  error = null;
  
    constructor(private cityService : CityService) {}
  
    ngOnInit(): void {
      this.getAllCity();
    }
  getAllCity(){
    this.cityService.getCity().subscribe({
      next : (data) => (this.listCities = data,console.log(data)) ,
      error : (err) => this.error = err.message,
      complete : () => this.error = null
      
    })
  }
  }
  
