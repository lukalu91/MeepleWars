import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GamesService } from '../../services/games.service';


export interface Game {
  id: number;
  titolo: string;
  tipologia: string;
}

const ELEMENT_DATA: Game[] = [
  {id: 1, titolo:"Hegemony", tipologia:"Gestionale"},
];

@Component({
  selector: 'app-game-table',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './game-table.component.html',
  styleUrl: './game-table.component.css'
})
export class GameTableComponent {
  displayedColumns = ['id', 'titolo', 'tipologia'];
  dataSource = new MatTableDataSource<Game>();;

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.gamesService.getGames().subscribe(data => {
      this.dataSource.data = data;
    });
  }
}
