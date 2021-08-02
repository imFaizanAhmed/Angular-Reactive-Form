import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {

  registrationForm: FormGroup
  
  constructor() {
    this.registrationForm = new FormGroup({
      firstname: new FormControl(),
      lastname:  new FormControl(),
      DOB:  new FormControl(),
      Username: new FormControl(),
      Gender: new FormControl(),
      Password: new FormControl(),
      CNIC: new FormControl(),
      MaritalStatus: new FormControl("select Marital Status"),
      MobileNo: new FormControl(),
      Email: new FormControl(),
      Address: new FormControl(),
      Country: new FormControl(),
      Religion: new FormControl(),
      Image: new FormControl(),
      Language: new FormControl(),
      SSN: new FormControl(),
      ExternalHN: new FormControl(),
      EmergencyName: new FormControl(),
      EmergencyPhoneNo : new FormControl(),
      Occupation: new FormControl(),
      Ethnicity: new FormControl(),
    });
   }

  print(){
    console.log(this.registrationForm.value)
  }
  ngOnInit(): void {
  }
}
