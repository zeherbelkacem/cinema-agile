import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/model/address';
import { Cinema } from 'src/app/model/cinema.model';
import { City } from 'src/app/model/city.model';
import { CinemaService } from '../../services/cinema.service';

@Component({
  selector: 'app-delete-cinema',
  templateUrl: './delete-cinema.component.html',
  styleUrls: ['./delete-cinema.component.css']
})
export class DeleteCinemaComponent implements OnInit {
  cinema: Cinema = new Cinema(0,'',new Address('','','','',''),new City(0,'',0),[]);
  displayForm: boolean = true;
  

  constructor(
    private cinemaService : CinemaService,
    private route : ActivatedRoute,
    private router : Router
  ) {

  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.cinemaService.getOneCinema(id).subscribe({
      next: (data) => {
        this.cinema=data
      }
    });
  }

  deleteCinema(id: number){
    this.cinemaService.deleteCinema(id).subscribe({
      complete: ()=> this.router.navigateByUrl("/adminCinema")
    });
  }

}
