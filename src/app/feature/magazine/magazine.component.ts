import { Component, OnInit } from '@angular/core';
import { MagazineService } from 'src/app/core/service/magazine.service';
import { map, tap } from 'rxjs/operators';
import { Manga } from 'src/assets/model/magazine.model';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.sass']
})
export class MagazineComponent implements OnInit {

  magazine: Manga[] = [];

  constructor(private magazineService: MagazineService) { }

  ngOnInit(): void {
    this.magazineService.getMagazine('magazine', 1).pipe(
      map(res => res.manga),
      tap(x => this.magazine = x)
    ).subscribe()
  }

    

}

