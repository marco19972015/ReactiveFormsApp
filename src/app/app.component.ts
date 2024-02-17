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
    
    
    // this.form.controls['username'].value = username;
    
    // First we want to access the form which is stored in form!: NgForm
    // Here we will use the setValue method.
    // When using setValue method we will need to pass in an object AND the structure of that object must match 
    // the structure of all the properties that are assigned to the value property which is assigned to the form which comes from NgForm
    // this.form.setValue({
    //   firstName: this.form.value.firstName,
    //   lastName: this.form.value.lastName,
    //   email: this.form.value.email,
    //   phoneNum: this.form.value.phoneNum,
    //   dob: this.form.value.dob,
    //   username: username,
    //   gender: this.form.value.gender,
    //   // Address property is an object since we used FormGroup
    //   address: {
    //     street1: this.form.value.address.street1,
    //     street2: this.form.value.address.street2,
    //     country: this.form.value.address.country,
    //     city: this.form.value.address.city,
    //     region: this.form.value.address.region,
    //     postalCode: this.form.value.address.postalCode
    //   }
    // })

    // We call the form property which also contains another form property and then we can use the patchValue method
    // We also pass an object, but we can just provide the field that we want to update
    // In this case that field being the username field
    // AND lets say we want to update a default value like the defaultCountry property
    this.form.form.patchValue({
      username: username,
      // We access the proprety address wich is in the value property
      address: {
        country: 'Japan'
      }
    })
  }

  defaultCountry: string = 'United States'

  // SIDE NOTES SETVALUE AND PATCHVALUE METHOD
  // The focus of this section will be on how to upadte the value of a form control in a form using either setValue() method or patchValue method. As
  // well as understanding the difference between them

  // To understand set and match Value method we will work with the username form control.
  // We add a template reference variable and ngModel in order to store an instance of the input field. The reference is assigned to the template reference variable
  // <input type="text" placeholder="username" name="username" ngModel required #uname="ngModel" />
  // We also add the small tag along with the custom message validation using the newly created template reference variable
  // <small *ngIf="uname.invalid && uname.touched">*Username is a required field</small>


  // So what do we want to happen with the newly created Create a Username button?
  // we want to populate the username input field with a username which will be generated dynamically
  // The user will have two options
  // 1. User can enter a username on his own 
  // 2. Or the user can click on the Create a Username button 
  // We want to generate the username based on the users firstName, lastName and the users date of birth
  // FOR VALIDATION, if the user has not entered firstName or lastName or DOB then we diables the Create a Username button

  // NOTE When creating a button and not specifying the type/binding (ie submit) or calling a method the default on any button will be submit
  // Therefore, when the button is clicked it will submit the form and it'll emit NG submit event. 
  // And because we are listening for the NG submit on the form, the onFormSubmitted method will be called
  // <form class="form" (ngSubmit)="onFormSubmitted()" #registrationForm="ngForm">
  // That's why we'll still log out the logs in the method back in the ts file.

  // Fist we provide the validation on the button
  // We create a template reference variable for the dob input tag and use the ngModel to store a reference to the form control object
  // which we assign the reference to that form control object to the template reference variable 
  // <input type="date" placeholder="Date of Birth" name="dob" ngModel required #tempdob="ngModel
  // We use the fname, lname and now the tempdob template reference variable to disable the button
  // On the button itself we use the disabled attribute use property binding to the template reference variable and their respected invalid properties 
  // <button class="btn-gen-username" [disabled]="fname.invalid || lname.invalid || tempdob.invalid">
  // After this we will have validation

  // Second we create the dob property of type string in the ts file and use two way data binding on the dob input tag
  // We assign the dob property to the two way databinding
  // <input type="date" placeholder="Date of Birth" name="dob" [(ngModel)]="dob" required #tempdob="ngModel"/>


  // Third we can now use the generateUsername() method to create the username
  // We create a variable to hold the username 
  // We then create a if statement, IF the fName length is greater than 3, slice the first three characters and append it to the username property
  // ELSE if the legnth is less than 3 characters just append the name 
  // Then we create another if statement, IF the lName length is greater than 3, slice the first three characters and append it to the username property
  // ELSE if the legnth is less than 3 characters just append the name 
  // We then create a new instance of the date contructor and pass in the dob string property, we then assign that to the dateTime property
  // In order to get the year we use the getFullYear method on the dateTime and append that to the username 
  // we then use the toLowerCase() method on the username property and reassign that to the same username property in order to have the username in lowercase


  // Now we want to populate the username field with the generated username
  // If we try to assign the username property to the this.form.value.username it wont work/won't update
  // The reason is because we are trying to update a property of this value object and it will work, however it won't populate the value in the browser form.
  // because the username property is part of the value object, it is not a form control.
  // INSTEAD we can use this this.form.controls['username'].value = username;
  // .value will cause a "Cannot assign to 'value' because it is a read-only property", meaning we can't assign it a value directly because it's read only
  // So how can we update the value
  // Here we can use setValue() method 

  // ******************************************************************************************
  //                              Definition of setValue()
  // The setValue() method
  // The setValue() method is used to update a FormControl, FormGroup or FormArray value

  // To the setValue() method, we pass an object to update the value of a FormControl, FormGroup or FormArray. 
  // The structure of that object must match the structure of FormControl, FormGroup or FormArray which we are trying to upadte 
  // ******************************************************************************************

  // First we want to access the form which is stored in form!: NgForm
  // Here we will use the setValue method.
  // When using setValue method we will need to pass in an object AND the structure of that object must match 
  // the structure of all the properties that are assigned to the value property which is assigned to the form which comes from NgForm 

  // this.form.setValue({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phoneNum: '',
  //   dob: '',
  //   username: username,
  //   gender: 'male',
  //   // Address property is an object since we used FormGroup
  //   address: {
  //     street1: '',
  //     street2: '',
  //     country: '',
  //     city: '',
  //     region: '',
  //     postalCode: ''
  //   }
  // })

  // We now instroduce a new problem
  // When we tell the form to create the username, the form sets the value in the setValue method where all the properties are blank 
  // except for the gender property and the username property



  // How do we solve this problem. We again make use the the form property of type NgForm and basically hard code them in like so
