import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({//Transforma minha classe em um modulo do angular
  imports: [ BrowserModule ],//Vai rodar em tal, Ex navegador
  declarations: [ AppComponent ],// O que esse meu modulo declara, oque faz parte dele
  bootstrap: [ AppComponent ]// Se eu tivesse mais de um component, qua eu iria iniciar primeiro, nesse caso, sera AppComponent do arquivo app.component.ts
})
export class AppModule {}
