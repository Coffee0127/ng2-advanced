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
      console.log('Matrix:', params['name']);
    });

    this.route.queryParams.subscribe(params => {
      console.log('QueryString:', params['name']);
    });
    // 路由執行當下的資料 (僅初始值)
    // 避免因使用 data 覆蓋 Observable 帶回來的 type
    this.type = this.type || this.route.snapshot.data['type'];
  }

  goCards(type) {
    // 絕對路徑寫法1
    // this.router.navigateByUrl('/cards/' + type);
    // 絕對路徑寫法2
    // this.router.navigate(['/cards/', type]);

    // 使用相對路徑
    // this.router.navigate([type], { relativeTo: this.route });
    // 然後就壞掉了XD，網址會變成 http://localhost:4200/cards/1000/1000，修正如下
    this.router.navigate(['..', type], { relativeTo: this.route });
  }

  goCards2(paramType, type) {
    switch (paramType) {
      case 'MX':
        this.router.navigate(['/cards', type, { name: 'Matrix by Code' }]);
        break;
      case 'QS':
        this.router.navigate(['/cards', type], {
          queryParams: { name: 'QueryString by Code' }
        });
        break;
    }
  }
}
