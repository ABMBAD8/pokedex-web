import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSortModule } from '@angular/material/sort';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatInputModule,
    MDBBootstrapModule,
    MatIconModule,
    MatDialogModule,
    MatExpansionModule,
    MatSortModule,
    MatListModule
  ],
  entryComponents: [PokemonDetailsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
