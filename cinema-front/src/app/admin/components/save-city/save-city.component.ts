import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/model/city.model';
import { CityService } from '../../services/city.service';



@Component({
  selector: 'app-save-city',
  templateUrl: './save-city.component.html',
  styleUrls: ['./save-city.component.css']
})
export class SaveCityComponent implements OnInit {
  myForm : FormGroup;
  city : City;

  error : string = "";
  status : boolean = false;

  constructor(private formBuilder: FormBuilder,private cityService : CityService, private router : Router, private route : ActivatedRoute) {
  
    this.city = new City(0,"",0);
    this.myForm = this.formBuilder.group({
   id : [this.city.id],
   name : [this.city.name,Validators.required],
   department : [this.city.department,Validators.required],
    
    });
    }

  ngOnInit(): void {
  }

  onSaveCity(form : FormGroup){
    if(form.valid){
     this.cityService.postCity({name:form.value.name,department:form.value.department}).subscribe({
      next : (data) => console.log(data),  
      error : (err) => this.error = err.message,
      complete : () => this.router.navigateByUrl('adminCities')
    })
    }
  }
}
