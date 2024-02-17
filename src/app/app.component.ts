import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';

  firstname: string = '';
  lastname: string = '';
  dob: string = '';
  emailProperty: string = '';

  // Array with 3 objects 
  genders = [
    {id: 'check-male', value: 'male', display: 'Male'},
    {id: 'check-female', value: 'female', display: 'Female'} ,
    {id: 'check-other', value: 'other',  display: 'Prefer not to say'},
  ]

  @ViewChild('registrationForm') form!: NgForm

  onFormSubmitted(){
    console.log(this.form);
    console.log(this.form.control.value['firstName']); 
    console.log(this.form.value.lastName);
    console.log(this.form.value.email);
    console.log(this.form.value.address.country);

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

    // if the firstname contains more than 3 characters
    if(this.firstname.length >= 3){
      // We want to get the first 3 characters (Ex. John we get Joh)
      username += this.firstname.slice(0,3);
    }
    // first contains less than 3 characters
    else { 
      username += this.firstname;
    }

    // if the firstname contains more than 3 characters
    if(this.lastname.length >= 3){
      // We want to get the first 3 characters (Ex. John we get Joh)
      username += this.lastname.slice(0,3);
    }
    // first contains less than 3 characters
    else { 
      username += this.lastname;
    }

    // This data value will return us a data type based of the string value contained in dob property
    let dateTime = new Date(this.dob);

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

  // SIDE NOTES RESSETING A TEMPLATE DRIVEN FORM AND SETTING DEFAULT VALUES AFTER RESET
  // In version 11, we focus on reseting the form after we click on the submit button, and also setting 
  // some default values onces the reset has happened.

  // Before we go into how to reset a form we have a bug where the 'Create a Username' button is submitting the form when we dont want it to
  // Since the default of a button it of type="submit", we need to change it into type="button". 
  // This will prevent the button from submitting the form now

  // Going back to clearing the form after pressing submit
  // The goal is to have the form reset, aswell as the state of the form (ng-dirty) ect should reset
  
  // In order to do this we go to the method that is being called from that button which is the onFormSubmitted method
  // After reading and logging out the values... on NgForm object we have a method called reset()
  // This method will reset the form meaning all the form controls and state of the form will get reset


  // Now the problem is that is also resets default values that we might have (In this case we have two default values)
  // After we reset the form we set the values values for the default values using patchValue() method in the onFormSubmitted() method

  // this.form.form.patchValue({
  //   gender: 'male',
  //   address: {
  //     country: 'United States'
  //   }
  // })  

  // After these changes we can see the default values go back to what they were initially





}
