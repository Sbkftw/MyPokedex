import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-pokemon-form",
  templateUrl: "./pokemon-form.component.html",
  styleUrls: ["./pokemon-form.component.css"],
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  pokemonTypeList: string[];
  isAddForm: boolean;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.pokemonTypeList = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes("add");
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const isChecked = ($event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  onSubmit() {
    console.log("Submitting form ...");
    if (this.isAddForm) {
      this.pokemonService.createPokemon(this.pokemon).subscribe((pokemon: Pokemon) => this.router.navigate(['/pokemons', pokemon.id]))
    } else {
      this.pokemonService.updatePokemon(this.pokemon).subscribe(() => {
        this.router.navigate(["/pokemons", this.pokemon.id]);
      });
    }
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }

    if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  goBack(pokemonId: number) {
    this.router.navigate(["/pokemons", pokemonId]);
  }
}
