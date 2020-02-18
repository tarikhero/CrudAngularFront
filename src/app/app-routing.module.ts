import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { HomeComponent } from './home/home.component';
import { CriarComponent } from './criar/criar.component';
import { AlterarComponent } from './alterar/alterar.component';
import { DeletarComponent } from './deletar/deletar.component';



const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "criar", component: CriarComponent},
  { path: "listar", component: ListarComponent },
  { path: "alterar", component: AlterarComponent},
  { path: "deletar", component: DeletarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
