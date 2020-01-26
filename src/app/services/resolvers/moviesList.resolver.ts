import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { forkJoin } from 'rxjs';
import { MovieService } from '../movie.service';
import Movie from 'src/app/models/movie';

@Injectable()
export class MoviesListResolver implements Resolve<Movie[][]> {
  constructor(private movieService: MovieService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return forkJoin(
      this.movieService.getBestDramaMovies(),
      this.movieService.getPopular(),
      this.movieService.getPopularKidsMovies(),
      this.movieService.getTheaters()
    );
  }
}
