import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './feature/homepage/homepage.component';
import { MagazineComponent } from './feature/magazine/magazine.component';
import { SearchDetailsComponent } from './feature/search-details/search-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'jikan', pathMatch: 'full' },
  { path: 'jikan', component: HomepageComponent },
  { path: 'jikan/:type', component: SearchDetailsComponent },
  { path: 'magazine', component: MagazineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
