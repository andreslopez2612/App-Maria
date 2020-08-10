import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatDetailService {
  categoria : any;
  private list = [
    {
      id: "1",
      id_categoria: "1",      
      productos: [
        {
          id: 1,
          titulo: "Servicio Electricidad",
          categoria: "Electricidad",
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
          titulo: "Servicio Acabado Interior 1",
          categoria: "Acabado Interior",
          precio: 30000,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec nisl quis nunc laoreet pharetra. Nam eu suscipit felis. Ut commodo fringilla ligula, a dapibus nisi mollis eget."
        },
        {
          id: 2,
          titulo: "Servicio Acabado Interior 2",
          categoria: "Acabado Interior",
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
          titulo: "Servicio Acabado Exterior",
          categoria: "Acabado Exterior",
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
          titulo: "Servicio Pintura",
          categoria: "Pintura",
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
          titulo: "Servicio Ornamentacion",
          categoria: "Ornamentacion",
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
          titulo: "Servicio Eventos",
          categoria: "Eventos",
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
          titulo: "Servicio Vidrieria",
          categoria: "Vidrieria",
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
          titulo: "Servicio Plomeria",
          categoria: "Plomeria",
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
          titulo: "Servicio Cerrajeria",
          categoria: "Cerrajeria",
          precio: 100000,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec nisl quis nunc laoreet pharetra. Nam eu suscipit felis. Ut commodo fringilla ligula, a dapibus nisi mollis eget."
        }
      ]
    },
  ]

  constructor() { }

  getProducts(){
    return [...this.list]
  }
}
