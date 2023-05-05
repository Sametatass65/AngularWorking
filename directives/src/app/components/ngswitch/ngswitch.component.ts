import { Component } from '@angular/core';
import { Product, type } from 'src/app/models/product';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent {
  products:Product[] = [];

  constructor()
  {
    this.products.push(new Product(1,"şapka", type.Big));
    this.products.push(new Product(1,"pantolon", type.Small));
    this.products.push(new Product(1,"kazak", type.Medium));
  }

}
