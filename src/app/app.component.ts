import { Component } from '@angular/core';
import { StateService } from './state.service';

@Component({
  selector: 'gms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(state: StateService) {}
}
