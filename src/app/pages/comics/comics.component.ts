import { Comic } from './../../core/models/comic';
import { Component, OnInit } from '@angular/core';
import { ComicService } from 'src/app/core/services/comic.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
})
export class ComicsComponent implements OnInit {
  originalSearch: Comic[];
  comics: Comic[];
  searchResult: Comic[];
  researched: boolean = false;

  constructor(
    private comicService: ComicService,
    public toastr: ToastrService
  ) {}

  ngOnInit() {
    this.fetchComics();
  }

  fetchComics() {
    this.comicService.fetchComics().subscribe(
      (response) => {
        this.originalSearch = response.data.results;
        this.comics = response.data.results;
      },
      (error) => {
        this.toastr.error('Não foi possível realizar a operação.', 'Erro!');
      }
    );
  }

  updateComics(event) {
    this.researched = true;
    this.comics = event;
  }

  clearSearch(event) {
    if (event) {
      this.comics = this.originalSearch;
      this.researched = false;
    }
  }

  get filteredComic() {
    return this.researched
      ? this.comics
      : this.comics.filter(
          (comic) => comic.description && comic.description.length > 5
        );
  }
}
