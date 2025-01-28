import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatchsService } from '../../services/matchs.service';

export interface Match {
  id: number;
  gioco: string;
  data: string;
  partecipanti: string;
  classifica: string;
}

const ELEMENT_DATA: Match[] = [
  {id: 1, gioco:"Hegemony", data:"", partecipanti:"", classifica:""},
];

@Component({
  selector: 'app-played-matches',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],  templateUrl: './played-matches.component.html',
  styleUrl: './played-matches.component.css'
})
export class PlayedMatchesComponent {
  displayedColumns = ['id', 'gioco', 'data', 'partecipanti', 'classifica'];
  dataSource = new MatTableDataSource<Match>();;

  constructor(private matchsService: MatchsService) { }

  ngOnInit() {
    this.matchsService.getMatchs().subscribe(data => {
      this.dataSource.data = data;
    });
  }}
