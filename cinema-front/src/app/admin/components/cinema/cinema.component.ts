import { Component, OnInit } from '@angular/core';
import { Cinema } from 'src/app/model/cinema.model';
import { CinemaService } from '../../services/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
listCinema : Cinema[] | undefined;
error = null;
  constructor(
    private cinemaService : CinemaService
  ) { }

  ngOnInit(): void {
this.getAllCinema();    
  }
  getAllCinema(){
    this.cinemaService.getCinemas().subscribe({
      next:(data)=>(this.listCinema=data),
      error:(err)=>this.error=err.message,
      complete:()=>this.error=null
    })
  }
}
