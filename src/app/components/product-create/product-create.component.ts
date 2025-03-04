import {Component, output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ssin} from '../../utils/custom.validators';
import {JsonPipe} from '@angular/common';
import {fProductCreate} from '../../forms/product.form';

@Component({
  selector: 'product-create',
  imports: [
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.scss'
})
export class ProductCreateComponent {
  onCreateEvent = output<any>({alias: 'onCreate'})

  form = fProductCreate()

  handleCreation() {
    const value = this.form.value

    if (this.form.valid) {
      this.onCreateEvent.emit(value)
    }
  }
}
