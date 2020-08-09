import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})

export class UserPage implements OnInit {

  private users = [
    {    
      id: 1,
      name: "Andres",
      age: 24,
      titles: ['Teacher','Doctor']
    },
    {    
      id: 2,
      name: "Brayan",
      age: 24,
      titles: ['Driver','Fireman']
    }
  ]

  constructor() { } 

  ngOnInit() {
    console.log(this.users);
  }
}
