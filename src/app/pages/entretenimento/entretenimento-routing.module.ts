import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntretenimentoPage } from './entretenimento.page';

const routes: Routes = [
  {
    path: '',
    component: EntretenimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntretenimentoPageRoutingModule {}
