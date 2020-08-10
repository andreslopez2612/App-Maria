import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  // {
  //   path: 'cart',
  //   loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  // },
  // {
  //   path: 'categorias',
  //   loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  // },
  // {
  //   path: 'usuarios',
  //   loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  // },
  // {
  //   path: 'sign-in',
  //   loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  // },
  // {
  //   path: 'sign-up',
  //   loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
