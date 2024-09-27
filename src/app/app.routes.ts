import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'errors',
    loadChildren: () => import('./features/error-pages/error-pages.routes').then((m) => m.ERROR_PAGES_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'errors/404',
  },
];
