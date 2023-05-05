import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form2',
  templateUrl: './reactive-form2.component.html',
  styleUrls: ['./reactive-form2.component.css']
})
export class ReactiveForm2Component {
  loginForm:FormGroup
  genders:gender[] = [{value:0, name:"Erkek"}, {value:1, name:"Kadın"}];
  countries:country[] = [{value:0, name:"Seçiniz"},{value:1, name:"Türkiye"},{value:2, name:"Fransa"},{value:3, name:"Almanya"}]
  constructor()
  {
    this.loginForm = new FormGroup({
      userName:new FormControl('', Validators.required),
      password:new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      rememberMe:new FormControl(),
      gender:new FormControl(0),
      country:new FormControl(0),
    })
  }
  signing()
  {
    console.log(this.loginForm.value);
  }
  errorMessage(field:string)
  {
    return (this.loginForm.get(field)?.invalid && (this.loginForm.get(field)?.dirty || this.loginForm.get(field)?.touched))
  }

}

interface gender
{
  name:string,
  value:number
}
interface country
{
  name:string,
  value:number
}
