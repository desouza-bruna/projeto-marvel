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
  series: Serie[];
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
        this.series = response.data.results;
      },
      (error) => {
        this.toastr.error('Não foi possível realizar a operação.', 'Erro!');
      }
    );
  }

  get filteredSeries() {
    return this.series.filter((serie) => serie.description != null);
  }
}
