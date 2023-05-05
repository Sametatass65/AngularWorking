import { Component } from '@angular/core';

@Component({
  selector: 'app-eventclick',
  templateUrl: './eventclick.component.html',
  styleUrls: ['./eventclick.component.css']
})
export class EventclickComponent {

  count:number = 1;
  writeToConsole()
  {
    console.log("click");
  }
  increaseCount()
  {
      this.count++; // one-way binding
      // console.log(`${this.count}`);
  }

}
