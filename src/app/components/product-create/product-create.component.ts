import {Component, output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ssin} from '../../utils/custom.validators';
import {JsonPipe} from '@angular/common';

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

  form = new FormGroup({
    titre: new FormControl<null | string>(null, { validators: [Validators.required] }),
    description: new FormControl(),
    prix: new FormControl(0.00, {validators: [Validators.required, Validators.min(0.01)]}),
    quantite_en_stock: new FormControl(0.00, { validators: [Validators.required, Validators.min(0.01)]})
  })

  handleCreation() {
    const value = this.form.value

    if (this.form.valid) {
      this.onCreateEvent.emit(value)
    }
  }
}
