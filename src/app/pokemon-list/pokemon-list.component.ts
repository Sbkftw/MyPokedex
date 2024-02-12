import { Component } from "@angular/core";
import { Pokemon } from "../pokemon";
import { POKEMONS } from "../pokemon-list";
import { Router } from "@angular/router";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styles: [],
})
export class PokemonListComponent {
  pokemons: Pokemon[] = POKEMONS;

  constructor(private router: Router){

  }

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemons', pokemon.id]);
  }
}
