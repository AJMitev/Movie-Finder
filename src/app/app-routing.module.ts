import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { SingleMovieResolver } from './services/resolvers/single-movie.resolver';
import { PopularMoviesResolver } from './services/resolvers/popularMovies.resolver';
import { TheaterMoviesResolver } from './services/resolvers/theaterMovies.resolver';
import { BestDramaMoviesResolver } from './services/resolvers/bestDramaMovies.resolver';
import { PopularKidsMoviesResolver } from './services/resolvers/popularKidsMovies.resolver';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MoviesListResolver } from './services/resolvers/moviesList.resolver';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movies'
  },
  {
    path: 'movies',
    component: MoviesComponent,
    resolve: {
      bestDramaMovies: BestDramaMoviesResolver,
      popularKidsMovies: PopularKidsMoviesResolver,
      popularMovies: PopularMoviesResolver,
      theaterMovies: TheaterMoviesResolver,
      moviesList: MoviesListResolver
    }
  },
  {
    path: 'movies/search',
    component: MovieSearchComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
    resolve: {
      singleMovie: SingleMovieResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
