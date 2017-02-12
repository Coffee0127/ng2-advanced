import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit, OnDestroy {

  username: string;

  parentParams$: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.parentParams$ = this.route.parent.params.subscribe(params => {
      this.username = params['username'];
      console.log(this.username);
    });
  }

  ngOnDestroy() {
    // 若未取消訂閱，因 route.parent 會一直存在，故會造成重複訂閱
    this.parentParams$.unsubscribe();
  }
}
