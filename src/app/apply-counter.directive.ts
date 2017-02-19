import { HostListener, HostBinding, Directive } from '@angular/core';

@Directive({
  selector: '[data-foo=bar][apply-counter]'
})
export class ApplyCounterDirective {

  // 等同於 tempalte 寫 [class.bg-success]="true"
  @HostBinding('class.bg-success')
  bgClass = false;

  // Host 為使用這個 Directive 的元件
  // 等同於 tempalte 寫 (click)="myClick($event)"
  @HostListener('click', ['$event'])
  myClick($event) {
    this.bgClass = !this.bgClass;
  }

  constructor() {
    setTimeout(() => {
      this.bgClass = true;
    }, 5000);
  }

}
