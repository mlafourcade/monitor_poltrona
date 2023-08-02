import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescribePage } from './describe.page';

const routes: Routes = [
  {
    path: '',
    component: DescribePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescribePageRoutingModule {}
