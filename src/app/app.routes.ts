import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.Home)
  },
  {
    path: 'counter',
    loadComponent: () => import('./counter/counter').then((m) => m.Counter)
  },
  {
    path: 'todo',
    loadComponent: () => import('./todo/todo').then((m) => m.Todo)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard').then((m) => m.Dashboard)
  }
];