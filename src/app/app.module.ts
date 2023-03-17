import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './pages/home/home.component';
import { NgxOrgChartModule } from 'ngx-org-chart';
// import { NgxOrgChartModule } from 'ngx-org-chart/lib/ngx-org-chart/ngx-org-chart.module';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxOrgChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
