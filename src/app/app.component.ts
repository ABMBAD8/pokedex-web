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
            url: result.url
          };
          this.pokemonHomeDetails.push(this.pokemonDetails);
        })
      })
    });
  }

  openDialog(url: string): void {
    const dialogRef = this.dialog.open(PokemonDetailsComponent, {
      width: '50%',
      height: '80%',
      data: {
        url
      }
    });
  }

  getPokemons() {
    return this.http.get(`${environment.POKEMON_API}pokemons`);
  }

  getPokemon(url: string) {

    return this.http.get(`${environment.POKEMON_API}pokemon/${url}`)
  }

}