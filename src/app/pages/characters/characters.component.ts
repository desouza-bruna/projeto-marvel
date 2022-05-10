import { ToastrService } from 'ngx-toastr';
import { Character } from './../../core/models/character';
import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  originalSearch: Character[];
  characters: Character[];
  searchResult: Character[];
  researched: boolean = false;

  constructor(
    private characterService: CharactersService,
    public toastr: ToastrService
  ) {}

  ngOnInit() {
    this.fetchCharacters();
  }

  fetchCharacters() {
    this.characterService.fetchCaracters().subscribe(
      (response) => {
        this.originalSearch = response.data.results;
        this.characters = response.data.results;
      },
      (error) => {
        this.toastr.error('Não foi possível realizar a operação.', 'Erro!');
      }
    );
  }

  updateCharacters(event) {
    this.researched = true;
    this.characters = event;
  }

  clearSearch(event) {
    if (event) {
      this.characters = this.originalSearch;
      this.researched = false;
    }
  }

  get filteredCharacter() {
    return this.researched
      ? this.characters
      : this.characters.filter((character) => character.description != '');
  }
}
