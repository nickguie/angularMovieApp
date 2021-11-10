import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  //movies = new Movie[];
  movies = new Array<Movie>();

  selMovie? : Movie;

  constructor() {
    const alien = new Movie('Alien', 4);
    this.movies.push(alien)

    const parasite = new Movie('Parasite', 5);
    this.movies.push(parasite);

    const soul = new Movie('Soul', 3);
    this.movies.push(soul)
  }

  ngOnInit(): void {
  }

  selectMovie(movie: Movie):void {
    this.selMovie = movie;
  }

  newMovie():void{
    this.selMovie= new Movie('',0);
    this.movies.push(this.selMovie);
  }

  removeMovie(pos:number){
    this.movies.splice(pos, 1);
  }

}
