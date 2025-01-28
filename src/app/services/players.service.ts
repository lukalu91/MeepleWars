import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../components/user-table/user-table.component'; 
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private jsonPlayers = environment.jsonPlayers;

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.jsonPlayers);
  }
}