import { Component } from '@angular/core';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.css']
})
export class TempFormComponent {
  loginTemplater :login
  countryTemplaters:country[]
  genderTemplater:gender[]

  constructor()
  {
    this.loginTemplater = {name:"",password:"",country:0,rememberMe:false,gender:0};
    this.countryTemplaters =[{name:"Seçiniz", value:0},{name:"Fransa",value:1},{name:"Almanya", value:2},{name:"Türkiye", value:3}];
    this.genderTemplater = [{name:"Erkek",value:0},{name:"Kadın",value:1}];
  }
  saveChange(ngForm:any)
  {
    console.log(ngForm.value);
    //console.log(this.loginTemplater)
  }
  countryChange(event:any)
  {
    console.log("country event ="+ event);
  }
  genderChange(event:any)
  {
    console.log("gender event=" +event)
  }
}

interface gender
{
  value:number;
  name:string;
}
interface country
{
    value:number,
    name:string
}
interface login
{
  name:string,
  password:string,
  country:number,
  rememberMe:boolean,
  gender:number
}
