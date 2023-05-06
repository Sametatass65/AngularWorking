import { Component, Inject, OnInit } from '@angular/core';
import { backend_url } from 'src/app/Services/Values';
import { UpperService } from 'src/app/Services/upper.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
constructor(private service:UpperService,@Inject(backend_url) private url:string ){}

  ngOnInit(): void {
    this.service.upper("second component");
    console.log(this.url)
  }

  show()
  {
    console.log(this.service.name);
  }

}
