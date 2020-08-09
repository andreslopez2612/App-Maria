import { Component } from '@angular/core';

import { CategoriasService } from './categorias/categorias.service';
import { CatDetailService } from "./categorias/cat-detail/cat-detail.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cat: any;
  prod: any;

  constructor(
    private catDetailService: CatDetailService,
    private categoriasService: CategoriasService
  ) {
    this.catDetailService.getProducts();
  }

  ngOnInit() {
    this.cat = this.categoriasService.getCategorias(); 
    this.prod = this.catDetailService.getProducts();
    // console.log(this.prod);
  }

}
