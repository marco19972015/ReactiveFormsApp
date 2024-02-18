import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';

  // Holds values placed by user through databinding
  firstname: string = '';
  lastname: string = '';
  dob: string = '';
  emailProperty: string = '';
  gender: string = '';
  country: string = '';
  city: string = '';
  postCode: string = '';
  region: string = '';
  username: string = '';
  isAgreed: boolean = false;

  // Array with 3 objects 
  genders = [
    {id: 'check-male', value: 'male', display: 'Male'},
    {id: 'check-female', value: 'female', display: 'Female'} ,
    {id: 'check-other', value: 'other',  display: 'Prefer not to say'},
  ]

  @ViewChild('registrationForm') form!: NgForm

  onFormSubmitted(){
    // logout the NgForm
    console.log(this.form);

    // set values to the properties declared which come from the form value properties
    this.firstname = this.form.value.firstname;
    this.lastname = this.form.value.lastname;
    this.emailProperty = this.form.value.email;
    this.country = this.form.value.address.country;
    this.city = this.form.value.address.city;
    this.region = this.form.value.address.region;
    this.postCode = this.form.value.address.postCode;
    this.username = this.form.value.username;
    this.dob = this.form.value.dob;
    this.isAgreed = this.form.value.agreement;

    // Reset the form
    // this.form.reset()

    // Setting the default values after form reset
    this.form.form.patchValue({
      // we pass objects that are exact to the value properties of NgForm form
      gender: 'male',
      address: {
        country: 'United States'
      }
    })
  }

  generateUsername(){
    // Variable to hold the username
    let username = ''

    let firstName: string = this.form.value.firstname;
    let lastName: string = this.form.value.lastname;
    let Dob: string = this.form.value.dob;

    // if the firstname contains more than 3 characters
    if(firstName.length >= 3){
      // We want to get the first 3 characters (Ex. John we get Joh)
      username += firstName.slice(0,3);
    }
    // first contains less than 3 characters
    else { 
      username += firstName;
    }

    // if the firstname contains more than 3 characters
    if(lastName.length >= 3){
      // We want to get the first 3 characters (Ex. John we get Joh)
      username += lastName.slice(0,3);
    }
    // first contains less than 3 characters
    else { 
      username += lastName;
    }

    // This data value will return us a data type based of the string value contained in dob property
    let dateTime = new Date(Dob);

    // This will return us the year from dataTime, and then we append that year to username property
    username += dateTime.getFullYear();

    // turn the username into lowercase we have to reassign it to the property
    username = username.toLowerCase();   
    console.log(username);
    
    // Using patchValue method to update the username and country property
    this.form.form.patchValue({
      username: username,
    })
  }

  defaultCountry: string = 'United States'

  // SIDE NOTES WORKING WITH CHECKBOXES
  // In version 13, In this version we learn how to work with check boxes and retrieve either a false or true value depending on what 
  // the user has clicked.

  // First we want to add the code for the checkbox, we also want to include ngModule this allows us to turn the checkbox into a JS/TS object
  //   <div class="column">
  //     <input type="checkbox" name="agreement" ngModel>
  //     <label for="agreement">I agree to terms & conditions</label>
  //   </div> 
  
  // Currently a problem with this is when the forms renders the initial value of the checkbox is empty string
  // When we would actually want false

  // To fix this issue we can use property binding
  // First we create 1 property called isAgreed, which we can then do property binding on isAgreed like so
  // <input type="checkbox" name="agreement" [ngModel]="isAgreed">

  // We can then work with the value by adding it to the OnFormSubmitted() method
  
  







}
