import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
          { path: 'home', component: HomeComponent },
          { path: '', redirectTo: 'home', pathMatch: 'full' },
        ],
      }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
