import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheatsheetsComponent } from './cheatsheets.component';
import { HtmlCheatsheetComponent } from './pages/html-cheatsheet/html-cheatsheet.component';
import { CssCheatsheetComponent } from './pages/css-cheatsheet/css-cheatsheet.component';
import { JsCheatsheetComponent } from './pages/js-cheatsheet/js-cheatsheet.component';
import { AngularCheatsheetComponent } from './pages/angular-cheatsheet/angular-cheatsheet.component';

const routes: Routes = [
  { path: '', component: CheatsheetsComponent,
    children: [
      { path: '', redirectTo: 'css', pathMatch: 'full' },
      { path: 'html', component: HtmlCheatsheetComponent },
      { path: 'css', component: CssCheatsheetComponent },
      { path: 'js', component: JsCheatsheetComponent },
      { path: 'angular', component: AngularCheatsheetComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheatsheetsRoutingModule { }
