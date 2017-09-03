import { Component } from '@angular/core';


 /**
  * @description AppComponent
  * componente raiz
  */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myTitle = 'Create a hero';
  myMensage: 'Hero name';


 /**
  * @description
  * Resposta do nome do heroi escrita no modal, po (closeWithOk)
  */
  modalResponse(response) {
    alert(response);
  }

}
