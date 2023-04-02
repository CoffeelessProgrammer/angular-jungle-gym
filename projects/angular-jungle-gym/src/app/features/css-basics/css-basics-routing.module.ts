import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CssBasicsComponent } from './css-basics.component';
import { HomeComponent } from './pages/home/home.component';
import { FontsComponent } from './pages/concepts/fonts/fonts.component';
import { SelectorsComponent } from './pages/concepts/selectors/selectors.component';
import { BoxModelComponent } from './pages/concepts/box-model/box-model.component';
import { FlexboxComponent } from './pages/concepts/flexbox/flexbox.component';

const routes: Routes = [
  { path: '', component: CssBasicsComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'fonts', component: FontsComponent },
      { path: 'selectors', component: SelectorsComponent },
      { path: 'box-model', component: BoxModelComponent },
      { path: 'flexbox', component: FlexboxComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssBasicsRoutingModule { }