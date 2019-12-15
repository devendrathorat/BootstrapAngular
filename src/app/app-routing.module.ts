import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouteryoutubeComponent } from './routeryoutube/routeryoutube.component';
import { ComponentnotfoundComponent } from './componentnotfound/componentnotfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import {DeafultpageComponent  } from './deafultpage/deafultpage.component';
import { FlightdtlsComponent } from './flightdtls/flightdtls.component';
import { BusdtlsComponent } from './busdtls/busdtls.component';
import { TraindtlsComponent } from './traindtls/traindtls.component';
import { HoteldtlsComponent } from './hoteldtls/hoteldtls.component';

const routes: Routes = [
  //this code put in 1st element
  // {

  //   //THIS IS default component i.e home page 
  //       path: '', component: DeafultpageComponent
  // },
  {
    path: "header", component: HeaderComponent
  },
  {

    path: "home", component: HomeComponent
  },
  {
    path: "route", component: RouteryoutubeComponent
  }, { 
    path: "aboutus", component: AboutusComponent 
  }, 



  { 
    path: "flightDtls", component: FlightdtlsComponent 
  }, 
  { 
    path: "trainDtls", component: TraindtlsComponent
  }, 
  { 
    path: "busDtls", component: BusdtlsComponent 
  }, 
  { 
    path: "hotelDtls", component: HoteldtlsComponent 
  }, 


  { path: "contactus", component: ContactusComponent },
  // {

  //   //THIS IS WILD CARD ROUTING IF COMPONENT NOT FOUND OR INCCORECT URL THEN USE THIS MEANS REDIRECT PAGE NOT FOUND PAGE
  //   path: "**", component: ComponentnotfoundComponent
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


