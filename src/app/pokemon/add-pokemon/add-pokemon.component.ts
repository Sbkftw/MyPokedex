import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  template: `
  <h2 class="center">Créer un pokémon</h2>
  <p *ngIf="pokemon" class="center">
    <img [src]="pokemon.picture" />
  </p>
  <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
`,
  styles: [
  ]
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }

}
