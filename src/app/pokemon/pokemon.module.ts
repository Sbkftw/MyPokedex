import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokeColorTypePipe } from './poke-color-type.pipe';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { RouterModule, Routes } from '@angular/router';

const pokemonRoutes: Routes = [
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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonModule { }