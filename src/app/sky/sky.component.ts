import { Input, Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css']
})
export class SkyComponent implements OnInit {

  @Input()
  name: string = 'Sky';

  @ViewChild('input') // 透過範本變數 selector 取得 NgModel
  input: NgModel;

  constructor() { }

  ngOnInit() {
  }

}
