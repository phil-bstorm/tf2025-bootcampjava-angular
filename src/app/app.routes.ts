import { Routes } from '@angular/router';
import { ProductListComponent } from './features/products/components/product-list/product-list.component';

export const routes: Routes = [
  // {
  //   path: "products",
  //   loadComponent: () => import("./features/products/components/product-list/product-list.component").then(c => c.ProductListComponent)
  // },
  {
    path: 'products',
    loadChildren: () => import("./features/products/product.routes").then(r => r.routes)
  },
  // {
  //   path: '',
  //   loadComponent: () => import("./components/home/home.component").then(c => c.HomeComponent)
  // },
  // {
  //   path: 'demo',
  //   loadComponent: () => import("./components/demo/demo.component").then(c => c.DemoComponent)
  // },
  // {
  //   path: 'exercice',
  //   loadComponent: () => import("./components/exercice/exercice.component").then(c => c.ExerciceComponent)
  // }
];
