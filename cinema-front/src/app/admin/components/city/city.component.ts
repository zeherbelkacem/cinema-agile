import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/model/city.model';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit {
  listCities: City[] | undefined;
  error = null;


  constructor(private cityService: CityService,private router: Router) {}

  ngOnInit(): void {
    this.getAllCity();
   
  }
  getAllCity() {
    this.cityService.getCity().subscribe({
      next: (data) => ((this.listCities = data), console.log(data)),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }
  onDeleteCity(city : City){
    if(confirm("vous êtes sur de vouloir supprimer cette City")){
      this.cityService.delCity(city).subscribe({
        next : (data) => console.log(data),
        error: (err) => (this.error = err.message),
        complete : () =>  window.location.reload()
      })
    }
  }
  onUpdateCity(id : number){
    this.router.navigateByUrl('/updateCity/'+id);
  }
}
