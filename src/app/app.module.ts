import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavComponent } from './accueil/nav/nav.component';
import { ProduitsComponent } from './accueil/produits/produits.component';
import { CategorieComponent } from './accueil/produits/categorie/categorie.component';
import { CarteComponent } from './accueil/produits/carte/carte.component';
import { AdmindashboardComponent } from './views/admindashboard/admindashboard.component';
import { SidebarComponent } from './components/admindashboard/sidebar/sidebar.component';
import { AdminallproductsComponent } from './components/admindashboard/adminallproducts/adminallproducts.component';
import { AdminsettingsComponent } from './components/admindashboard/adminsettings/adminsettings.component';
import { NavbarComponent } from './components/admindashboard/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component:AccueilComponent },
  { path: 'admindashboard', component: AdmindashboardComponent, children: [
    { path: '', component: AdminallproductsComponent },
    { path: 'settings', component: AdminsettingsComponent }
  ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavComponent,
    ProduitsComponent,
    CategorieComponent,
    CarteComponent,
    AdmindashboardComponent,
    SidebarComponent,
    AdminallproductsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
