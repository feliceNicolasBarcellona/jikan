import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  end_point = 'https://api.jikan.moe/v3/search';
  end_pointAnime = 'https://api.jikan.moe/v3';

  constructor(private http: HttpClient) { }

  getAnime(query: string, anime_id: number, request: string){
    return this.http.get<any>(`${this.end_pointAnime}/${query}/${anime_id}/${request}`);
  }

  search(type: string, request: string){
    const params = new HttpParams({
      fromObject: {
        'q': request
      }
    })
    console.log("Params", params.toString());
    return this.http.get<any>(`${this.end_point}/${type}${params}`);
  }
}
