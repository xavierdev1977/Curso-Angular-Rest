import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  students: Observable<User[]>;
  nome: String;

  constructor(private usuarioService: UsuarioService) {

  }

  carregarUsuarios() {
    this.usuarioService.getStudentList().subscribe(data => {
      this.students = data;
    });
  }

  ngOnInit() {
    this.carregarUsuarios();
  }

  deleteUsuario(id: Number) {
    this.usuarioService.deletarUsuario(id).subscribe(data => {
      console.log("retorno do metodo deletar: " + data);
      this.carregarUsuarios();
    })
  }

  consultarUser() {
    this.usuarioService.consultarUser(this.nome).subscribe(data => {
      this.students = data
    });
  }

}
