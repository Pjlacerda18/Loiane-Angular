import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal'
@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styles: [
  ]
})
export class AlertModalComponent implements OnInit {

  @Input() message: string | any;
  @Input() type: 'success' | any;

  constructor( public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }


  onClose() {
    this.bsModalRef.hide()
  }

}
