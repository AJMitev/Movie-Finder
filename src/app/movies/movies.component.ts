import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Movie from '../models/movie';

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

  constructor(private router: ActivatedRoute) {
    const moviesList = this.router.snapshot.data['moviesList'];

    this.popularMovies = moviesList[1];
    this.inTheatreMovies = moviesList[3];
    this.bestDramaMovies = moviesList[0];
    this.popularKidsMovies = moviesList[2];

    // this.popularMovies = this.router.snapshot.data['popularMovies'];
    // this.inTheatreMovies = this.router.snapshot.data['theaterMovies'];
    // this.bestDramaMovies = this.router.snapshot.data['bestDramaMovies'];
    // this.popularKidsMovies = this.router.snapshot.data['popularKidsMovies'];
  }

  ngOnInit() {}
}
