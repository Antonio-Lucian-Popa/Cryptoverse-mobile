import { WelcomeSectionComponent } from './shared/welcome-section/welcome-section.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared/shared.module';
import { AuthInterceptorProvider } from './auth/auth.interceptor';

@NgModule({
  declarations: [AppComponent, WelcomeSectionComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, NgbModule, HttpClientModule, SharedModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AuthInterceptorProvider,],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
