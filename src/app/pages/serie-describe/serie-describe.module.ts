import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerieDescribePageRoutingModule } from './serie-describe-routing.module';

import { SerieDescribePage } from './serie-describe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerieDescribePageRoutingModule
  ],
  declarations: [SerieDescribePage]
})
export class SerieDescribePageModule {}
