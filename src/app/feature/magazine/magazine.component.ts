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

  magazineSec1: Manga[] = [];
  magazineSec2: Manga[] = [];
  magazineSec3: Manga[] = [];

  constructor(private magazineService: MagazineService) { }

  ngOnInit(): void {

    this.magazineService.getMagazine('magazine', 1, 1).pipe(
      map(res => this.magazineSec1 = res.manga)
    ).subscribe()

    this.magazineService.getMagazine('magazine', 2, 1).pipe(
      map(res => this.magazineSec2 = res.manga)
    ).subscribe()

    this.magazineService.getMagazine('magazine', 3, 1).pipe(
      map(res => this.magazineSec3 = res.manga)
    ).subscribe()
    
  }

    

}

