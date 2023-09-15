import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { WebDevReferenceSheetComponent } from './pages/web-dev-reference-sheet/web-dev-reference-sheet.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'web-dev-reference', component: WebDevReferenceSheetComponent },
  {
    path: 'css-basics',
    loadChildren: () =>
      import('./features/css-basics/css-basics.module').then((m) => m.CssBasicsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
