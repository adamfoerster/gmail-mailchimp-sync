import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gms-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() groups = [];

  constructor() { }

  ngOnInit(): void {
  }

}
