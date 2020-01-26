import { Component, OnInit } from '@angular/core';
import Movie from '../models/movie';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-move-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  searchedMovies: Movie[];
  query: string;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.query = this.route.snapshot.queryParams['query'];

    this.movieService.searchMovie(this.query).subscribe(data => {
      this.searchedMovies = data['results'];
    });
  }
}
