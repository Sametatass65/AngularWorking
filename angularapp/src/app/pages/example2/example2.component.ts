import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example2',
  template:`<h1> Second Page</h1><p>{{email}}</p>`,
  styles: [`.h1{color:red}`]
})
export class Example2Component implements OnInit {

  email:string = "sametatass65@gmail.com";
 
  constructor()
  {
    console.log("Contructer çalıştır");
  }
  ngOnInit(): void {
    console.log("oninit çalıştır");
  }
 
}
