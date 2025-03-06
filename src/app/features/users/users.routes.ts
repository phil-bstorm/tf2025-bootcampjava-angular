import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./container/users.component").then(c => c.UsersComponent),
    children: [
      {
        path: "list",
        loadComponent: () => import('./components/list/list.component').then(c => c.ListComponent),
      },
      {
        path: "details",
        loadComponent: () => import("./components/details/details.component").then(c => c.DetailsComponent)
      }
    ]
  }
];
