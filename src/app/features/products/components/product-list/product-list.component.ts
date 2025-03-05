import {CurrencyPipe, SlicePipe} from '@angular/common';
import {Component, computed, inject, Signal, signal, WritableSignal} from '@angular/core';
import {IPagination, MPaginationComponent} from '../../../../shared/materialize/m-pagination/m-pagination.component';
import {ProductCreateComponent} from '../product-create/product-create.component';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product.model';


@Component({
  selector: 'product-list',
  imports: [CurrencyPipe, SlicePipe, MPaginationComponent, ProductCreateComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  private $product: ProductService = inject(ProductService);
  produits: Signal<Product[]> = this.$product.produits;

  startIndex = signal(0)
  endIndex = signal(5)

  handleChangePage($event: IPagination) {
    // const { startIndex, endIndex } = $event
    const startIndex = $event.startIndex
    const endIndex = $event.endIndex

    this.startIndex.set(startIndex)
    this.endIndex.set(endIndex)
  }

  handleCreate($event: any) {
   // vérification pour vérifier que les propriétés existes

    const p: Product = {
      description: $event.description,
      id: $event.id,
      prix: $event.prix,
      quantite_en_stock: $event.quantite_en_stock,
      titre: $event.titre
    };

    this.$product.ajouterUnProduit(p);
    // this.$product.ajouterUnProduit($event as Product); cast du type
  }
}
