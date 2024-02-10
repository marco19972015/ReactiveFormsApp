import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';

  @ViewChild('registrationForm') form!: NgForm

  onFormSubmitted(){
    console.log(this.form);
    // Accessing the values in the form 
    console.log(this.form.control.value['firstName']);  // Instead of dot notation we use square bracket notation
    console.log(this.form.value.lastName);
    console.log(this.form.value.email);
    console.log(this.form.value.region);
    
    
  }


  // Side notes 
  // When we check the form object in dev tools we'll look at two objects, controls and value
  // controls: references the First Name element, Last Name element and so on in the form
  // value: should have a property for each control and the value entered in that control

  // FIRST To get the values and controls we need to add a name property to each of the form controls ie name="firstName"
  // By adding a name property we are able to create the form controls in the NgForm object!!

  // SECOND we need to add ngModel directive
  // Usually used for 2 way databinding, here we use it to tell angular the input element is a control for this form
  // In dev tools we can check the controls object, which now shows the controls which include the name reference and ngModel
  // We can also check the value object, this holds the current value in the control

  // The controls property gives us other properties we can access such as statusChanges, value, disabled, dirty and so on 
  // value gives us access to just the value.
  // Therefore, we have options on how to access a value or multiple properties
}
