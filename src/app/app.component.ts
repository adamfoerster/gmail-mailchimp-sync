import { Component, OnInit } from '@angular/core';
import { StateService } from './state.service';

@Component({
  selector: 'gms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public state: StateService) {}

  ngOnInit() {
    console.log('AppComponent initialized');
    this.state.setDestinationMetadata({ name: 'Mailchimp', icon: 'Mailchimp.png' });
    this.state.setOriginMetadata({ name: 'Gmail', icon: 'Gmail.png' });
    this.state.setDestinationGroups([
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
    ]);
    this.state.setOriginGroups([
      {
        id: 'church',
        name: 'Church',
        checked: false,
      },
    ]);
  }
}
