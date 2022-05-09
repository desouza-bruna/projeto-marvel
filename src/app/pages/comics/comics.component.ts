import { Comic } from './../../core/models/comic';
import { Component, OnInit } from '@angular/core';
import { ComicService } from 'src/app/core/services/comic.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
})
export class ComicsComponent implements OnInit {
  comics: Comic[];
  constructor(private comicService: ComicService) {}

  ngOnInit() {
    this.fetchComics();
  }

  fetchComics() {
    this.comicService.fetchComics().subscribe(
      (response) => {
        this.comics = response.data.results;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get filteredComic() {
    return this.comics.filter(
      (comic) => comic.description && comic.description.length > 5
    );
  }
}
