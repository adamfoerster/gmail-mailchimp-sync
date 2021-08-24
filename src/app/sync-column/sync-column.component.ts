import { Component, Input } from '@angular/core';
import { IDataGroup } from '../types';

@Component({
  selector: 'gms-sync-column',
  templateUrl: './sync-column.component.html',
  styleUrls: ['./sync-column.component.scss'],
})
export class SyncColumnComponent {
  @Input() source = '';
  @Input() destination = '';
  @Input() groups: IDataGroup[] = [];
  @Input() icon = '';
  constructor() {}
}
