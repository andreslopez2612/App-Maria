import { Injectable } from '@angular/core';
import { Categoria } from './categoria.module';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private categorias: Categoria[] = [
    {
      id: "1",
      title: 'Electricidad',
      url: '',
      img: "https://andreslo.000webhostapp.com/wp-content/uploads/2020/08/electricidad.jpeg"
    },
    {
      id: "2",
      title: 'Acabado Interior',
      url: '',
      img: "https://andreslo.000webhostapp.com/wp-content/uploads/2020/08/acabados-interior.jpeg",
    },
    {
      id: "3",
      title: 'Acabado Exterior',
      url: '',
      img: "https://andreslo.000webhostapp.com/wp-content/uploads/2020/08/acabados-exterior.jpeg",
    },
    {
      id: "4",
      title: 'Pintura',
      url: '',
      img: "https://andreslo.000webhostapp.com/wp-content/uploads/2020/08/electricidad.jpeg",
    },
    {
      id: "5",
      title: 'Ornamentacion',
      url: '',
      img: "https://andreslo.000webhostapp.com/wp-content/uploads/2020/08/ornamentacion.jpeg",
    },
    {
      id: "6",
      title: 'Eventos',
      url: '',
      img: "https://andreslo.000webhostapp.com/wp-content/uploads/2020/08/eventos.jpeg",
    },
    {
      id: "7",
      title: 'Vidrieria',
      url: '',
      img: "https://andreslo.000webhostapp.com/wp-content/uploads/2020/08/vidrieria.jpeg",
    },
    {
      id: "8",
      title: 'Plomeria',
      url: '',
      img: "https://andreslo.000webhostapp.com/wp-content/uploads/2020/08/plomeria.jpeg",
    },
    {
      id: "9",
      title: 'Cerrajeria',
      url: '',
      img: "https://andreslo.000webhostapp.com/wp-content/uploads/2020/08/cerrajeria.jpeg"
    }
  ];

  constructor() { }

  getCategorias(){
    return [...this.categorias]
  }

  getCat(catId: String){
    return {
      ...this.categorias.find(cat =>{
        return cat.id === catId
      })
    }
  }

  addCat(title){

  }

  deleteCat(){

  }
  
}
