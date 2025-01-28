import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

export interface Giocatore {
  id: number;
  nome: string;
  cognome: string;
  motto: string;
  avatar: string;
}

const ELEMENT_DATA: Giocatore[] = [
  {id: 1, nome:"Luca", cognome:"Briganti", motto:"Non è solo un gioco, è una missione", avatar:"https://th.bing.com/th/id/OIP.hE8r66bIfO18VNtmJw7mIgAAAA?rs=1&pid=ImgDetMain"},
  {id: 2, nome:"Fenderico", cognome:"Wunz ", motto:"Dadi, strategia e gloria eterna!", avatar:"https://th.bing.com/th/id/OIP.hE8r66bIfO18VNtmJw7mIgAAAA?rs=1&pid=ImgDetMain"},
  {id: 3, nome:"Andrea ", cognome:"Martini", motto:"La vittoria è dolce, ma la rivincita lo è di più.", avatar:"https://th.bing.com/th/id/OIP.hE8r66bIfO18VNtmJw7mIgAAAA?rs=1&pid=ImgDetMain"},
  {id: 4, nome:"Francesco ", cognome:"Begani", motto:"Un re del tavolo non si ferma davanti a un bad beat.", avatar:"https://th.bing.com/th/id/OIP.hE8r66bIfO18VNtmJw7mIgAAAA?rs=1&pid=ImgDetMain"},
];

@Component({
  selector: 'app-user-table',
  imports: [
    CommonModule,
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
