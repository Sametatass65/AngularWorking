import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit{

  names : string[] = ["samet", "berna", "biz"];
  users : User[] = [];
  constructor() {
    this.users.push(new User(1,"samet", "samet1@gmail.com"));
    this.users.push(new User(2,"samet1", "samet2@gmail.com"));
    this.users.push(new User(3,"samet2", "samet3@gmail.com"));
  }
  ngOnInit(): void {
    
  }
}
