import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import { HomeComponent } from './home/home.component';
import { CriarComponent } from './criar/criar.component';
import { AlterarComponent } from './alterar/alterar.component';
import { DeletarComponent } from './deletar/deletar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    HomeComponent,
    CriarComponent,
    AlterarComponent,
    DeletarComponent
  ],
  imports: [
    // HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
