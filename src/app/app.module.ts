import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TipousuarioComponent } from './components/pages/tipousuario/tipousuario.component';
import { SetorComponent } from './components/pages/setor/setor.component';
import { FuncaoComponent } from './components/pages/funcao/funcao.component';
import { PerfilusuarioComponent } from './components/pages/perfilusuario/perfilusuario.component';
import { SistemasComponent } from './components/pages/sistemas/sistemas.component';
import { PapeisComponent } from './components/pages/papeis/papeis.component';
import { LogComponent } from './components/log/log.component';
import { NovousuarioComponent } from './components/pages/usuarios/novousuario/novousuario.component';
import { NovotipousuarioComponent } from './components/pages/tipousuario/novotipousuario/novotipousuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    MobileMenuComponent,
    FooterComponent,
    HeaderComponent,
    UsuariosComponent,
    HomeComponent,
    TipousuarioComponent,
    SetorComponent,
    FuncaoComponent,
    PerfilusuarioComponent,
    SistemasComponent,
    PapeisComponent,
    LogComponent,
    NovousuarioComponent,
    NovotipousuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
