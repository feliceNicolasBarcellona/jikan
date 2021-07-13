import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { AnimeService } from 'src/app/core/service/anime.service';
import { Result } from 'src/assets/model/anime.model';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.sass']
})
export class SearchDetailsComponent implements OnInit {

  searchDetails: Result[] = [];

  constructor(
    private animeService: AnimeService, 
    private http: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.http.url.pipe(
      switchMap(url => this.animeService.search('anime?', url[1].path)),
      map(x => this.searchDetails = x.results)
    ).subscribe()
    
  }

}
