import {Routes} from '@angular/router';
import {ProductComponent} from './container/product.component';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./container/product.component").then(c => c.ProductComponent),
    children: [
      {
        path: "",
        loadComponent: () => import("./components/home/home.component").then(c => c.HomeComponent)
      },
      {
        path: "list",
        loadComponent: () => import("./components/product-list/product-list.component").then(c => c.ProductListComponent)
      },
      {
        path: "**",
        redirectTo: "",
        pathMatch: "full"
      }
    ]
  }
];
