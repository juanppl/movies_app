import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Serie } from './serie.model';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit, OnDestroy {
  series: Serie[];
  suscription: Subscription;
  results: string = null;
  error: string = null;

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getPopularSeries().subscribe(series => {
      this.series = series['results'];
    });
    this.suscription = this.seriesService.searchedSerie$.subscribe(searchedSeries=>{
      if(searchedSeries.length > 1){
        this.results = null;
        this.series = searchedSeries;
      }else{
        this.results = 'No se han encontrado resultados';
      }
    }, error => {
      this.error = 'Ha ocurrido un error, intentelo de nuevo';
    });
  }

  getPopularSeriesInfinitly(){
    this.seriesService.getPopularSeriesInfinitly().subscribe(series => {
      this.series.push(...series['results']);
    });
  }

  ngOnDestroy(){
    this.suscription.unsubscribe();
  }

}
