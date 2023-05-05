import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datapass',
  templateUrl: './datapass.component.html',
  styleUrls: ['./datapass.component.css']
})
export class DatapassComponent {
  @Input() 
  name:string | undefined;
}
