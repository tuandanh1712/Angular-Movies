import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movieapiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: MovieApiServiceService) {}
  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comdyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result);
      this.bannerResult = result.results;
    });
  }
  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log('trendingresult', result);
      this.trendingMovieResult = result.results;
    });
  }
  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      console.log(result, 'action');
      this.actionMovieResult = result.results;
    });
  }
  adventureMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      console.log(result, 'action');
      this.adventureMovieResult = result.results;
    });
  }

  animationMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      console.log(result, 'action');
      this.animationMovieResult = result.results;
    });
  }
  comdyMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      console.log(result, 'action');
      this.comedyMovieResult = result.results;
    });
  }
  // documentary
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    });
  }

  // science-fiction
  sciencefictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
    });
  }

  // thriller
  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }
}
