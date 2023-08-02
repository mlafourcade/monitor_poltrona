import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescribePageRoutingModule } from './describe-routing.module';

import { DescribePage } from './describe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescribePageRoutingModule
  ],
  declarations: [DescribePage]
})
export class DescribePageModule {}
