import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';

@NgModule({
  declarations: [ FotoComponent ],
  exports: [ FotoComponent ]//Permite que outros modulos me utilizem
})
export class FotoModule {}
//tes
