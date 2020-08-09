import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  // userInfo : any;
  constructor() {
    // this.infoUser();
  }

  ngOnInit() {
  }

  private userInfo = [
    {    
      name : "Andres",
      lastname : "Lopez",
      email : "andres@gmail.com",
      img : "https://img.pngio.com/user-logos-user-logo-png-1920_1280.png",
      city : "Bogota"
    }
  ]

  // infoUser(){
  //   this.userInfo = [
  //     {
  //       name : "Perfil",
  //       lastname : "/usuarios",
  //       email : "person-circle-outline",
  //       img : "https://img.pngio.com/user-logos-user-logo-png-1920_1280.png",
  //       city : "Bogota"
  //     }
  //   ]
  // }

}
