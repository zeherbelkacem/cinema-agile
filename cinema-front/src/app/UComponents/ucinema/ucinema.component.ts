import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from 'src/app/admin/services/cinema.service';
import { Cinema } from 'src/app/model/cinema.model';

@Component({
  selector: 'app-ucinema',
  templateUrl: './ucinema.component.html',
  styleUrls: ['./ucinema.component.css']
})
export class UCinemaComponent implements OnInit {
  listCinema: Cinema[] | undefined;
  keyWord : string = '';
  error = null;

  constructor(
    private cinemaService : CinemaService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.keyWord = this.route.snapshot.params['keyWord'];
    console.log(this.keyWord);
    this.getAllCinema();
  }

  ngOnChange(): void{
    this.keyWord = this.route.snapshot.params['keyWord'];
    this.getAllCinema();
  }

  getAllCinema() {
    this.cinemaService.getCinemasByKeyWord(this.keyWord).subscribe({
      next:(data)=>(this.listCinema=data),
      error:(err)=>this.error=err.message,
      complete:()=>this.error=null, 
    })
  }

}
