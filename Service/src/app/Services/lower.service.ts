import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LowerService {

  constructor() { }

  upper(word:string)
  {
    console.log(word.toLowerCase());
  }
}
