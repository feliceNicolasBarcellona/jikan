import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './feature/homepage/homepage.component';
import { MagazineComponent } from './feature/magazine/magazine.component';

const routes: Routes = [
  { path: '', redirectTo: 'jikan', pathMatch: 'full' },
  { path: 'jikan', component: HomepageComponent },
  { path: 'magazine', component: MagazineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
