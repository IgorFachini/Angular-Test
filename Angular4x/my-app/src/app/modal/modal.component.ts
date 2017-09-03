import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() title = '';
  @Input() message = '';

  modalShow = false;

  @Output() closeWithOk: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ok(name: string) {
    name = name.trim();
    if (!name) { return; }
    this.closeWithOk.emit(name);
    this.close();
  }


  // open modal
  open(): void {
    this.modalShow = true;
  }

  // close modal
  close(): void {
    this.modalShow = false;
  }

  ngOnInit() {


  }


}
