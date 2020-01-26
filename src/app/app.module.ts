import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { MovieService } from './services/movie.service';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { FooterComponent } from './footer/footer.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SingleMovieResolver } from './services/resolvers/single-movie.resolver';
import { PopularMoviesResolver } from './services/resolvers/popularMovies.resolver';
import { TheaterMoviesResolver } from './services/resolvers/theaterMovies.resolver';
import { BestDramaMoviesResolver } from './services/resolvers/bestDramaMovies.resolver';
import { PopularKidsMoviesResolver } from './services/resolvers/popularKidsMovies.resolver';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    MoviesComponent,
    MovieComponent,
    FooterComponent,
    MovieDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    MovieService,
    SingleMovieResolver,
    BestDramaMoviesResolver,
    PopularKidsMoviesResolver,
    PopularMoviesResolver,
    TheaterMoviesResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
