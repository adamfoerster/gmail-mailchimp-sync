import { Component, OnInit } from '@angular/core';
import { DataGroup } from '../types';

@Component({
  selector: 'gms-sync-page',
  templateUrl: './sync-page.component.html',
  styleUrls: ['./sync-page.component.scss'],
})
export class SyncPageComponent implements OnInit {
  destinationGroups: DataGroup[] = [
    {
      id: 'family',
      name: 'Family',
      checked: false,
    },
    {
      id: 'workfriends',
      name: 'Work Friends',
      checked: false,
    },
    {
      id: 'workenemies',
      name: 'Work Enemies',
      checked: false,
    },
    {
      id: 'another',
      name: 'Another Label',
      checked: false,
    },
  ];
  sourceGroups: DataGroup[] = [
    {
      id: 'church',
      name: 'Church',
      checked: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
