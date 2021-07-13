import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MagazineInterface } from 'src/assets/model/magazine.model';

@Injectable({
  providedIn: 'root'
})
export class MagazineService {

  end_point = 'https://api.jikan.moe/v3';

  constructor(private http: HttpClient) { }

  getMagazine(query: string, magazine_id: number, page: number){
    return this.http.get<MagazineInterface>(`${this.end_point}/${query}/${magazine_id}/${page}`);
  }


}
