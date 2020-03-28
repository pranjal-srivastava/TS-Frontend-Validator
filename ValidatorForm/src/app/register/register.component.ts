import { Component } from '@angular/core';

declare var NgForm:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  genders=['Male','Female']
  genderHasError= true;
  submitted = false;
  register = new User('','',null,'default',null,'','','','')
  errorMsg='';
  passwordMismatch = true;

  validateGender(value){
    this.genderHasError=value=='default';
  }

  validatePassword(valuex,valuey){
  this.passwordMismatch = !valuex.localeCompare(valuey);
  }

}
