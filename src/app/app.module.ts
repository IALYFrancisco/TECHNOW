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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddproductComponent } from './components/admindashboard/addproduct/addproduct.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './views/authentication/authentication.component';
import { LoginComponent } from './views/authentication/login/login.component';
import { RegisterComponent } from './views/authentication/register/register.component'
import { InterceptorService } from './services/interceptor.service';


const routes: Routes = [
  { path: '',
    component:AccueilComponent
  },
  { 
    path: 'admindashboard', component: AdmindashboardComponent, children: [
    { 
      path: '',
      component: AdminallproductsComponent
    },
    {
      path: 'settings',
      component: AdminsettingsComponent
    }]
  },
  { path: 'authentication',
    component: AuthenticationComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
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
    AddproductComponent,
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }