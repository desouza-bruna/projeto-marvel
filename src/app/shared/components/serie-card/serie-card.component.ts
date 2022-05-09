import { Component, OnInit, Input } from '@angular/core';
import { Serie } from 'src/app/core/models/series';

@Component({
  selector: 'app-serie-card',
  templateUrl: './serie-card.component.html',
  styleUrls: ['./serie-card.component.scss'],
})
export class SerieCardComponent implements OnInit {
  @Input() serie: Serie;

  constructor() {}

  ngOnInit() {}
}
