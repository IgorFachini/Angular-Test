import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
    //Por padrão, o angular usa ViewEncapsulation com shadow DOM (Emulated),
    //para que aja compatibilidade em todos os navegadores
})
export class FotoComponent {

    @Input() titulo: string = '';
    @Input() url: string = '';
    descricao: string = '';
    _id: string = '';
}
