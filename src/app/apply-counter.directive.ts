import { Renderer, HostListener, HostBinding, Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[data-foo=bar][apply-counter]'
})
export class ApplyCounterDirective {

  // 等同於 tempalte 寫 [class.bg-success]="true"
  @HostBinding('class.bg-success')
  @Input()
  bgClass = false;

  // Host 為使用這個 Directive 的元件
  // 等同於 tempalte 寫 (click)="myClick($event)"
  @HostListener('click', ['$event'])
  myClick($event) {
    this.bgClass = !this.bgClass;
  }

  constructor(private el: ElementRef, private renderer: Renderer) {
    // setTimeout(() => {
    //   this.bgClass = true;
    // }, 5000);
  }

  ngOnInit() {
    console.log(this.el.nativeElement);
    // (this.el.nativeElement as HTMLDivElement).innerHTML = 'Hello World';
    this.renderer.setElementClass(this.el.nativeElement, 'bg-danger', true);
  }
}
