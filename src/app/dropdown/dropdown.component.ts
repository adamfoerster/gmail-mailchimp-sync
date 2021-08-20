import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gms-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() groups = [];
  showGroups = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleGroups() {
    this.showGroups = !this.showGroups;
  }

}
