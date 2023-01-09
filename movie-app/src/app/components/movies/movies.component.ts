import { Component } from '@angular/core';
import { Model } from 'src/app/model/model';
import { Movies } from 'src/app/model/movies.datasource';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  title = "movies";
  movies = Movies;
  selectedMovie:Model;

  onSelected(movie:Model){
    this.selectedMovie = movie;
  }

}
