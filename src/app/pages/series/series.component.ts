import { ToastrService } from 'ngx-toastr';
import { Serie } from 'src/app/core/models/series';
import { SerieService } from './../../core/services/serie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent implements OnInit {
  originalSearch: Serie[];
  series: Serie[];
  searchResult: Serie[];
  researched: boolean = false;

  constructor(
    private serieService: SerieService,
    public toastr: ToastrService
  ) {}

  ngOnInit() {
    this.fetchSeries();
  }

  fetchSeries() {
    this.serieService.fetchSeries().subscribe(
      (response) => {
        this.originalSearch = response.data.results;
        this.series = response.data.results;
      },
      (error) => {
        this.toastr.error('Não foi possível realizar a operação.', 'Erro!');
      }
    );
  }

  updateSeries(event) {
    this.researched = true;
    this.series = event;
  }

  clearSearch(event) {
    if (event) {
      this.series = this.originalSearch;
      this.researched = false;
    }
  }

  get filteredSeries() {
    return this.researched
      ? this.series
      : this.series.filter((serie) => serie.description != null);
  }
}
