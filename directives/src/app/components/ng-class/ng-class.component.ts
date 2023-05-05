import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  isLarge = true;
  isRedBox = true;
  isBorder = true;
  // css:any = {'large':this.isLarge,'redBox':this.isRedBox, 'blueBorder':this.isBorder};

  showChange()
  {
    this.isLarge = !this.isLarge;
    this.isBorder = !this.isBorder;
    this.isRedBox = !this.isRedBox;
  }

}
