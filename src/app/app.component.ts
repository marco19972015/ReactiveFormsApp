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
    console.log(this.form.value.region);
    
  }

  // SIDE NOTES FORM VALIDATION 
  // Going back to the CSS classes that are being added ng-touched/ng-dirty and ng-invalid/ng-valid
  // We can use these CSS classes to our advantage. When there is some invalid data inside the first name input element we want to show 
  // that border in red. 

  // First we want to create a CSS class to do this. The CSS class name must have ng-invalid because the ng-invalid CSS class gets added to
  // the form control when it's not valid. We then add the ng-invalid {border: red px solid;} so when the class gets added it will also add the border
  // NOTE that if we only have ng-invalid as the css class, when the ng-invalid is added we will get the border around the entire form

  // In order to show the red border around the form control we need to change the CSS class a bit. 
  // We add input.ng-invalid {...} to the class name - if it's input type and ng-invalid is added then we add the red border 
  // NOTE that if we have a previous CSS border around the input tag, there might be an issue where it is being overriden, so remove that

  // At this point the borders have the red border, HOWEVER now we want the border to change color to red when the user has touched it and the value isn't correct
  // so we add... ng-touched... input.ng-invalid.ng-touched{...}
  // Now, if we touch the control and click outside that control, the input field will add a red border. If we add the correct value, the red border will be removed



  // Now, if the form control doesn't have a valid value we provide a custom validation message 
  // First, we create a small tag and let the user know the field is required
  // Second, we add a CSS class to the small tag, color: red, font-weight: bold;

  // We don't want to show this error message always, we only want to show this error message when the user has touched the form control and there is no valid value
  // For this we first add a template reference variable to the input tag called #fname.
  // #fname now stores a reference to that specific input tag in the DOM (which returns us the input element in HTML)
  // BUT, we want the input element as a JS object. 
  // To fix this we can assign ngModel... #fname="ngModel" (we learned that when we use ngModel it tells ng that the input element is a form control for the form)
  // Now it will store a reference of the input element as a JS object. 
  // Doing this will give us access to the firstName property in the controls property. 
  // #fname reference variable will be assigned firstName FormControl (can be seen in dev tool under controls)
  // In this FormControl (firstName) it contains a valid and touched property that we can work with

  // To the small tag we can use fname reference variable with the invalid and touched properties. 
  // <small *ngIf="fname.invalid && fname.touched">*First Name is a Required Field</small>
  // Initially the error message won't show, but if we click and don't put anything then the message will show
  // Now we can add it to the lastName, and email input fields/controls
  


  // We can provide two way data binding so the user can see what is being placed in the form 
  // In the TS file we create the firstName, lastName, and emailAddress
  // In the template we use banana syntax on the ngModel and assign them the properties 
  // We then use string interpolation to show the user what they have entered

  // We don't want the "You entered: " text to show if the user hasn't entered anything. To fix this we...
  // We use an ngIf statement in the template and place the property. If the property is empty, then don't show anything else
  // show the text




}
