import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor() { }

  upper(word:string)
  {
    console.log(word.toUpperCase());
  }
}
