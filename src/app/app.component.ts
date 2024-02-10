import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';

  // Array with 3 objects 
  genders = [
    {id: 'check-male', value: 'male', display: 'Male'},
    {id: 'check-female', value: 'female', display: 'Female'} ,
    {id: 'check-other', value: 'other',  display: 'Prefer not to say'},
  ]

  @ViewChild('registrationForm') form!: NgForm

  onFormSubmitted(){
    console.log(this.form);
    // Accessing the values in the form 
    console.log(this.form.control.value['firstName']);  // Instead of dot notation we use square bracket notation
    console.log(this.form.value.lastName);
    console.log(this.form.value.email);
    console.log(this.form.value.region);
    console.log(this.form.value);
  }

  // SIDE NOTES 
  // Instead of repeating our buttons HTML 3 times, we can use ngFor directive to loop and show the genders
  // First we create the genders array with 3 objects
  // We can then go to the template and remove the divs to repeat one specific div for each gender
  // On the first div I do property binding on id and name since we are assigning those values coming in into an attribute
  // Then I can add string interpolation for the label
  // That allows us to creating the input and labels dynamically
}
