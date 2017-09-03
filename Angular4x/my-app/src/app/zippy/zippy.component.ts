import { Component, OnInit, EventEmitter, Output  } from '@angular/core';


@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  visible: boolean = true;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit('pao');
    } else {
      this.close.emit(null);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
