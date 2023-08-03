import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerieDescribePage } from './serie-describe.page';

const routes: Routes = [
  {
    path: '',
    component: SerieDescribePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerieDescribePageRoutingModule {}
