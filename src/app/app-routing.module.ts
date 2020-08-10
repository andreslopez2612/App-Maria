import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  // {
  //   path: 'user',
  //   loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'categorias',
    children:[
      {
        path: "",
        loadChildren: () => import('./home/categorias/categorias.module').then( m => m.CategoriasPageModule)
      },
      {
        path: ":catId",
        loadChildren: () => import('./home/categorias/cat-detail/cat-detail.module').then( m => m.CatDetailPageModule)
      }
    ]    
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./home/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./home/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./home/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./home/cart/cart.module').then( m => m.CartPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
