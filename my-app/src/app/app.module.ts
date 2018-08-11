import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileHandlerComponent } from './file-handler/file-handler.component';

@NgModule({
  declarations: [
    AppComponent,
    FileHandlerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
