import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './inmobly/components/home/home.component';
import { DetailsComponent } from './inmobly/components/details/details.component';
import { StatistecComponent } from './inmobly/components/statistec/statistec.component';
import { FavScreenComponent } from './inmobly/components/fav-screen/fav-screen.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent },
  // { path: 'statistec/:id', component: StatistecComponent },
  { path: 'fav', component: FavScreenComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
