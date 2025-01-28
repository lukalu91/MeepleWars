import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

export interface Giocatore {
  id: number;
  nome: string;
  cognome: string;
  motto: string;
  avatar: string;
}

const ELEMENT_DATA: Giocatore[] = [
  {id: 1, nome:"Luca", cognome:"Briganti", motto:"Non è solo un gioco, è una missione", avatar:""},
  {id: 2, nome:"Fenderico", cognome:"Wunz ", motto:"Dadi, strategia e gloria eterna!", avatar:""},
  {id: 3, nome:"Andrea ", cognome:"Martini", motto:"La vittoria è dolce, ma la rivincita lo è di più.", avatar:""},
  {id: 4, nome:"Francesco ", cognome:"Begani", motto:"Un re del tavolo non si ferma davanti a un bad beat.", avatar:""},
];

@Component({
  selector: 'app-user-table',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  displayedColumns = ['nome', 'cognome', 'motto'];
  dataSource = ELEMENT_DATA;
}
