import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

/**
  * @description ModalComponent
  * Component principal do modal.
  */
export class ModalComponent {

  @Input() title = '';
  @Input() message = '';

  modalShow = false;

  @Output() closeWithOk: EventEmitter<any> = new EventEmitter();

  constructor() { }



  /**
    * @description
    * Se algo de nome fecha o modal e manda um emiter para (closeWithOk) com o nome escrito.
    */
  ok(name: string) {
    name = name.trim();
    if (!name) { return; }
    this.closeWithOk.emit(name);
    this.close();
  }


  /**
  * @description
  * Trocar o valor da variavel booleanda que da permissao pro modal abrir.
  */
  open(): void {
    this.modalShow = true;
  }

  /**
  * @description
  * Trocar o valor da variavel booleanda que da permissao pro modal fechar.
  */
  close(): void {
    this.modalShow = false;
  }

}
