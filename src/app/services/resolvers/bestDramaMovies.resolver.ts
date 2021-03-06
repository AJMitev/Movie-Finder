import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import Movie from 'src/app/models/movie';
import { MovieService } from '../movie.service';

@Injectable()
export class BestDramaMoviesResolver implements Resolve<Movie[]> {
  constructor(private movieService: MovieService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.movieService.getBestDramaMovies();
  }
}
