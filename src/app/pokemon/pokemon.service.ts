import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, tap } from "rxjs";
import { Pokemon } from "./pokemon";

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>("api/pokemons").pipe(
      tap((pokemonList) => this.log(pokemonList)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    }

    return this.http.put<Pokemon>(`api/pokemons`, pokemon, httpOptions).pipe(
      tap(response => this.log(pokemon)),
      catchError(error => this.handleError(error, null))
    )
  }

  private log(response : any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.table(error);
    return of(errorValue);
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
