import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WebDevReferenceSheetComponent } from './pages/web-dev-reference-sheet/web-dev-reference-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebDevReferenceSheetComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
