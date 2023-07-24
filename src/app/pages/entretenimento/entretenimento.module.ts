import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntretenimentoPageRoutingModule } from './entretenimento-routing.module';

import { EntretenimentoPage } from './entretenimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntretenimentoPageRoutingModule
  ],
  declarations: [EntretenimentoPage]
})
export class EntretenimentoPageModule {}
