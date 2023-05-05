import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit{
  count :number = 1;

  ngOnInit():void{
    this.writeToCount();
  }
  increaseCount()      
  {
    this.count++;
  }
  writeToCount()
  {
    console.log(this.count);
  }

}
