import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gms-sync-column',
  templateUrl: './sync-column.component.html',
  styleUrls: ['./sync-column.component.scss'],
})
export class SyncColumnComponent implements OnInit {
  @Input() source = '';
  @Input() destination = '';
  @Input() groups = [];

  constructor() {}

  ngOnInit(): void {}
}
