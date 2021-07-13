import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './feature/homepage/homepage.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { MagazineComponent } from './feature/magazine/magazine.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { CardComponent } from './shared/card/card.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';
import { SearchDetailsComponent } from './feature/search-details/search-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchBarComponent,
    MagazineComponent,
    NavbarComponent,
    CardComponent,
    SearchDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "",
      "animateTitle": false,
      "animationDuration": 1000,
      "showSubtitle": false,
      "showBackground": false,
      "clockwise": false,
      "lazy": false}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
