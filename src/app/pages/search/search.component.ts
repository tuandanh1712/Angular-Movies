import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movieapiservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchResult: any = [];
  constructor(private service: MovieApiServiceService) {}
  ngOnInit(): void {}

  searchForm = new FormGroup({
    movieName: new FormControl('', Validators.required),
  });
  submitForm() {
    console.log(this.searchForm.value);
    this.service.getSearchMovie(this.searchForm.value).subscribe((result) => {
      console.log('searchmovie', result);
      this.searchResult = result.results;
    });
  }
}
