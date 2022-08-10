import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cinema } from 'src/app/model/cinema';

@Component({
  selector: 'app-save-cinema',
  templateUrl: './save-cinema.component.html',
  styleUrls: ['./save-cinema.component.css']
})
export class SaveCinemaComponent implements OnInit {
  myForm : FormGroup;
  cinema: Cinema | undefined;
  

  constructor(
    private formBuilder: FormBuilder
  ) {
  this.myForm = this.formBuilder.group({
  name: ['', [Validators.required]],
  address1: [''],
  address2: [''],
  zipcode: [''],
  addressCity:[''],
  country:[''],
  city:[''],
  movies:['']
  });
  }

  ngOnInit(): void {
  }

  onSaveCinema(myForm: FormGroup){
    if (myForm.valid) {
      const cinemaData = new FormData();
      this.cinema = (
        myForm.value.name,
        myForm.value.address1,
        myForm.value.address2,
        myForm.value.addressCity,
        myForm.value.zipcode,
        myForm.value.city,
        myForm.value.movies
      );
    }
  }

}
