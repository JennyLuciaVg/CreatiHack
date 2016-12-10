import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';
import {TestService} from '../../providers/test-service';
import { MovieInfo } from '../movie-info/movie-info';

@Component({
  selector: 'page-page1',
  templateUrl: 'main.html',
  providers: [TestService]
})
export class Main {
  public name;
  public posts: any;
  movies: Array<any>;
  constructor(public http: Http, private navController: NavController, private TestService: TestService) {
    this.name = "Andrew";
    this.http.get('https://creatihack.herokuapp.com/api/events').map(res => res.json())
      .subscribe(
        data => {
          this.posts = data;
          console.log(data)
        },
        err => {
          console.log("Oops!");
        }
      );
  }

  searchMovieDB(event, key) {
    if(event.target.value.length > 2) {
      this.TestService.searchMovies(event.target.value).subscribe(
        data => {
          this.movies = data.results;
          console.log(data);
        },
        err => {
          console.log(err);
        },
        () => console.log('Movie Search Complete')
      );
    }
  }
  itemTapped(event, movie) {
    console.log(movie);
    this.navController.push(MovieInfo, {
      movie: movie
    });
  }
}
