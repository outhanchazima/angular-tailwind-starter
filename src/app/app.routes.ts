import { Routes } from '@angular/router';

export const routes: Routes = [
  //TODO ... other routes
  {
    path: 'error',
    loadChildren: () => import('./error-pages/error-pages.routes').then(m => m.ERROR_PAGES_ROUTES)
  },
  { path: '**', redirectTo: '/error/404' }
];
