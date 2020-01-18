import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Movie from "../models/movie";
import { Observable } from "rxjs";

const BASE_URL: string = "https://api.themoviedb.org/3/";
const API_KEY: string = "&api_key=0132feb2166c6a1be222b7140c1a36cb";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  popularMoviesEndpoint: string = "discover/movie?sort_by=popularity.desc";
  theatersEndpoint: string =
    "discover/movie?primary_release_date.gte=2019-09-15&primary_release_date.lte=2019-10-22";

  constructor(private http: HttpClient) {}

  getPopular(): Observable<Movie[]> {
    return this.http.get<Movie[]>(
      BASE_URL + this.popularMoviesEndpoint + API_KEY
    );
  }

  getTheaters(): Observable<Movie[]> {
    return this.http.get<Movie[]>(BASE_URL + this.theatersEndpoint + API_KEY);
  }
}
