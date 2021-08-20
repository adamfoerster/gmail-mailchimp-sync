import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { SyncPageComponent } from './sync-page/sync-page.component';
import { SyncButtonComponent } from './sync-button/sync-button.component';
import { SyncColumnComponent } from './sync-column/sync-column.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    SyncPageComponent,
    SyncButtonComponent,
    SyncColumnComponent,
    DropdownComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
