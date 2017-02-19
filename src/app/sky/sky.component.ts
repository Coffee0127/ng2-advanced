import { ContentChild, Input, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css']
})
export class SkyComponent implements OnInit {

  @Input()
  name: string = 'Sky';

  @Input()
  titleimg: string;

  @ViewChild('input') // 透過範本變數 selector 取得 NgModel
  input: NgModel;

  @ContentChild('btn')
  btn: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  getCounter() {
    if (this.btn) {
      console.log(this.btn.nativeElement.innerText);
    }
  }
}
