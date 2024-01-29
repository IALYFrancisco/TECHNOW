import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavComponent } from './accueil/nav/nav.component';
import { ProduitsComponent } from './accueil/produits/produits.component';
import { CategorieComponent } from './accueil/produits/categorie/categorie.component';
import { CarteComponent } from './accueil/produits/carte/carte.component';

const routes: Routes = [
  { path: 'accueil', component:AccueilComponent},
  { path: '', redirectTo:'/accueil', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavComponent,
    ProduitsComponent,
    CategorieComponent,
    CarteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
