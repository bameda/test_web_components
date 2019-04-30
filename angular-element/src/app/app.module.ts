import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { createCustomElement } from '@angular/elements';

import { WeekdaysSelectorComponent } from './weekdays-selector/weekdays-selector.component';

@NgModule({
  declarations: [
    WeekdaysSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    WeekdaysSelectorComponent
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const weekdaysSelector = createCustomElement(WeekdaysSelectorComponent, { injector: this.injector });
    customElements.define('weekdays-selector', weekdaysSelector);
  }
}
