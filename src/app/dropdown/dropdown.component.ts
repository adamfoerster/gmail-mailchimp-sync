import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { IDataGroup } from '../types';

@Component({
  selector: 'gms-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [
    trigger('dropdown', [
      state('arrowdown', style({ transform: 'rotate(180deg)' })),
      state('arrowup', style({ transform: 'rotate(0deg)' })),
      transition('arrowdown <=> arrowup', animate('200ms ease-in-out')),
    ]),
    trigger('slideDown', [
      state('void', style({ opacity: 0, height: 0 })),
      state('*', style({ opacity: 1, height: '*' })),
      transition('void <=> *', animate('200ms ease-in-out')),
    ]),
  ],
})
export class DropdownComponent {
  @Input() groups: IDataGroup[] = [];
  showGroups = false;
  allChecked = false;

  constructor() {}

  toggleGroups() {
    this.showGroups = !this.showGroups;
  }

  toggleGroup(group: IDataGroup) {
    this.groups = this.groups.map((g) => {
      if (g === group) {
        g.checked = !g.checked;
      }
      return g;
    });
    this.allChecked = this.groups.every((g) => g.checked);
  }

  checkAll() {
    this.allChecked = !this.allChecked;
    this.groups = this.groups.map((g) => {
      g.checked = this.allChecked;
      return g;
    });
  }
}
