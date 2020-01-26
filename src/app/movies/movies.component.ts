import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Movie from '../models/movie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularMovies: Movie[];
  inTheatreMovies: Movie[];
  popularKidsMovies: Movie[];
  bestDramaMovies: Movie[];

  popularMoviesSub: Subscription;
  theaterMoviesSub: Subscription;
  popularKidsMoviesSub: Subscription;
  bestDramaMoviesSub: Subscription;

  constructor(private router: ActivatedRoute) {
    this.popularMovies = this.router.snapshot.data['popularMovies'];
    this.inTheatreMovies = this.router.snapshot.data['theaterMovies'];
    this.bestDramaMovies = this.router.snapshot.data['bestDramaMovies'];
    this.popularKidsMovies = this.router.snapshot.data['popularKidsMovies'];
  }

  ngOnInit() {}
}
