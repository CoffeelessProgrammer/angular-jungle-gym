import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { CheatsheetsRoutingModule } from './cheatsheets-routing.module';

import { CheatsheetsComponent } from './cheatsheets.component';
import { HtmlCheatsheetComponent } from './pages/html-cheatsheet/html-cheatsheet.component';
import { CssCheatsheetComponent } from './pages/css-cheatsheet/css-cheatsheet.component';
import { JsCheatsheetComponent } from './pages/js-cheatsheet/js-cheatsheet.component';
import { AngularCheatsheetComponent } from './pages/angular-cheatsheet/angular-cheatsheet.component';


@NgModule({
  declarations: [
    CheatsheetsComponent,
    HtmlCheatsheetComponent,
    CssCheatsheetComponent,
    JsCheatsheetComponent,
    AngularCheatsheetComponent
  ],
  imports: [
    SharedModule,
    CheatsheetsRoutingModule
  ]
})
export class CheatsheetsModule { }
