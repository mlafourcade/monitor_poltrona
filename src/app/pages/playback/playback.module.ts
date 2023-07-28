import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaybackPageRoutingModule } from './playback-routing.module';

import { PlaybackPage } from './playback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaybackPageRoutingModule
  ],
  declarations: [PlaybackPage]
})
export class PlaybackPageModule {}
