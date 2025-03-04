import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () => import("./components/product-list/product-list.component").then(c => c.ProductListComponent)
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
