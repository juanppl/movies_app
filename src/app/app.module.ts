import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';
import { SerieComponent } from './series/serie/serie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SerieDetailComponent } from './series/serie-detail/serie-detail.component';
import { EpisodesComponent } from './series/episodes/episodes.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    SerieComponent,
    NavbarComponent,
    SerieDetailComponent,
    EpisodesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
