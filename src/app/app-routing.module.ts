import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'entretenimento',
    loadChildren: () => import('./pages/entretenimento/entretenimento.module').then( m => m.EntretenimentoPageModule)
  },
  {
    path: 'kids',
    loadChildren: () => import('./pages/kids/kids.module').then( m => m.KidsPageModule)
  },
  {
    path: 'pesquisa',
    loadChildren: () => import('./pages/pesquisa/pesquisa.module').then( m => m.PesquisaPageModule)
  },
  {
    path: 'apps',
    loadChildren: () => import('./pages/apps/apps.module').then( m => m.AppsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
