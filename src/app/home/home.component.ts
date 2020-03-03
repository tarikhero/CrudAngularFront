import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Usuario } from './../model/Usuario';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  usuario: Usuario;
  usuarios: Array<Usuario>;

  actionName: string;

  form = new FormGroup({
    nome: new FormControl(''),
    idade: new FormControl(''),
  });

  API = 'http://localhost:8080/pessoa';



  constructor(
    private _fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.actionName = 'Cadastrar';
    this.form = this._fb.group({
      nome: [null],
      idade: [null]
    });
    this.list();
  }


  onSubmit() {
    this.usuario = new Usuario();
    this.usuario.nome = this.form.get('nome').value;
    this.usuario.idade = this.form.get('idade').value;

    this.http.post<Usuario>("http://localhost:8080/pessoa", this.usuario)
      .subscribe(
        success => this.list()
      );
  }


  list() {
    this.http.get<Array<Usuario>>(this.API)
      .subscribe(
        data => this.usuarios = data
      );
  }

  delete(id: number) {
    const url = `${this.API}/${id}`;
    this.http.delete(url).subscribe(
      success => this.list()
    );
  }

  editar(id: number) {
    this.actionName = 'Atualizar';

    this.loadById(id).subscribe(
      usuario => {
        this.usuario = usuario;
        this.form.setValue({
          "nome": usuario.nome,
          "idade": usuario.idade
        })
      }
    );
    // this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  atualizar(id: number) {
    this.usuario.nome = this.form.get('nome').value;
    this.usuario.idade = this.form.get('idade').value;

    this.http.put<Usuario>(`http://localhost:8080/pessoa/${id}`, this.usuario)
      .subscribe(
        success => {
          this.list();
          this.backSignUp();
        }
      );
  }

  backSignUp() {
    this.actionName = 'Cadastrar';
    this.form.reset();
  }

  loadById(id: number) {
    return this.http.get<Usuario>(`${this.API}/${id}`);
  }

}
