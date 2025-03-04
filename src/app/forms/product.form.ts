import {FormControl, FormGroup, Validators} from '@angular/forms';

export const fProductCreate = (opts?: Partial<{ titre: string, description: string, prix: number, quantite_en_stock: number}>) => new FormGroup({
  titre: new FormControl(opts?.titre, { validators: [Validators.required] }),
  description: new FormControl(opts?.description),
  prix: new FormControl(opts?.prix, {validators: [Validators.required, Validators.min(0.01)]}),
  quantite_en_stock: new FormControl(opts?.quantite_en_stock, { validators: [Validators.required, Validators.min(0.01)]})
})
