import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from 'src/app/admin/services/cinema.service';
import { Cinema } from 'src/app/model/cinema.model';

@Component({
  selector: 'app-ucity-details',
  templateUrl: './ucity-details.component.html',
  styleUrls: ['./ucity-details.component.css']
})
export class UcityDetailsComponent implements OnInit {
  listCinema : Cinema[] | undefined;
  error = null;
  cityId = 1;

  constructor(private cinemaService : CinemaService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
  this.cityId = this.route.snapshot.params['cityId'];
  this.getCinemaByCity(this.cityId);
  
  }

  getCinemaByCity(id : number){

    if(id){
    this.cinemaService.getCinemasByCityId(id).subscribe({
      next:(data)=>(this.listCinema=data),
  
      error:(err)=>this.error=err.message,
  
      complete:()=>this.error=null,
      });
    }
      }
    }
