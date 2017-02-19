import { AbstractControl } from '@angular/forms';

export function NoXuanValidator(control: AbstractControl) {
  if (control.value === 'Xuan') {
    return { NoXuan: true };
  }
  return null;
}
