import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  search(input) {
    const query = input.query;

    this.router.navigate(['/movies/search'], { queryParams: { query } });
  }
}
