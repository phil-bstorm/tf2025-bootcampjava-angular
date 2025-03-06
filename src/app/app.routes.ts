import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';

export const routes: Routes = [
  {
    path: "",
    // loadComponent: () => import("./components/home/home.component").then(c => c.HomeComponent)
    component: HomeComponent
  },
  {
    path: 'products',
    loadChildren: () => import("./features/products/product.routes").then(r => r.routes)
  },
  {
    path: 'users',
    loadChildren: () => import("./features/users/users.routes").then(r => r.routes)
  },
  {
    path: 'errors',
    loadChildren: () => import("./features/errors/error.routes").then(r => r.routes)
  },
  {
    path: "**",
    redirectTo: "/errors/404",
    pathMatch: "full"
  }
];
