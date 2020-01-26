import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import MovieDetails from '../../models/movieDetails';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: MovieDetails;

  constructor(private route: ActivatedRoute) {
    this.movie = this.route.snapshot.data['singleMovie'];
  }

  ngOnInit() { }
}
