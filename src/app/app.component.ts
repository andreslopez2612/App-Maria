import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { CategoriasService } from './home/categorias/categorias.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  log : boolean=true;
  categories : any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private categoriasService: CategoriasService
  ) {
    this.categories = this.categoriasService.getCategorias();
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();      
    });
  }

  sideMenu()
  {
    this.navigate = [
      {
        title : "Inicio",
        url : "/home",
        icon : "ellipse-outline",
        view : true
      },
      {
        title : "Perfil",
        url : "/usuarios",
        icon : "person-circle-outline",
        view : this.log
      },
      {
        title : "Categorias",
        icon : "caret-down-circle-outline",
        view: true,
        children: this.categories
      },
      {
        title : "Carrito",
        url : "/cart",
        icon : "cart-outline",
        view : this.log
      },
      {
        title : "Ingresar",
        url : "/sign-in",
        icon : "person-outline",
        view: !this.log
      },
      {
        title : "Registrarse",
        url : "/sign-up",
        icon : "person-add-outline",
        view: !this.log
      },
      {
        title : "Cerrar Sesion",
        url : "/logut",
        icon : "log-out-outline",
        view : this.log
      }
    ]
  }
}
