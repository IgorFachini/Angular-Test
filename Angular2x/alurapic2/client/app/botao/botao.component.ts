import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'botao',
  templateUrl: './botao.component.html'

})
export class BotaoComponent {

  @Input() nome: string = 'Ok';
  @Input() estilo: string = 'btn-default';
  @Input() tipo: string = 'button';
  @Input() desabilitado: boolean = false;
  @Output() acao = new EventEmitter();
  @Input() confirmacao: boolean = false;

  executaAcao(){
    if(this.confirmacao){
      if(confirm("Deseja confirmar?")){
        this.acao.emit(null);//Emiter ativa alguma coisa pra fora, o nome acao,
        //é o mesmo que esta declarado no botao em listagem,entao ele ativara
        //oque esta dentro de acao pra ele emitir algo pra fora,
        //ele precisa do import Output()
      }
      return;
    }
    this.acao.emit(null);
  }

}
