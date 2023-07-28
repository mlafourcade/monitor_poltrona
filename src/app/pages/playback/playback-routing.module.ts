import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaybackPage } from './playback.page';

const routes: Routes = [
  {
    path: '',
    component: PlaybackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaybackPageRoutingModule {}