//   this.form.setValue({
//     firstName: this.form.value.firstName,
//     lastName: this.form.value.lastName,
//     email: this.form.value.email,
//     phoneNum: this.form.value.phoneNum,
//     dob: this.form.value.dob,
//     username: username,
//     gender: this.form.value.gender,
//     // Address property is an object since we used FormGroup
//     address: {
//       street1: this.form.value.address.street1,
//       street2: this.form.value.address.street2,
//       country: this.form.value.address.country,
//       city: this.form.value.address.city,
//       region: this.form.value.address.region,
//       postalCode: this.form.value.address.postalCode
//     }
//   })
// }

// Ultimately updating one property requires us to use the entire form value properties when using setValue method 

// Instead of using the setValue method, we can also just use the patchValue method
// We call the form property which also contains another form property and then we can use the patchValue method
// We also pass an object, but we can just provide the field that we want to update
// In this case that field being the username field
// AND lets say we want to update a default value like the defaultCountry property (in this case it resides inside a formGroup) to access it we...
// Example
  //   this.form.form.patchValue({
  //     username: username,
  //     // We access the proprety address wich is in the value property
  //     address: {
  //       country: 'Japan'
  //     }
  //   })
  // }

// ******************************************************************************************
//                              Definition of patchValue()
// The setValue() method
// The setValue() method is used to update a FormControl, FormGroup or FormArray value

// To the setValue() method, we pass an object to update the value of a FormControl, FormGroup or FormArray. 
// The structure of that object must match the structure of FormControl, FormGroup or FormArray which we are trying to upadte 
// ******************************************************************************************
  

}
