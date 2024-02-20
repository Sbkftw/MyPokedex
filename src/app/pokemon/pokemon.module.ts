import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokeColorTypePipe } from './poke-color-type.pipe';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';

const pokemonRoutes: Routes = [
  {
    path: "edit/pokemon/:id",
    component: EditPokemonComponent
  },
  {
    path: "pokemon/add",
    component: AddPokemonComponent
  },
  {
    path: "pokemons",
    component: PokemonListComponent
  },
  {
    path: "pokemons/:id",
    component: PokemonDetailComponent
  }
];

@NgModule({
  declarations: [
    BorderCardDirective,
    PokeColorTypePipe,
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
