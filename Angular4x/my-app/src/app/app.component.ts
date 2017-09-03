import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) // componente raiz
export class AppComponent {
  myTitle = 'Create a hero';
  myMensage: 'Hero name';


  modalResponse(response) {
    alert(response);
  }

}
