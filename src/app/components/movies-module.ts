import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieService } from '../services/movie.service';
import { SingleMovieResolver } from '../services/resolvers/single-movie.resolver';
import { BestDramaMoviesResolver } from '../services/resolvers/bestDramaMovies.resolver';
import { PopularKidsMoviesResolver } from '../services/resolvers/popularKidsMovies.resolver';
import { PopularMoviesResolver } from '../services/resolvers/popularMovies.resolver';
import { TheaterMoviesResolver } from '../services/resolvers/theaterMovies.resolver';
import { MoviesListResolver } from '../services/resolvers/moviesList.resolver';

@NgModule({
    declarations: [
        MovieComponent,
        MoviesComponent,
        MovieSearchComponent,
        MovieDetailsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    exports: [MoviesComponent],

    providers: [
        MovieService,
        SingleMovieResolver,
        BestDramaMoviesResolver,
        PopularKidsMoviesResolver,
        PopularMoviesResolver,
        TheaterMoviesResolver,
        MoviesListResolver
    ],
})

export class AppMovieModule { }