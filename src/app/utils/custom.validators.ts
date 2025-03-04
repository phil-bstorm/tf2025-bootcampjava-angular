import {ValidatorFn} from '@angular/forms';

export const ssin = function(): ValidatorFn {
  return (control) => {
    const value = control.value
    const pattern = /\d{2}\.\d{2}\.\d{2}-\d{3}\.(\d{2})/ig

    if (pattern.test(value)) {
      return null
    }
    return { "ssin": "Field not match the pattern"}
  }
}
