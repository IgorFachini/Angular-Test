import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

const appRoutes: Routes = [
  { path: '', component: ListagemComponent },//Se eu digitem a url em branco, por exemplo localhost:3000, vazio, ele carrega ListagemComponent
  { path: 'cadastro', component: CadastroComponent},//roda de cadastro
  { path: '**', component: ListagemComponent } //qualque coisa que não seja das rotas anteriores, vai para  ListagemComponent

];

export const routing = RouterModule.forRoot(appRoutes);
