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
  {
    path: 'playback/:type/:id',
    loadChildren: () => import('./pages/playback/playback.module').then( m => m.PlaybackPageModule)
  },
  { 
    path: 'media/:type', 
    loadChildren: () => import('./pages/media/media.module').then( m => m.MediaPageModule)
  },   {
    path: 'describe/:type/:id',
    loadChildren: () => import('./pages/describe/describe.module').then( m => m.DescribePageModule)
  },
  {
    path: 'audio-player/:id',
    loadChildren: () => import('./pages/audio-player/audio-player.module').then( m => m.AudioPlayerPageModule)
  },
  {
    path: 'serie-describe/:season/:id',
    loadChildren: () => import('./pages/serie-describe/serie-describe.module').then( m => m.SerieDescribePageModule)
  },
  {
    path: 'season/:number/:id',
    loadChildren: () => import('./pages/season/season.module').then( m => m.SeasonPageModule)
  },


 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
