import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { GallaryComponent } from './component/gallary/gallary.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, GallaryComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
