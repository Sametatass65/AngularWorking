import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    // var page = this.activatedRoute.snapshot.queryParamMap.get("page");
    // var size = this.activatedRoute.snapshot.queryParamMap.get("pagesize");
    // console.log(`page:${page}, pagesize:${size}`);
    this.readQueryParam();
  }
  goSecond()
  {
    //this.router.navigateByUrl(`second`) // bunu parametre almayan routlarda kullan 
    this.router.navigate(["second/1"]); // bunu  ise parametre alan routlarda kullan 
    
  }
  changeQueryParam()
  {
    this.router.navigate(['first'], {queryParams:{page:50, pagesize:180}});
  }
  readQueryParam()
  {
    this.activatedRoute.queryParamMap.subscribe(x=>{
      console.log(`Page: ${x.get('page')} PageSize: ${x.get('pagesize')}`);
    })
  }

}
