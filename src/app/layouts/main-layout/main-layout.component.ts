import { Component, WritableSignal, signal  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  imports: [CommonModule, RouterModule], // Importa il RouterModule per il router-outlet
})
export class MainLayoutComponent {
  isAsideOpen: WritableSignal<boolean> = signal(false);

  toggleAside() {
    this.isAsideOpen.set(!this.isAsideOpen());
  }
}