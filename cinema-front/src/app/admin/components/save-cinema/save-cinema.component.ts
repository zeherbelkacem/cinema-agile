import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/model/address';
import { Cinema } from 'src/app/model/cinema.model';
import { City } from 'src/app/model/city.model';
import { CinemaService } from '../../services/cinema.service';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-save-cinema',
  templateUrl: './save-cinema.component.html',
  styleUrls: ['./save-cinema.component.css'],
})
export class SaveCinemaComponent implements OnInit {
  myForm: FormGroup;
  cinema: Cinema | undefined;
  displayForm: boolean = true;
  listCities: City[] | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private cinemaService: CinemaService,
    private cityService: CityService,
    private router: Router
  ) {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      address1: [''],
      address2: [''],
      codeZip: [''],
      town: [''],
      country: [''],
      city: [''],
      movies: [''],
    });
  }

  ngOnInit(): void {
    this.cityService.getCity().subscribe({
      next: (data) => (this.listCities = data),
    });
  }

  onSaveCinema(myForm: FormGroup) {
    if (myForm.valid) {
      const cinemaData = new FormData();
      let address = new Address(
        myForm.value.address1,
        myForm.value.address2,
        myForm.value.town,
        myForm.value.codeZip,
        myForm.value.country
      );
      this.cinema = new Cinema(
        0,
        myForm.value.name,
        address,
        new City(myForm.value.city, '', 0),
        []
      );
      console.log(this.cinema);
      this.cinemaService.addCinema(this.cinema).subscribe({
        next: (data) => console.log('ok'),
        error: (err) => console.log(err),
        complete: () => this.router.navigateByUrl('adminCinema'),
      });
    }
  }
}
