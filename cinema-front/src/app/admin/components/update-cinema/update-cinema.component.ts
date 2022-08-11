import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/model/address';
import { Cinema } from 'src/app/model/cinema.model';
import { City } from 'src/app/model/city.model';
import { CinemaService } from '../../services/cinema.service';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-update-cinema',
  templateUrl: './update-cinema.component.html',
  styleUrls: ['./update-cinema.component.css']
})
export class UpdateCinemaComponent implements OnInit {
  myForm : FormGroup;
  cinema: Cinema | undefined;
  displayForm: boolean = true;
  listCities: City[] | undefined;
  

  constructor(
    private formBuilder: FormBuilder,
    private cinemaService : CinemaService,
    private cityService : CityService,
    private router : Router,
    private route : ActivatedRoute
  ) {
  this.myForm = this.formBuilder.group({
    id : [0],
  name: ['', [Validators.required]],
  address1: [''],
  address2: [''],
  codeZip: [''],
  town:[''],
  country:[''],
  city:[''],
  movies:['']
  });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.cinemaService.getOneCinema(id).subscribe({
      next: (data) => {
        this.cinema=data
        this.myForm.setValue({
          id : this.cinema.id,
          name : this.cinema.name,
          address1 : this.cinema.address.address1,
          address2 : this.cinema.address.address2,
          codeZip : this.cinema.address.codeZip,
          town : this.cinema.address.town,
          country : this.cinema.address.country,
          city : this.cinema.city,
          movies : this.cinema.movies
        })
      }
    });
    this.cityService.getCity().subscribe({
      next: (data)=>this.listCities=data
    });
  }

  onSaveCinema(myForm: FormGroup){
    if (myForm.valid) {
      const cinemaData = new FormData();
      let address = new Address(
        myForm.value.address1,
        myForm.value.address2,
        myForm.value.town,
        myForm.value.codeZip,
        myForm.value.country
      )
      this.cinema = new Cinema(
        myForm.value.id,
        myForm.value.name,
        address,
        new City(myForm.value.city,'',0),
        [],
      );
      this.cinemaService.addCinema(this.cinema).subscribe({
        next: (data)=>console.log("ok"),
        error: (err) => console.log(err),
        complete: () => this.router.navigateByUrl("/adminCinema")
      });
    }
  }


}
