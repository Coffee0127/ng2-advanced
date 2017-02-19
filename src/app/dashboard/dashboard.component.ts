import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { initDashboard } from './init';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,
    private zone: NgZone) { }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      initDashboard();
    });
  }

  debug() {
    console.log('Dashboard debug()');
  }

  goCards(type) {
    this.router.navigateByUrl('/cards/' + type);
  }
}
