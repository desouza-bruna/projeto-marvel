import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/core/models/comic';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.scss'],
})
export class ComicCardComponent implements OnInit {
  @Input() comic: Comic;
  constructor() {}

  ngOnInit(): void {}
}
