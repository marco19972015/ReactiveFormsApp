import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';


  // When we use ngForm it converts the type of form from HTMLFormElement to type an instance of ngForm
  onFormSubmitted(form: NgForm){
    // When we log out the form we will get an object of type NgForm
    console.log(form);
    
  }
}
