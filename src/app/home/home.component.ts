import { Usuario } from './../model/Usuario';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  usuario: Usuario;
  form: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      nome: [null],
      idade: [null]
    });
  }

  onSubmit() {
    this.usuario = new Usuario();

    this.usuario.nome = this.form.get('nome').value;
    this.usuario.idade = this.form.get('idade').value;

    console.log(this.usuario);
  }

}
