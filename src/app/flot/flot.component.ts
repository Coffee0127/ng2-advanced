import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit {

  username: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.username = this.route.parent.snapshot.params['username'];
  }

}
