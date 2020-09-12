import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SeriesService } from '../series.service';
import { SerieDetail } from './serie-detail.model';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {
  private id: number;
  serieDetail: SerieDetail;

  constructor(private activatedRoute: ActivatedRoute, private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.getSerieById();
      }
    );
  }

  changedSeason(season: number){
    this.seriesService.episodeChanged$.next(season);
  }

  getSerieById(){
    this.seriesService.getSerieById(this.id).subscribe(serieDetail => {
      this.serieDetail = serieDetail;
      console.log(this.serieDetail);
    });
  }

}
