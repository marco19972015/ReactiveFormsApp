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
    console.log(this.form.control.value['firstName']); 
    console.log(this.form.value.lastName);
    console.log(this.form.value.email);
    console.log(this.form.value.region);
    
  }

  // SIDE NOTES FORM VALIDATION 
  // In the template, if we enter values in the firstName, lastName, and email controls then the form will be valid (this includes the html 
  // required attribute)

  // If ANY of those fields/form control don't have a valid value then the field itself will be invalid and the entire form will be invalid
  // This can be checked in with the invalid and valid properties of the form itself

  // regarding form control... the invalid and valid will be validated based on the value, if there is validation and the user enters data
  // that doesn't meet the validation then the form control will be invalid

  // In a template driven form we add the code that will validate it in the template (duhhhhh)
  // Once we add the required field, if we submit the form with no values or the wrong values, the form valid property will be false and
  // the invalid property will be true. 
  // Each form control also have their own valid and invalid properties satisfied by ANY values
  
  // This is bad since we can place a random value in the email field and it will satisfy the required property, since the required validator 
  // property isn't looking to see if the email is correct, instead it checks if there is a value in the control
  // To fix this we can use another html attribute called email. With this we now validate on an actual email as well.
  // We can check this through the form control email valid and invalid property

  // USE CASE: If the form is valid (if all form controls are valid) then enable the submit button and user can submit
  // elseif that is false then disable the submit button
  // To do this we first add the disabled property using property binding syntax. We then access the valid property through the template 
  // reference variable. If we use valid property then we have the not operator in front !registrationForm.valid. If we have the invalid
  // then it would look like [disabled]=registrationForm.invalid

  // With dev tools we can inspect the app-root/section/form/div/div /div. With this we can see some CSS classes that are added
  // These classes are ng-dirty, ng-valid and ng-touched, this will vary based on touching the control or putting values into the control
  
}
