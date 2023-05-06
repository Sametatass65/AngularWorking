import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpperService {
name:string ="samet";
  constructor() { }

  upper(word:string)
  {
    console.log(word.toUpperCase()); 
  }
}
