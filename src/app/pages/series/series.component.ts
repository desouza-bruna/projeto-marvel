import { Serie } from 'src/app/core/models/series';
import { SerieService } from './../../core/services/serie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent implements OnInit {
  series: Serie[];
  constructor(private serieService: SerieService) {}

  ngOnInit() {
    this.fetchSeries();
  }

  fetchSeries() {
    this.serieService.fetchSeries().subscribe(
      (response) => {
        this.series = response.data.results;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get filteredSeries() {
    return this.series.filter((serie) => serie.description != null);
  }
}
