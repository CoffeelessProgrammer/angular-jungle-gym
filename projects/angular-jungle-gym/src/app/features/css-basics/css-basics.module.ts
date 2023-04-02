import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CssBasicsRoutingModule } from './css-basics-routing.module';

import { CssBasicsComponent } from './css-basics.component';
import { NavigationBarComponent } from './pages/layout/navigation-bar/navigation-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { FontsComponent } from './pages/concepts/fonts/fonts.component';
import { SelectorsComponent } from './pages/concepts/selectors/selectors.component';
import { BoxModelComponent } from './pages/concepts/box-model/box-model.component';
import { FlexboxComponent } from './pages/concepts/flexbox/flexbox.component';



@NgModule({
  declarations: [
    CssBasicsComponent,
    NavigationBarComponent,
    HomeComponent,
    FontsComponent,
    SelectorsComponent,
    BoxModelComponent,
    FlexboxComponent
  ],
  imports: [
    SharedModule,
    CssBasicsRoutingModule
  ]
})
export class CssBasicsModule { }
