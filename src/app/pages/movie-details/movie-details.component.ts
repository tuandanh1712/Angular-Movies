import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movieapiservice.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  getMovieDetailResult: any = [];
  getMovieVideoResult: any = [];
  getMovieCastResult: any = [];
  constructor(
    private service: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}
  ngOnInit(): void {
    let getParamsId = this.router.snapshot.paramMap.get('id');
    this.getMovie(getParamsId);
    this.getVideo(getParamsId);
    this.getMovieCast(getParamsId);
  }
  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      console.log('getdetailMovies', result);
      this.getMovieDetailResult = result;
    });
  }
  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      console.log('getmovieVideo', result);
      result.results.forEach((element: any) => {
        if (element.type === 'Trailer') {
          this.getMovieVideoResult = element.key;
        }
      });
    });
  }
  getMovieCast(id: any) {
    this.service.getMovieCast(id).subscribe((result) => {
      console.log('MovieCart', result);
      this.getMovieCastResult = result.cast;
    });
  }
}
