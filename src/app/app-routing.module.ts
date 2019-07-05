import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '**', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomePageComponent},
  { path: 'search', component: SearchResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
