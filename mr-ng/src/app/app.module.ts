import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FilelistBasicComponent } from './filelist-basic/filelist-basic.component';
import { FilesService } from './files.service';


@NgModule({
  declarations: [
    AppComponent,
    FilelistBasicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    FilesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
