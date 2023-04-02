
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  exports: [
    BrowserModule
  ],
  declarations: [],
  imports: [],
  providers:[
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() core:CoreModule ){
    if (core) {
      throw new Error("Import core module ONLY in the root (app) module")
    }
  }
}