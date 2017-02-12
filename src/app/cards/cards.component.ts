import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  type: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // 路由執行當下的資料 (僅初始值)
    this.type = this.route.snapshot.params['type'] || this.route.snapshot.data['type'];
  }

}
