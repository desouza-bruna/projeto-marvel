import { SearchService } from './../../../core/services/search.service';
import { ToastrService } from 'ngx-toastr';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Input() url: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';

  @Output() resultFound = new EventEmitter();
  @Output() clearedSearch = new EventEmitter();

  keyWord: string = '';

  constructor(
    public toastr: ToastrService,
    private searchService: SearchService
  ) {}

  ngOnInit() {}

  search() {
    this.toastr.info(`Buscando ${this.label}`);

    this.searchService.search(this.keyWord, this.url).subscribe(
      (response) => {
        this.toastr.clear();

        if (response.data.results.length == 0) {
          this.toastr.warning(
            'Nenhum resultado encontrado. Tente outra palavra chave.'
          );
        } else {
          this.resultFound.emit(response.data.results);
        }
      },
      (error) => {
        this.toastr.clear();
        this.toastr.error('Não foi possível realizar a operação.', 'Erro!');
      }
    );
  }

  clearSearch() {
    this.keyWord = '';
    this.clearedSearch.emit(true);
  }
}
