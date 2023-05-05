import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-onchange-hook',
  templateUrl: './ng-onchange-hook.component.html',
  styleUrls: ['./ng-onchange-hook.component.css']
})
export class NgOnchangeHookComponent implements OnInit , OnChanges{
  @Input()
  num : number |undefined
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);// değişkenin değişim durumunu bildiriyor
  }
  ngOnInit(): void {
    
  }
}
