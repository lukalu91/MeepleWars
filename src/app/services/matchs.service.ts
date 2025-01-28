import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from '../components/played-matches/played-matches.component';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchsService {

  private jsonMatchs = environment.jsonMatchs;

  constructor(private http: HttpClient) { }

  getMatchs(): Observable<Match[]> {
    return this.http.get<Match[]>(this.jsonMatchs);
  }}
