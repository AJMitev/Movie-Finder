import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Movie from '../models/movie';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import MovieDetails from '../models/movieDetails';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '&api_key=0132feb2166c6a1be222b7140c1a36cb';
const API_KEY_ALT = '?api_key=0132feb2166c6a1be222b7140c1a36cb';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  popularMoviesEndpoint = 'discover/movie?sort_by=popularity.desc';
  theatersEndpoint =
    'discover/movie?primary_release_date.gte=2017-09-15&primary_release_date.lte=2018-10-22';
  populartKidsMoviesEndpoint =
    'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  bestDramaMoviesEndPoint =
    'discover/movie?with_genres=18&primary_release_year=2015';

  constructor(private http: HttpClient) {}

  getMovieById(id: string) {
    return this.http.get<MovieDetails>(BASE_URL + `movie/${id}` + API_KEY_ALT);
  }

  getPopular(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(BASE_URL + this.popularMoviesEndpoint + API_KEY)
      .pipe(map(data => data['results'].slice(0, 6)));
  }

  getTheaters(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(BASE_URL + this.theatersEndpoint + API_KEY)
      .pipe(map(data => data['results'].slice(0, 6)));
  }

  getPopularKidsMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(BASE_URL + this.populartKidsMoviesEndpoint + API_KEY)
      .pipe(map(data => data['results'].slice(0, 6)));
  }

  getBestDramaMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(BASE_URL + this.bestDramaMoviesEndPoint + API_KEY)
      .pipe(map(data => data['results'].slice(0, 6)));
  }

  searchMovie(query: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(
      BASE_URL + 'search/movie' + API_KEY_ALT + `&query=${query}`
    );
  }
}
