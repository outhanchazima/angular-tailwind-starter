import { Routes } from '@angular/router';
import { ErrorPageComponent } from './error-pages.component';
import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const ERROR_PAGES_ROUTES: Routes = [
  {
    path: '',
    component: ErrorPageComponent,
    children: [
      { path: '404', component: NotFoundComponent },
      { path: '500', component: InternalServerErrorComponent },
      { path: '**', redirectTo: '404' },
    ],
  },
];
