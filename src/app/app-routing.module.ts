import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SerieDetailComponent } from './series/serie-detail/serie-detail.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  {path: '', redirectTo: '/series', pathMatch: 'full'},
  {path:'series', component: SeriesComponent},
  {path:'series/search', component: SeriesComponent},
  {path:'serie-detail/:id', component: SerieDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
