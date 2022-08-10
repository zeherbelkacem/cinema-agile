import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/admin/services/city.service';
import { City } from 'src/app/model/city.model';

@Component({
  selector: 'app-ucity',
  templateUrl: './ucity.component.html',
  styleUrls: ['./ucity.component.css']
})
export class UcityComponent implements OnInit {
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
