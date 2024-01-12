import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './pages/component/profile/profile.component';
import { ProfilemenuComponent } from './pages/component/profilemenu/profilemenu.component';
import { CoupanComponent } from './pages/components/coupan/coupan.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, ProfileComponent, ProfilemenuComponent, CoupanComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
