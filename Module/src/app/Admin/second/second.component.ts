import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit{
  constructor(private router :Router, private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    // let id = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(id);
    this.readParam(); 
  }
  goFirst()
  {
    this.router.navigateByUrl(`first`)
    //this.router.navigate(["first"]);
  }
  changeParam()
  {
    this.router.navigateByUrl(`second/${8000}`);
  }
  readParam()
  {
    this.activatedRoute.paramMap.subscribe(x=>
      {
        console.log(`ID: ${x.get('id')}`);
      })
  }
}
