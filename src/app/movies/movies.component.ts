import { Component, OnInit, OnDestroy } from '@angular/core';
import Movie from '../models/movie';
import { MovieService } from '../services/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {
  popularMovies: Movie[];
  inTheatreMovies: Movie[];
  popularKidsMovies: Movie[];
  bestDramaMovies: Movie[];

  popularMoviesSub: Subscription;
  theaterMoviesSub: Subscription;
  popularKidsMoviesSub: Subscription;
  bestDramaMoviesSub: Subscription;

  constructor(private moviesService: MovieService) {}

  ngOnInit() {
    this.popularMoviesSub = this.moviesService.getPopular().subscribe(data => {
      this.popularMovies = data;
    });

    this.theaterMoviesSub = this.moviesService.getTheaters().subscribe(data => {
      this.inTheatreMovies = data;
    });

    this.popularKidsMoviesSub = this.moviesService
      .getPopularKidsMovies()
      .subscribe(data => {
        this.popularKidsMovies = data;
      });

    this.bestDramaMoviesSub = this.moviesService
      .getBestDramaMovies()
      .subscribe(data => {
        this.bestDramaMovies = data;
      });
  }

  ngOnDestroy(): void {
    this.popularKidsMoviesSub.unsubscribe();
    this.popularMoviesSub.unsubscribe();
    this.theaterMoviesSub.unsubscribe();
    this.bestDramaMoviesSub.unsubscribe();
  }
}
