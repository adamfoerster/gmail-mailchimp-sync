import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { IDataGroup } from '../types';

@Component({
  selector: 'gms-sync-page',
  templateUrl: './sync-page.component.html',
  styleUrls: ['./sync-page.component.scss'],
})
export class SyncPageComponent implements OnInit {
  destinationGroups: IDataGroup[] = [];
  sourceGroups: IDataGroup[] = [];
  destinationName = '';
  destinationIcon = '';
  sourceName = '';
  sourceIcon = '';

  constructor(public state: StateService) {}

  ngOnInit() {
    this.state.destinationGroups$.subscribe(
      (groups) => (this.destinationGroups = groups)
    );
    this.state.originGroups$.subscribe(
      (groups) => (this.sourceGroups = groups)
    );
    this.state.destinationMetadata$.subscribe((metadata) => {
      this.destinationName = metadata.name;
      this.destinationIcon = metadata.icon;
    });
    this.state.originMetadata$.subscribe((metadata) => {
      this.sourceName = metadata.name;
      this.sourceIcon = metadata.icon;
    });
  }
}
