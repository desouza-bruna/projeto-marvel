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
  characters: Character[];

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
        this.characters = response.data.results;
      },
      (error) => {
        this.toastr.error('Não foi possível realizar a operação.', 'Erro!');
      }
    );
  }

  get filteredCharacter() {
    return this.characters.filter((character) => character.description != '');
  }
}
