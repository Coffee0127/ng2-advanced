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
    // 透過 Observable 監看 params 變化
    this.route.params.subscribe(params => {
      this.type = params['type'];
    });
    // 路由執行當下的資料 (僅初始值)
    // 避免因使用 data 覆蓋 Observable 帶回來的 type
    this.type = this.type || this.route.snapshot.data['type'];
  }

  goCards(type) {
    this.router.navigateByUrl('/cards/' + type);
  }
}