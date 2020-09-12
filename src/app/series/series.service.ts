import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Serie } from './serie.model';
import { SerieDetail } from './serie-detail/serie-detail.model';
import { Subject } from 'rxjs';
import { Episodes } from './episodes/episodes.model';

@Injectable({ providedIn: 'root' })
export class SeriesService {
    private url: string = 'https://api.themoviedb.org';
    private apiKey: string = 'b2907782d07859a652052d3bae537475';
    episodeChanged$ = new Subject<number>();
    searchedSerie$ = new Subject<Serie[]>();
    isSearching$ = new Subject<boolean>();
    page: number = 1;
    series: Serie[];

    constructor(private http: HttpClient) { }

    getPopularSeries() {
        this.page = 1;
        this.isSearching$.next(false);
        return this.http.get<Serie[]>(this.url + '/3/tv/popular', {
            params: new HttpParams().set('api_key', this.apiKey),
        });
    }

    getPopularSeriesInfinitly() {
        this.page++;
        this.isSearching$.next(false);
        return this.http.get<Serie[]>(this.url + '/3/tv/popular', {
            params: new HttpParams().set('api_key', this.apiKey).set('page', this.page.toString()),
        });
    }

    getSerieById(id: number) {
        return this.http.get<SerieDetail>(this.url + '/3/tv/' + id, {
            params: {
                'api_key': this.apiKey
            }
        });
    }

    getSeasonEpisodes(showId: number, season: number) {
        return this.http.get<Episodes>(this.url + '/3/tv/' + showId + '/season/' + season, {
            params: {
                'api_key': this.apiKey
            }
        });
    }

    getSearchedSeries(query: string) {
        this.http.get<Episodes>(this.url + '/3/search/tv', {
            params: new HttpParams().set('api_key', this.apiKey).set('query', query).set('include_adult', 'false'),
        }).subscribe(searchedSeries => {
            this.searchedSerie$.next(searchedSeries['results']);
            this.isSearching$.next(true);
        });
    }

}