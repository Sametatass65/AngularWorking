import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  loginForm:FormGroup
  genders:gender[] = [{value:0, name:"Erkek"}, {value:1, name:"Kadın"}];
  countries:country[] = [{value:0, name:"Türkiye"},{value:1, name:"Fransa"},{value:2, name:"Almanya"}]
  constructor(fb:FormBuilder)
  {
    this.loginForm = fb.group({
      userName:fb.control('',Validators.required), // FormControl
      password: fb.control('',[Validators.required, Validators.maxLength(15), Validators.minLength(5)]),
      rememberMe:false,
      gender:0,
      country:fb.control('',Validators.required),
      birthDate:fb.control('', [Validators.required, this.isOldEnough])
    })
  }
  signing()
  {
    console.log(this.loginForm.value);
    // this.loginForm.get('userName').
  }
  errorMessage(field:string)
  {
    return (this.loginForm.get(field)?.invalid && (this.loginForm.get(field)?.dirty  || this.loginForm.get(field)?.touched ))
  }
  isOldEnough = (control:FormControl):{isYoung:true} | null =>
  {
    const birthDate = new Date(control.value);
    birthDate.setFullYear(birthDate.getFullYear()+18);
    return birthDate<new Date? null: {isYoung:true}
  }
}

interface gender
{
  value:number;
  name:string;
}
interface country
{
  value:number;
  name:string
}
