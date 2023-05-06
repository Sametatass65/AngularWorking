import { Component, OnInit } from '@angular/core';
import { UpperService } from 'src/app/Services/upper.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit{

  constructor(private service :UpperService)
  {

  }
  ngOnInit(): void {
    this.service.upper("first component");
  }
  change()
  {
    this.service.name = "berna";
  }

  



}

