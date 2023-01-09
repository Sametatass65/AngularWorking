import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Model, toDoItem } from './model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   model = new Model();
   isDisplay= false; 

   getItems(){
    if(this.isDisplay){
      return this.model.items;
    }
    return this.model.items.filter(filter=> !filter.action); 
   }
  getName(){
    return this.model.title;
  }

  addItem(value:string){
    if(value != "")
      this.model.items.push(new toDoItem(value,false))
  }

}
