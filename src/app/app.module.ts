import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DirectivesExComponent } from './directives-ex/directives-ex.component';
import { MydirectiveDirective } from './mydirective.directive';
import {FormsModule}  from '@angular/forms';
import { RouteryoutubeComponent } from './routeryoutube/routeryoutube.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import {RouterModule} from '@angular/router';
import { ComponentnotfoundComponent } from './componentnotfound/componentnotfound.component';
import { DeafultpageComponent } from './deafultpage/deafultpage.component';
import { FlightdtlsComponent } from './flightdtls/flightdtls.component';
import { TraindtlsComponent } from './traindtls/traindtls.component';
import { BusdtlsComponent } from './busdtls/busdtls.component';
import { HoteldtlsComponent } from './hoteldtls/hoteldtls.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DirectivesExComponent,
    MydirectiveDirective,
    RouteryoutubeComponent,
    AboutusComponent,
    ContactusComponent,
    ComponentnotfoundComponent,
    DeafultpageComponent,
    FlightdtlsComponent,
    TraindtlsComponent,
    BusdtlsComponent,
    HoteldtlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // THIS IS A CODE IS FOR ROUTING
   // RouterModule.forRoot([{path:"aboutus",component:AboutusComponent},{path:"contactus",component:ContactusComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
