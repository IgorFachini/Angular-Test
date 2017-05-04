import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FiltroPorTitulo } from './foto.pipes'

@NgModule({
  declarations: [ FotoComponent , FiltroPorTitulo],//O que meu modelulo tem, faz parte dele
  exports: [ FotoComponent, FiltroPorTitulo ]//Permite que outros modulos me utilizem
})
export class FotoModule {}
//tes
