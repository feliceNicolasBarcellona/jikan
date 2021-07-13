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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchBarComponent,
    MagazineComponent,
    NavbarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
