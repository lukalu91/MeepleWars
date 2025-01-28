import { Component } from '@angular/core';
import { GameTableComponent } from '../../components/game-table/game-table.component';
import { UserTableComponent } from '../../components/user-table/user-table.component';
import { PlayedMatchesComponent } from '../../components/played-matches/played-matches.component';

@Component({
  selector: 'app-home',
  imports: [GameTableComponent, UserTableComponent, PlayedMatchesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
