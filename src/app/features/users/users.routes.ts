import {Routes} from '@angular/router';
import {connectedGuard} from './guards/connected.guard';

export const routes: Routes = [
  {
    path: "login",
    loadComponent: () => import("./components/login/login.component").then(c => c.LoginComponent)
  },
  {
    path: "",
    loadComponent: () => import("./container/users.component").then(c => c.UsersComponent),
    canActivate: [connectedGuard],
    children: [
      {
        path: "list",
        loadComponent: () => import('./components/list/list.component').then(c => c.ListComponent),
      },
      {
        path: "details",
        loadComponent: () => import("./components/details/details.component").then(c => c.DetailsComponent)
      },
      {
        path: "**",
        redirectTo: "list"
      }
    ]
  },
];
