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
  comics: Comic[];
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
        this.comics = response.data.results;
      },
      (error) => {
        this.toastr.error('Não foi possível realizar a operação.', 'Erro!');
      }
    );
  }

  get filteredComic() {
    return this.comics.filter(
      (comic) => comic.description && comic.description.length > 5
    );
  }
}
