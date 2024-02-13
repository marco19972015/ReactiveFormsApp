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
    console.log(this.form.value.address.country);
    
  }

  defaultCountry: string = 'United States'

  // SIDE NOTES GROUPING OF FORM CONTROLS
  // The goal of this section is to provide validation at a group level instead of specific form controls like the previous section
  // A use case for this could be that we have a value that is undefined in a form, so we can just group all the validations together and
  // provide a generic validation message

  // Currently the form is of type FormControl where we have an object for each form control of the form itself (seen in controls prop).
  // In the value object we have properties that are assigned to the names of the form controls.
  // The address sections is collecting address related information, we can switch this section into FormGroup type.
  // Doing so will allows us to perform validation on these form controls together.

  // How do we group them together?
  // Using ngModelGroup="address" in the div that encapsulates the addres related form control allows us to create the address FormGroup
  // located in controls. If we expand the address FormGroup we can see that it's a collection of FormControls
  // address contains a property called controls, when expanded we can see the city, country, postal, ect form control
  // If we scroll down we can see there are other properties as well. For example there is valid and invalid property. 
  // If values are validated then the valid property is true, otherwise invalid is true and valid is false

  // FormGroup div container will include CSS classes from angular, such as ng-untouced, ng-perstine, ng-valid.
  // If we touch ANY of the form controls the FormGroup. ng-untouched will be removed and ng-touched will be added. 
  // Using any of these form controls inside the FormGroup we can identify if any of the values have been touched.
  // We can also check if all the controls of the form have a valid value or not

  // To start we make the the form controls required
  // Then we create the small tag, problem will arise where the tag will still show even if we have valid values
  // We can now use the invlaid and valid properties on the FormGroup
  // To do this we create an instance of the FormGroup using #addr="ngModelGroup" where addr has the instance of ngModelGroup which 
  // contains an instance of the FormGroup address which allows us to access all the properties 
  // In the small tag we can now use the addr reference variable and the invalid property with the ngIf directive to hide the tag
  // once the values are valid.
  // <small *ngIf="addr.invalid">*Some of the address fields do not contain a value</small>
  

  // Now we want that small tag to be hidden when the page is initially loaded. If it has been touched then show the error message 
  // we do this by adding  && addr.touched. 
  // <small *ngIf="addr.invalid && addr.touched">*Some of the address fields do not contain a value</small>


  // NOTE that if we go to the value property of the form, the controls in the address section are not there. Instead a new property has
  // been added called address, address contains all the values from the FormGroup address
  // To access it we would need to go through this console.log(this.form.value.address.country);



}
