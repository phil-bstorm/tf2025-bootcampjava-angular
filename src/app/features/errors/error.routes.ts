import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: "404",
    loadComponent: () => import("./not-found/not-found.component").then(c => c.NotFoundComponent)
  },
  {
    path: "server-error",
    loadComponent: () => import("./server-error/server-error.component").then(c => c.ServerErrorComponent)
  }
];
