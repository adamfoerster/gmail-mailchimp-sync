import { Component, Input, OnInit } from '@angular/core';
import { DataGroup } from '../types';

@Component({
  selector: 'gms-sync-column',
  templateUrl: './sync-column.component.html',
  styleUrls: ['./sync-column.component.scss'],
})
export class SyncColumnComponent implements OnInit {
  @Input() source = '';
  @Input() destination = '';
  @Input() groups: DataGroup[] = [];

  constructor() {}

  ngOnInit(): void {}
}
