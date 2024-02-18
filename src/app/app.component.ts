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

    // Reset the form
    this.form.reset()

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

  // SIDE NOTES RETRIEVING FORM DATA
  // In version 11, The focus here was to retrieve the values and show the user what was placed on the form using string interpolation.

  // Currently we are showing the values that are being placed by the user in the console, but now we want to show it in the template
  // There are several ways to do this 

  // One way is to create more properties like the ones on top such as firstName, lastName, dob properties
  // gender: string = '';
  // country: string = '';
  // Now we want to set these properties with the properties values of the value object in the onFormSubmitted() method
  // this.firstname = this.form.value.firstname;
  // this.lastname = this.form.value.lastname;
  // this.emailProperty = this.form.value.email;

  // We then add to our html to the template and css to show initially hard coded values
  // Using string interpolation syntax we can start to add the properties we want
  
  // A problem we are now having is that because we are using two way data binding the values are showing up before we submit the form
  // To fix this we remove the two way data binding from the template
  // NOTE - We need to keep the ngModel directive because that is what connects the controls to the form
  // SECOND NOTE - Becuase I made my own values I messed up the username method when removing the ngModel. To fix this instead of using the
  // template to call the values, I called them from the ts file using the form conrols coming from the form itself after hitting submit

  // Finally to add the first letter of both the firstname and the lastname we put the following code in the template
  //  <p>{{firstname.slice(0, 1).toUpperCase()}} {{lastname.slice(0, 1).toUpperCase()}}</p>
  
  







}
