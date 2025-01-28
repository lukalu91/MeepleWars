import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../components/game-table/game-table.component';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private jsonGames = environment.jsonGames;

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.jsonGames);
  }

}
