import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokemonHomeDetails, PokemonResults, Result } from '../_modals/PokemonInterface';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  pokemons: Pokemon;
  panelOpenState: boolean = false;
  constructor(private http: HttpClient, public dialogRef: MatDialogRef<AppComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
    this.pokemons = null;
    this.getPokemon(this.data["url"]).toPromise().then((pokemon: Pokemon) => {
      this.pokemons = pokemon;
      console.info(this.pokemons)
    })

  }

  getPokemon(url: string) {

    return this.http.get(`${url}`)
  }
}

