import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.page.html',
  styleUrls: ['./cat-detail.page.scss'],
})
export class CatDetailPage implements OnInit {

  categoria : any;

  private list = [
    {
      id: "1",
      id_categoria: "1",      
      productos: [
        {
          id: 1,
          titulo: "Servicio 1",
          precio: 20000,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec nisl quis nunc laoreet pharetra. Nam eu suscipit felis. Ut commodo fringilla ligula, a dapibus nisi mollis eget."
        }
      ]
    },
    {
      id: "2",
      id_categoria: "2",      
      productos: [
        {
          id: 1,
          titulo: "Servicio 1",
          precio: 20000,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec nisl quis nunc laoreet pharetra. Nam eu suscipit felis. Ut commodo fringilla ligula, a dapibus nisi mollis eget."
        }
      ]
    },    
    {
      id: "3",
      id_categoria: "3",
      productos: [
        {
          id: 1,
          titulo: "Servicio 1",
          precio: 20000,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec nisl quis nunc laoreet pharetra. Nam eu suscipit felis. Ut commodo fringilla ligula, a dapibus nisi mollis eget."
        }
      ]
    },
    {
      id: "4",
      id_categoria: "4",
      productos: [
        {
          id: 1,
          titulo: "Servicio 1",
          precio: 20000,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec nisl quis nunc laoreet pharetra. Nam eu suscipit felis. Ut commodo fringilla ligula, a dapibus nisi mollis eget."
        }
      ]
    },
    {
      id: "5",
      id_categoria: "5",
      productos: [
        {
          id: 1,
          titulo: "Servicio 1",
          precio: 20000,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec nisl quis nunc laoreet pharetra. Nam eu suscipit felis. Ut commodo fringilla ligula, a dapibus nisi mollis eget."
        }
      ]
    },
    {
      id: "6",
      id_categoria: "6",
      productos: [
        {
          id: 1,
          titulo: "Servicio 1",
          precio: 20000,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec nisl quis nunc laoreet pharetra. Nam eu suscipit felis. Ut commodo fringilla ligula, a dapibus nisi mollis eget."
        }
      ]
    },
    {
      id: "7",
      id_categoria: "7",
      productos: [
        {
          id: 1,
          titulo: "Servicio 1",
          precio: 20000,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec nisl quis nunc laoreet pharetra. Nam eu suscipit felis. Ut commodo fringilla ligula, a dapibus nisi mollis eget."
        }
      ]
    },
    {
      id: "8",
      id_categoria: "8",
      productos: [
        {
          id: 1,
          titulo: "Servicio 1",
          precio: 20000,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec nisl quis nunc laoreet pharetra. Nam eu suscipit felis. Ut commodo fringilla ligula, a dapibus nisi mollis eget."
        }
      ]
    },
  ]

  constructor(private activatedRoute: ActivatedRoute, private categoriasService: CategoriasService) { }

  

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap){

      }
      const recipeId = paramMap.get('catId');
      this.categoria = this.categoriasService.getCat(recipeId);
    })
  }

}
