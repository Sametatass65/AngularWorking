import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent {
  login: loginModel;
  // login2: loginModel2;
  countries: country[] = [
    { value: 0, country: 'Seçiniz' },
    { value: 1, country: 'Türkiye' },
    { value: 2, country: 'Almanya' },
    { value: 3, country: 'Fransa' },
  ];
  genders: gender[] = [
    { value: 0, gender: 'Erkek' },
    { value: 1, gender: 'Kadın' },
  ];
  constructor() {
    this.login = {
      userName: '',
      password: '',
      rememberMe: false,
      country: 0,
      gender: 0,
    };
    // this.login2 = new loginModel2('samet', '123', false);
  }
  consoleLog(show: NgForm) {
    console.log(show.value);
    // console.log(this.login);
  }
  countryChange(value: any)
  {
    console.log(value);
  }
  genderChange(value: any)
  {
    console.log(value);
  }
  onChange(value: any)
  {
    console.log(value);
  }
  isInValid(nameInput:FormControl):boolean
  {
    if(!(nameInput.invalid && (nameInput.dirty || nameInput.touched))) return false;
    if(nameInput.errors?.['requred']) return true;
    if(nameInput.errors?.['minlength']) return true;
      
    return false;
  }
  isValid(model:FormControl):boolean
  {
    return model.valid && (model.dirty || model.touched);
  }
}

interface gender {
  value: number;
  gender: string;
}
interface country {
  value: number;
  country: string;
}
interface loginModel {
  userName: string;
  password: string;
  rememberMe: boolean;
  country: number;
  gender: number;
}
// class loginModel2 {
//   userName: string;
//   password: string;
//   rememberMe: boolean;
//   country: number;
//   // ? işareti koyup değişkenleri constructerda başlatılmayabilirdi.

//   constructor(
//     name: string,
//     password: string,
//     rememberMe: boolean,
//     country: number
//   ) {
//     this.userName = name;
//     this.password = password;
//     this.rememberMe = rememberMe;
//     this.country = country;
//   }
// }
