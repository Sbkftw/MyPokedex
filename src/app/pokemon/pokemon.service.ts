import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon";
import { POKEMONS } from "./pokemon-list";

@Injectable()
export class PokemonService {
  constructor() {}

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon | undefined {
    return POKEMONS.find((pokemon) => pokemon.id == +pokemonId);
  }

  getPokemonTypeList(): string[] {
    return [
      "Feu",
      "Eau",
      "Plante",
      "Insecte",
      "Normal",
      "Vol",
      "Poison",
      "Fée",
      "Psy",
      "Electrik",
      "Combat",
    ];
  }
}
