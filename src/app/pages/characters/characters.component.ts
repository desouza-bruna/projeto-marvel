import { Character } from './../../core/models/character';
import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: CharactersService) {}

  ngOnInit() {
    this.fetchCharacters();
  }

  fetchCharacters() {
    this.characterService.fetchCaracters().subscribe(
      (response) => {
        this.characters = response.data.results;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get filteredCharacter() {
    return this.characters.filter(
      (character: Character) => character.description != ''
    );
  }
}
