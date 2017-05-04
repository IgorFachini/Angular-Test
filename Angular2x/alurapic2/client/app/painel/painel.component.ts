import { Component, Input} from '@angular/core';//Input, permite a incerção no Component,

@Component({
  moduleId: module.id,
  selector: 'painel',
  templateUrl: './painel.component.html'
})
export class PainelComponent {
    @Input() titulo: string;

}
