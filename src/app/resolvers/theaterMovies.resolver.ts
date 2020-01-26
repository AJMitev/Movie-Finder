import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import Movie from '../models/movie';
import { MovieService } from '../services/movie.service';

@Injectable({
  providedIn: 'root'
})
export class TheaterMoviesResolver implements Resolve<Movie[]> {
  constructor(private movieService: MovieService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.movieService.getTheaters();
  }
}
