import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EntretenimentoPageRoutingModule } from './entretenimento-routing.module';
import { EntretenimentoPage } from './entretenimento.page';
import { ListaComponent } from 'src/app/components/lista/lista.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntretenimentoPageRoutingModule
  ],
  declarations: [EntretenimentoPage, ListaComponent],
  providers: [    
    
  ]
})
export class EntretenimentoPageModule {}
