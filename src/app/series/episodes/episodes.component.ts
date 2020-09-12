import { Component, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';

import { Episode, Episodes } from './episodes.model';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit, OnDestroy {
  suscription: Subscription;
  seasonNumber: number;
  episodes: Episodes;
  @Input() showId: number;
  isShown: boolean = false;
  episodeSelected: Episode;

  constructor(private seriesService: SeriesService, private render:Renderer2) { }

  ngOnInit(): void {
    if(!this.seasonNumber){
      this.seasonNumber = 1;
      this.getSeasonEpisodes();
    }
    this.suscription = this.seriesService.episodeChanged$.subscribe(season =>{ 
      this.seasonNumber = season;
      this.getSeasonEpisodes();
    });
  }

  getSeasonEpisodes(){
    this.seriesService.getSeasonEpisodes( this.showId,this.seasonNumber).subscribe(episodes =>{
      this.episodes = episodes;
      console.log(this.episodes);
    });
  }

  showDetails(episodeSelected: Episode){
    this.episodeSelected = episodeSelected;
    this.isShown = !this.isShown;
    console.log(this.episodeSelected);    
  }

  ngOnDestroy(){
    this.suscription.unsubscribe();
  }

}
