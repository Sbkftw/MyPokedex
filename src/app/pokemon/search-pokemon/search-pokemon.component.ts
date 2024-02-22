import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap
} from "rxjs";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-search-pokemon",
  templateUrl: "./search-pokemon.component.html",
  styles: [],
})
export class SearchPokemonComponent implements OnInit {
  searchParameters = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemons$ = this.searchParameters.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter((searchParameter) => searchParameter.length >= 2),
      switchMap((searchParameter) =>
        this.pokemonService.searchPokemonList(searchParameter)
      )
    );
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(["/pokemons", pokemon.id]);
  }
  search(parameter: string) {
    this.searchParameters.next(parameter);
  }
}
