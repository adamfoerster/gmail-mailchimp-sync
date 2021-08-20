import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gms-sync-button',
  templateUrl: './sync-button.component.html',
  styleUrls: ['./sync-button.component.scss'],
})
export class SyncButtonComponent implements OnInit {
  synced = false;
  constructor() {}

  ngOnInit(): void {}

  toggleSync() {
    this.synced = !this.synced;
  }
}
