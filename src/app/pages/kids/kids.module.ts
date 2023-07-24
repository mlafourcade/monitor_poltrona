import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidsPageRoutingModule } from './kids-routing.module';

import { KidsPage } from './kids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KidsPageRoutingModule
  ],
  declarations: [KidsPage]
})
export class KidsPageModule {}
