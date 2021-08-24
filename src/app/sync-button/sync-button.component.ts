import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'gms-sync-button',
  templateUrl: './sync-button.component.html',
  styleUrls: ['./sync-button.component.scss'],
  animations: [
    trigger('rotate', [
      state('synced', style({ transform: 'rotate(179deg)' })),
      state('unsynced', style({ transform: 'rotate(0deg)' })),
      transition('synced <=> unsynced', animate('200ms ease-in-out')),
    ]),
    trigger('fadeOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SyncButtonComponent {
  synced = false;
  constructor(public state: StateService) {}

  toggleSync() {
    this.synced = !this.synced;
    if (this.synced) {
      this.state.syncContacts();
    }
  }
}
