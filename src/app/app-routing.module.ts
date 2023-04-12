import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './inmobly/components/home/home.component';
import { DetailsComponent } from './inmobly/components/details/details.component';
import { FavScreenComponent } from './inmobly/components/fav-screen/fav-screen.component';
import { OfflineComponent } from './inmobly/components/offline/offline.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'fav', component: FavScreenComponent },
  { path: 'offline', component: OfflineComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
