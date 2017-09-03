import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) // componente raiz
export class AppComponent {
  title = 'Create a hero';
  message: 'Hero name';


  modalResponse(response) {
    alert(response);
  }

  onOpen($event) {
    console.log('onOpen' + $event);

  }

  onClose($event) {
    console.log('onClose');

  }
}
