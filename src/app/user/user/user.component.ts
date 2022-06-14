import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('userItem')
  user: any;

  @Output() onIdDel: EventEmitter<string> = new EventEmitter();

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onDeleteId() {
    this.onIdDel.emit(this.user.id);
  }

}
