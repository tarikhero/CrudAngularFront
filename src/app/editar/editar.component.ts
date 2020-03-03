import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Usuario } from './../model/Usuario';
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.sass']
})
export class EditarComponent implements OnInit {

  usuario: Usuario;
  form: FormGroup;
  id: number;

  API = 'http://localhost:8080/pessoa';

  constructor(
    private _fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.loadById(this.id).subscribe(
        usuario => this.update(usuario)
      )
    })

    this.form = this._fb.group({
      nome: [null],
      idade: [null]
    });

  }

  onSubmit() {
    this.usuario = new Usuario();
    this.usuario.nome = this.form.get('nome').value;
    this.usuario.idade = this.form.get('idade').value;

    this.http.put<Usuario>(`http://localhost:8080/pessoa/${this.id}`, this.usuario)
      .subscribe(
        success => this.router.navigate(['/'])
      );
  }

  update(usuario: Usuario) {
    this.form.setValue({
      "nome": usuario.nome,
      "idade": usuario.idade
    })
  }

  loadById(id: number) {
    return this.http.get<Usuario>(`${this.API}/${id}`);
  }
}
