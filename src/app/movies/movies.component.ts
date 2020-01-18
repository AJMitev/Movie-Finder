import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie.service";
import Movie from "../models/movie";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent implements OnInit {
  popularMovies: Movie[];
  inTheatreMovies: Movie[];

  constructor(private moviesService: MovieService) {}

  ngOnInit() {
    this.moviesService.getPopular().subscribe(data => {
      this.popularMovies = data["results"].slice(0, 6);
    });

    this.moviesService.getTheaters().subscribe(data => {
      this.inTheatreMovies = data["results"].slice(0, 6);
    });
  }
}
