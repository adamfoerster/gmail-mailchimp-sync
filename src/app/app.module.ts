import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SyncPageComponent } from './sync-page/sync-page.component';
import { SyncButtonComponent } from './sync-button/sync-button.component';
import { SyncColumnComponent } from './sync-column/sync-column.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SyncPageComponent,
    SyncButtonComponent,
    SyncColumnComponent,
    DropdownComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
