import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';

  // Using ViewChild allows us to access a DOM element or a component from the template
  // In this case I use it to access the reference template variable which holds the form as an object of type NgForm
  @ViewChild('registrationForm') form!: NgForm

  onFormSubmitted(){
    // reference the form variable 
    console.log(this.form);
  }
}
