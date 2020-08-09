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
          precio: 30000,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec nisl quis nunc laoreet pharetra. Nam eu suscipit felis. Ut commodo fringilla ligula, a dapibus nisi mollis eget."
        },
        {
          id: 2,
          titulo: "Servicio 2",
          precio: 150000,
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
          precio: 40000,
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
          precio: 50000,
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
          precio: 60000,
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
          precio: 70000,
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
          precio: 80000,
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
          precio: 90000,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec nisl quis nunc laoreet pharetra. Nam eu suscipit felis. Ut commodo fringilla ligula, a dapibus nisi mollis eget."
        }
      ]
    },
    {
      id: "9",
      id_categoria: "9",
      productos: [
        {
          id: 1,
          titulo: "Servicio 1",
          precio: 100000,
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
