import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { AnimeService } from 'src/app/core/service/anime.service';
import { Episode } from 'src/assets/model/home.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  homeAnime: Episode[] = [];

  constructor(private animeService: AnimeService, private http: ActivatedRoute) { }

  ngOnInit(): void {
    this.animeService.getAnime('anime', 1, 'episodes').pipe(
      map(res => this.homeAnime = res.episodes)
    ).subscribe()
  }

}
