import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from  '@angular/http';
import 'rxjs/add/operator/map';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent} from './listagem/listagem.component';
import { routing } from './app.routes';

@NgModule({//Transforma minha classe em um modulo do angular
  imports: [ BrowserModule, FotoModule, HttpModule, PainelModule, routing ],//Vai rodar em tal, Ex navegador
  declarations: [ AppComponent, CadastroComponent, ListagemComponent ],// O que esse meu modulo declara, oque faz parte dele
  bootstrap: [ AppComponent ]// Se eu tivesse mais de um component, qua eu iria iniciar primeiro, nesse caso, sera AppComponent do arquivo app.component.ts
})
export class AppModule {}
