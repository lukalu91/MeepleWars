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
  isLoggedIn: WritableSignal<boolean> = signal(false);
  isUserMenuOpen: WritableSignal<boolean> = signal(false);

  toggleAside() {
    this.isAsideOpen.set(!this.isAsideOpen());
  }

  login() {
    this.isLoggedIn.set(true);
  }

  logout() {
    this.isLoggedIn.set(false);
    this.isUserMenuOpen.set(false);
  }

  toggleUserMenu() {
    this.isUserMenuOpen.set(!this.isUserMenuOpen());
  }

}