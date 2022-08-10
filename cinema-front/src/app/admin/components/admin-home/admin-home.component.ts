import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/model/city.model';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

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
