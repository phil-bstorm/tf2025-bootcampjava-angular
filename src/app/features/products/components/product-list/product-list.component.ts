import {CurrencyPipe, SlicePipe} from '@angular/common';
import {Component, computed, inject, signal} from '@angular/core';
import {IPagination, MPaginationComponent} from '../../../../shared/materialize/m-pagination/m-pagination.component';
import {ProductCreateComponent} from '../product-create/product-create.component';
import {ProductService} from '../../services/product.service';


@Component({
  selector: 'product-list',
  imports: [CurrencyPipe, SlicePipe, MPaginationComponent, ProductCreateComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  private $product= inject(ProductService);
  produits = this.$product.produits;

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
    this.$product.ajouterUnProduit($event);
  }
}
