import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { Pokemon, PokemonHomeDetails, PokemonResults, Result } from './_modals/PokemonInterface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pokemonDetails: PokemonHomeDetails;
  pokemonHomeDetails: PokemonHomeDetails[] = [];
  pokemon: Pokemon;
  constructor(private http: HttpClient, public dialog: MatDialog) {

  }
  ngOnInit() {
    this.getPokemons().toPromise().then((pokemons: PokemonResults) => {
      pokemons.results.forEach((result: Result) => {
        this.getPokemon(result.url).toPromise().then((pokemon: Pokemon) => {
          this.pokemonDetails = {
            name: result.name,
            picture: pokemon.sprites.default,
            id: pokemon.id,
            url: result.url,
            effect_entries: pokemon.effect_entries
          };
          this.pokemonHomeDetails.push(this.pokemonDetails);
        })
      })
    });
  }

  openDialog(url: string): void {
    this.getPokemon(url).toPromise().then((pokemon: Pokemon) => {
      this.dialog.open(PokemonDetailsComponent, {
        width: '50%',
        height: '80%',
        data: {
          pokemon
        }
      });
    });

  }

  getPokemons() {
    return this.http.get(`${environment.POKEMON_API}pokemons`);
  }

  getPokemon(url: string) {
    const urls = { url: url }
    return this.http.post(`${environment.POKEMON_API}pokemon`, urls)
  }

}